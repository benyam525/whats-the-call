# RuleVision Changelog

A daily log of development progress for RuleVision - the AI-powered referee training platform.

---

## December 10, 2024

### Authentication & User Accounts
- **Google Sign-In** - Users can now sign in with their Google account
- **Email/Password Auth** - Traditional signup option with email verification
- **Auth Pages Restyled** - Login, signup, and onboarding pages now match RuleVision branding (clean white theme with logo)
- **Header Sign In/Out** - Added authentication buttons to main navigation

### Onboarding Flow
- **4-Step Onboarding** - New users complete a personalized setup:
  1. Name & avatar upload
  2. Officiating level & experience
  3. Training goals selection
  4. Preferred training frequency
- **Profile Storage** - User preferences saved to database for personalization

### Dashboard Overhaul
- **Ref Readiness Score** - Animated circular progress ring showing overall readiness
- **Three Pillars** - Game IQ, Execution, and Commitment metrics
- **Category Mastery** - Grid showing confidence levels across all training categories
- **Empty State** - Friendly welcome for new users with no training data yet

---

## December 9, 2024

### Demo Dashboard
- **Partner Demo Mode** - Dedicated `/dashboard/demo` route with sample data for presentations
- **Mobile Optimized** - Dashboard works great on phones and tablets

### UI Polish
- **Liquid Glass Design** - Refined visual style with modern glassmorphism
- **Training Pages Update** - All training modes match the new dashboard aesthetic

---

## December 8, 2024

### Ref IQ (AI Assistant)
- **Renamed from "Ref God"** - More professional branding
- **Go Deeper Fixed** - AI explanations now never contradict the correct answer
- **Desktop Modal** - Better UX on larger screens
- **Faster Responses** - Optimized API calls

### Content Pages
- **FAQ Page** - Common questions answered
- **Documentation** - Rules reference and platform guide
- **Marketing Page** - Updated copy and pricing tiers

### Mobile Experience
- **Hamburger Menu** - Collapsible navigation on mobile devices

---

## Earlier Development

### Core Training Features
- Daily 5 Challenge
- Sudden Death Mode
- Category Drill
- Film Room
- Leaderboards

### Platform Foundation
- Next.js 14 with App Router
- Tailwind CSS styling
- Supabase backend
- Vercel deployment

---

*This changelog is updated as new features are added. Check back for the latest progress!*
