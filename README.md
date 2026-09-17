# CareerPath AI — Personalized Career & Skills Advisor

An AI-powered career guidance platform for Indian students that analyzes education, skills, interests, and goals to deliver personalized career recommendations using **Google Cloud Generative AI / Gemini**.

## Live Demo

> Deploy on Vercel / Google Cloud and add link here.

## Features

- **AI Career Assessment** — Multi-factor analysis of skills, interests, academics, and personality
- **Personalized Career Recommendations** — Top 5 career paths with compatibility scores
- **Skill Gap Analysis** — Visual comparison of current vs required skills
- **Learning Roadmap** — 6-month personalized month-by-month plan
- **Career Explorer** — Searchable database of 20+ careers with details
- **AI Career Mentor Chatbot** — Context-aware chat using student profile
- **Student Dashboard** — Career readiness score, skill progress, goals
- **Multi-step Profile Onboarding** — Basic info, academics, skills, interests
- **Interest Assessment** — 10-question questionnaire with AI interest profiling
- **Responsive Design** — Works on desktop, tablet, and mobile

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS 4 |
| State | Zustand |
| AI | Google Cloud Generative AI (Gemini 2.0 Flash) |
| Charts | Recharts |
| Icons | Lucide React |
| Animations | Framer Motion |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Gemini API key ([Get one here](https://aistudio.google.com/apikey))

### Installation

```bash
git clone https://github.com/yourusername/careerpath-ai.git
cd careerpath-ai
npm install
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
careerpath-ai/
├── src/
│   ├── app/
│   │   ├── page.tsx                  # Landing page
│   │   ├── layout.tsx                # Root layout
│   │   ├── globals.css               # Global styles + theme
│   │   ├── dashboard/page.tsx        # Student dashboard
│   │   ├── profile/page.tsx          # Multi-step onboarding
│   │   ├── assessment/page.tsx       # Interest questionnaire + AI assessment
│   │   ├── recommendations/page.tsx  # Career recommendations
│   │   ├── skill-gap/page.tsx        # Skill gap visualization
│   │   ├── roadmap/page.tsx          # 6-month learning roadmap
│   │   ├── explorer/page.tsx         # Career explorer
│   │   ├── chat/page.tsx             # AI mentor chatbot
│   │   ├── login/page.tsx            # Login
│   │   ├── register/page.tsx         # Register
│   │   └── api/ai/
│   │       ├── assess/route.ts       # Assessment API endpoint
│   │       └── chat/route.ts         # Chat API endpoint
│   ├── components/
│   │   ├── ui/Sidebar.tsx            # Navigation sidebar
│   │   └── landing/LandingPage.tsx   # Landing page component
│   └── lib/
│       ├── store.ts                  # Zustand state + demo profile
│       ├── ai.ts                     # Gemini integration + fallback engine
│       ├── types.ts                  # TypeScript types
│       └── data/
│           ├── careers.ts            # 20 careers with full details
│           └── skills.ts             # Skills, questions, education data
├── .env.local                        # Environment variables
├── package.json
└── tsconfig.json
```

## How It Works

```
Student Profile → AI Processing (Gemini) → Career Matching → Recommendations
       ↓                    ↓                    ↓                ↓
  Education            Skill Gap            Learning          Dashboard
  Skills               Analysis             Roadmap           Updates
  Interests            Interest             Project
  Goals                Profiling            Ideas
```

1. Student fills multi-step profile (education, skills, interests, goals)
2. Interest assessment questionnaire captures preferences
3. Profile + interests sent to Gemini AI for analysis
4. AI generates personalized career recommendations with scores
5. Skill gaps identified, learning roadmap created
6. All results displayed on interactive dashboard

## Demo Profile

The app includes a pre-loaded demo student:

| Field | Value |
|-------|-------|
| Name | Demo Student |
| Education | B.Tech in AI & Data Science |
| Year | 2nd Year |
| Skills | Python (Intermediate), Java (Beginner), SQL (Beginner) |
| Interests | AI, Data Science, Software Development |
| Career Goal | AI/ML Engineer |

## Pages

| Page | Description |
|------|-------------|
| `/` | Landing page with hero, features, CTA |
| `/login` | Student login |
| `/register` | Student registration |
| `/profile` | 4-step profile onboarding |
| `/assessment` | 10-question interest assessment |
| `/recommendations` | Top 5 career recommendations with scores |
| `/skill-gap` | Visual skill gap analysis |
| `/roadmap` | 6-month personalized learning plan |
| `/explorer` | Searchable career database |
| `/chat` | AI Career Mentor chatbot |
| `/dashboard` | Student overview with metrics |

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/ai/assess` | POST | Generate career assessment |
| `/api/ai/chat` | POST | Chat with AI career mentor |

## Indian Education Focus

- Supports Indian degrees: B.Tech, B.E., B.Sc, BCA, B.Com, BA, MCA, M.Sc, MBA, etc.
- Engineering branches: CS, IT, AI&DS, ECE, EEE, Mechanical, Civil, etc.
- Career paths include: AI Engineer, Data Scientist, Government Officer (IAS/IPS), and more
- Salary ranges in LPA (Lakhs Per Annum)
- Placement and internship preparation

## Privacy & Responsible AI

- AI recommendations are guidance, not guaranteed outcomes
- No discrimination based on gender, caste, religion, or location
- Students can modify their profile at any time
- No private information exposed
- Students have full control over their data

## License

MIT

## Acknowledgments

- [Google Cloud Generative AI](https://cloud.google.com/vertex-ai) — AI intelligence layer
- [Next.js](https://nextjs.org) — React framework
- [Tailwind CSS](https://tailwindcss.com) — Styling
- [Recharts](https://recharts.org) — Charts and visualization
