'use client';

import { useState, useRef } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  RefLevel,
  ExperienceLevel,
  TrainingFrequency,
  REF_LEVEL_OPTIONS,
  EXPERIENCE_OPTIONS,
  GOALS_OPTIONS,
  FREQUENCY_OPTIONS,
} from '@/lib/supabase/types';

type Step = 1 | 2 | 3 | 4;

interface FormData {
  firstName: string;
  refLevel: RefLevel | null;
  experienceLevel: ExperienceLevel | null;
  goals: string[];
  trainingFrequency: TrainingFrequency | null;
  avatarFile: File | null;
  avatarPreview: string | null;
}

export default function OnboardingPage() {
  const [step, setStep] = useState<Step>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const supabase = createClient();

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    refLevel: null,
    experienceLevel: null,
    goals: [],
    trainingFrequency: null,
    avatarFile: null,
    avatarPreview: null,
  });

  const handleNext = () => {
    if (step < 4) {
      setStep((step + 1) as Step);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((step - 1) as Step);
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setFormData({ ...formData, avatarFile: file, avatarPreview: previewUrl });
    }
  };

  const toggleGoal = (goalId: string) => {
    const newGoals = formData.goals.includes(goalId)
      ? formData.goals.filter((g) => g !== goalId)
      : [...formData.goals, goalId];
    setFormData({ ...formData, goals: newGoals });
  };

  const handleComplete = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        setError('Please sign in to continue');
        router.push('/login');
        return;
      }

      let avatarUrl: string | undefined;

      if (formData.avatarFile) {
        const fileExt = formData.avatarFile.name.split('.').pop();
        const fileName = `${user.id}-${Date.now()}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from('avatars')
          .upload(fileName, formData.avatarFile);

        if (uploadError) {
          console.error('Avatar upload error:', uploadError);
        } else {
          const { data: { publicUrl } } = supabase.storage
            .from('avatars')
            .getPublicUrl(fileName);
          avatarUrl = publicUrl;
        }
      }

      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          email: user.email!,
          first_name: formData.firstName,
          ref_level: formData.refLevel!,
          experience_level: formData.experienceLevel!,
          goals: formData.goals,
          training_frequency: formData.trainingFrequency,
          avatar_url: avatarUrl,
          onboarding_completed: true,
        });

      if (profileError) {
        console.error('Profile error:', profileError);
        setError('Failed to save profile. Please try again.');
        setLoading(false);
        return;
      }

      router.push('/dashboard');
      router.refresh();
    } catch (err) {
      console.error('Onboarding error:', err);
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.firstName.trim().length > 0;
      case 2:
        return formData.refLevel !== null && formData.experienceLevel !== null;
      case 3:
        return true;
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/">
            <Image
              src="/RuleVisionv2.png"
              alt="RuleVision"
              width={180}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-lg">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    s === step
                      ? 'bg-brand-black text-white'
                      : s < step
                      ? 'bg-green-500 text-white'
                      : 'bg-brand-card text-brand-gray border border-brand-border'
                  }`}
                >
                  {s < step ? '✓' : s}
                </div>
              ))}
            </div>
            <div className="h-1 bg-brand-card rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-black transition-all duration-300"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl border border-brand-border p-8">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Step 1: Name & Avatar */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-brand-black mb-2">Let's get to know you</h2>
                <p className="text-brand-gray mb-6">What should we call you?</p>

                {/* Avatar Upload */}
                <div className="flex justify-center mb-6">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="relative w-24 h-24 rounded-full bg-brand-card border-2 border-dashed border-brand-border hover:border-brand-black transition-all group overflow-hidden"
                  >
                    {formData.avatarPreview ? (
                      <img
                        src={formData.avatarPreview}
                        alt="Avatar preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-brand-gray group-hover:text-brand-black transition">
                        <svg className="w-8 h-8 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="text-xs">Add Photo</span>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                    />
                  </button>
                </div>

                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-brand-black mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg text-brand-black placeholder-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent transition text-lg"
                    placeholder="Your first name"
                    autoFocus
                  />
                </div>
              </div>
            )}

            {/* Step 2: Level & Experience */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-brand-black mb-2">Your officiating experience</h2>
                <p className="text-brand-gray mb-6">Help us personalize your training</p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-3">
                      What level do you currently officiate?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {REF_LEVEL_OPTIONS.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, refLevel: option.id as RefLevel })}
                          className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                            formData.refLevel === option.id
                              ? 'bg-brand-black border-brand-black text-white'
                              : 'bg-white border-brand-border text-brand-black hover:border-brand-black'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-3">
                      How much experience do you have?
                    </label>
                    <div className="space-y-2">
                      {EXPERIENCE_OPTIONS.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, experienceLevel: option.id as ExperienceLevel })}
                          className={`w-full px-4 py-3 rounded-lg border text-sm font-medium transition-all text-left ${
                            formData.experienceLevel === option.id
                              ? 'bg-brand-black border-brand-black text-white'
                              : 'bg-white border-brand-border text-brand-black hover:border-brand-black'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Goals */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-brand-black mb-2">What are your goals?</h2>
                <p className="text-brand-gray mb-6">Select all that apply (optional)</p>

                <div className="space-y-2">
                  {GOALS_OPTIONS.map((goal) => (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => toggleGoal(goal.id)}
                      className={`w-full px-4 py-3 rounded-lg border text-sm font-medium transition-all text-left flex items-center gap-3 ${
                        formData.goals.includes(goal.id)
                          ? 'bg-brand-black border-brand-black text-white'
                          : 'bg-white border-brand-border text-brand-black hover:border-brand-black'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        formData.goals.includes(goal.id)
                          ? 'bg-white border-white'
                          : 'border-brand-border'
                      }`}>
                        {formData.goals.includes(goal.id) && (
                          <svg className="w-3 h-3 text-brand-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      {goal.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Training Frequency */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-brand-black mb-2">How often do you want to train?</h2>
                <p className="text-brand-gray mb-6">We'll tailor your experience accordingly</p>

                <div className="space-y-2">
                  {FREQUENCY_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, trainingFrequency: option.id as TrainingFrequency })}
                      className={`w-full px-4 py-4 rounded-lg border text-sm font-medium transition-all text-left ${
                        formData.trainingFrequency === option.id
                          ? 'bg-brand-black border-brand-black text-white'
                          : 'bg-white border-brand-border text-brand-black hover:border-brand-black'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-8 p-4 bg-brand-card rounded-lg border border-brand-border">
                  <h3 className="text-sm font-medium text-brand-gray mb-3">Your Profile</h3>
                  <div className="flex items-center gap-3">
                    {formData.avatarPreview ? (
                      <img src={formData.avatarPreview} alt="" className="w-12 h-12 rounded-full object-cover" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-brand-black flex items-center justify-center text-white font-bold text-lg">
                        {formData.firstName.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="text-brand-black font-medium">{formData.firstName}</p>
                      <p className="text-sm text-brand-gray">
                        {REF_LEVEL_OPTIONS.find(o => o.id === formData.refLevel)?.label} •{' '}
                        {EXPERIENCE_OPTIONS.find(o => o.id === formData.experienceLevel)?.label.split(' ')[0]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-8 flex gap-3">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 py-3 bg-brand-card hover:bg-gray-200 text-brand-black font-medium rounded-lg transition"
                >
                  Back
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex-1 py-3 bg-brand-black hover:bg-gray-800 text-white font-medium rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleComplete}
                  disabled={loading || !canProceed()}
                  className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Setting up...' : 'Start Training'}
                </button>
              )}
            </div>

            {/* Skip option for step 3 and 4 */}
            {(step === 3 || step === 4) && !loading && (
              <button
                type="button"
                onClick={step === 4 ? handleComplete : handleNext}
                className="w-full mt-3 py-2 text-brand-gray hover:text-brand-black text-sm transition"
              >
                Skip for now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
