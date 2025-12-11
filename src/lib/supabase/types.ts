export type RefLevel = 'youth' | 'high_school' | 'college' | 'pro';
export type ExperienceLevel = 'new' | 'developing' | 'experienced' | 'veteran';
export type TrainingFrequency = 'daily' | 'few_times_week' | 'weekly' | 'casual';

export interface UserProfile {
  id: string;
  email: string;
  first_name: string;
  ref_level: RefLevel;
  experience_level: ExperienceLevel;
  years_experience?: number;
  avatar_url?: string;
  goals?: string[];
  training_frequency?: TrainingFrequency;
  onboarding_completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: UserProfile;
        Insert: Omit<UserProfile, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<UserProfile, 'id' | 'created_at'>>;
      };
    };
  };
}

// Goals options
export const GOALS_OPTIONS = [
  { id: 'accuracy', label: 'Improve call accuracy' },
  { id: 'speed', label: 'Make faster decisions' },
  { id: 'pressure', label: 'Stay calm under pressure' },
  { id: 'rules', label: 'Master complex rules' },
  { id: 'advancement', label: 'Advance to higher levels' },
  { id: 'consistency', label: 'Build consistent habits' },
] as const;

// Ref level options
export const REF_LEVEL_OPTIONS = [
  { id: 'youth', label: 'Youth / Rec League' },
  { id: 'high_school', label: 'High School' },
  { id: 'college', label: 'College' },
  { id: 'pro', label: 'Professional' },
] as const;

// Experience level options
export const EXPERIENCE_OPTIONS = [
  { id: 'new', label: 'New (0-1 years)', years: '0-1' },
  { id: 'developing', label: 'Developing (2-4 years)', years: '2-4' },
  { id: 'experienced', label: 'Experienced (5-9 years)', years: '5-9' },
  { id: 'veteran', label: 'Veteran (10+ years)', years: '10+' },
] as const;

// Training frequency options
export const FREQUENCY_OPTIONS = [
  { id: 'daily', label: 'Daily' },
  { id: 'few_times_week', label: 'A few times a week' },
  { id: 'weekly', label: 'Once a week' },
  { id: 'casual', label: 'Casually' },
] as const;
