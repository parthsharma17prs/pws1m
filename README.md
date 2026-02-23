# ANTI App - React Native Career Platform

A modern React Native application for career development with AI-powered features, built with Expo, TypeScript, and clean architecture.

## 🎨 Features

### Student Dashboard
- **AI Resume Analyzer** - Get ATS score and improvement suggestions
- **AI Calling** - Mock AI career assistant calls
- **Mock Interview** - Practice interviews with difficulty levels
- **Interview Questions** - Browse categorized interview questions
- **Applied Jobs** - Track job applications and status
- **ATS Score** - Detailed resume scoring with breakdown

### Company Dashboard
- View applicants and their ATS scores
- Review resumes
- Manage job postings
- Track application status

### Admin Dashboard
- Platform statistics and analytics
- User management (students & companies)
- Activity monitoring
- Success metrics

## 🛠 Tech Stack

- **React Native** with Expo (~50.0.0)
- **TypeScript** for type safety
- **React Navigation** for routing
- **Expo Three** for 3D animated backgrounds
- **Expo Camera** for face detection (mock)
- **Context API** for state management

## 📁 Project Structure

```
ANTI APP2/
├── App.tsx                          # Root component
├── app.json                         # Expo configuration
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── babel.config.js                  # Babel config
└── src/
    ├── components/                  # Reusable UI components
    │   ├── AnimatedBackground.tsx   # 3D dots animation
    │   ├── Button.tsx               # Custom button
    │   ├── Card.tsx                 # Card container
    │   └── Header.tsx               # Navigation header
    ├── context/
    │   └── AuthContext.tsx          # Authentication state
    ├── data/
    │   └── mockData.ts              # Mock API data
    ├── navigation/
    │   └── AppNavigator.tsx         # Navigation setup
    ├── screens/
    │   ├── LandingScreen.tsx        # Landing page with 3D bg
    │   ├── AuthScreen.tsx           # Login/signup
    │   ├── AdminDashboard.tsx       # Admin dashboard
    │   ├── CompanyDashboard.tsx     # Company dashboard
    │   └── student/                 # Student screens
    │       ├── StudentDashboard.tsx
    │       ├── ResumeAnalyzerScreen.tsx
    │       ├── AICallingScreen.tsx
    │       ├── MockInterviewScreen.tsx
    │       ├── InterviewQuestionsScreen.tsx
    │       ├── AppliedJobsScreen.tsx
    │       └── ATSScoreScreen.tsx
    ├── theme/
    │   └── index.ts                 # Theme colors & styles
    └── types/
        └── index.ts                 # TypeScript types
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (Mac) or Android Emulator

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm start
```

3. **Run on platform:**
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## 👤 Demo Accounts

The app includes 3 demo accounts for testing:

### Student Account
- **Email:** student@demo.com
- **Password:** any
- **Features:** Full student dashboard access

### Company Account
- **Email:** company@demo.com
- **Password:** any
- **Features:** View applicants, manage jobs

### Admin Account
- **Email:** admin@demo.com
- **Password:** any
- **Features:** Platform management, analytics

## 🎨 Theme

The app uses a soft, modern design inspired by the provided theme:
- **Primary Color:** Soft Blue (#8BA7E8)
- **Background:** Cream/Beige (#F5F1E8)
- **Accent Colors:** Pink, Orange, Purple
- **Typography:** Clean, modern fonts
- **Components:** Rounded cards with subtle shadows

## 🔐 Authentication

Two login methods are available:

1. **Face Detection Login** (Mock)
   - Simulates face scanning
   - Auto-logs in as student

2. **Password Login**
   - Email + password fields
   - Validates against demo accounts

## 📱 Key Screens Explained

### Landing Screen
- Full-screen 3D animated background using Three.js
- Centered app title and "Get Started" button
- Smooth transitions to auth screen

### Student Dashboard
- Grid layout with feature cards
- Color-coded icons for each feature
- Welcome card with user info
- Quick access to all student features

### Resume Analyzer
- ATS score display (0-100)
- Strengths and improvements lists
- Keyword detection
- Upload functionality (UI only)

### Mock Interview
- Interview cards with metadata
- Difficulty badges (easy/medium/hard)
- Duration and question count
- Start interview button

### Applied Jobs
- Job application cards
- Status badges (pending/reviewed/shortlisted)
- Company info and job details
- Application date tracking

## 🏗 Architecture

### Clean Architecture Principles
- **Separation of Concerns:** Components, screens, data, and navigation are separated
- **Reusability:** Shared components (Button, Card, Header)
- **Type Safety:** Full TypeScript implementation
- **Scalability:** Modular folder structure for easy expansion

### State Management
- **Context API** for global auth state
- **Local state** for component-specific data
- **Mock data** simulates API responses

### Navigation
- **Stack Navigator** for screen transitions
- **Protected routes** based on user role
- **Role-based dashboards** (student/company/admin)

## 🎯 Best Practices Implemented

1. **TypeScript** - Full type coverage
2. **Component Reusability** - Shared UI components
3. **Consistent Styling** - Centralized theme
4. **Clean Code** - Comments and clear naming
5. **Modular Structure** - Easy to maintain and scale
6. **Mock Data** - Realistic data structure for future API integration

## 🔄 Future Enhancements

- Real backend API integration
- Actual face detection implementation
- Real-time AI calling with voice
- Video interview recording
- Resume file upload and parsing
- Push notifications
- Analytics dashboard
- Chat functionality

## 📝 Notes

- All backend logic is mocked for demonstration
- Face detection uses mock authentication
- 3D background may impact performance on older devices
- Camera permissions required for face detection feature

## 🐛 Troubleshooting

### Common Issues

**Metro bundler issues:**
```bash
npm start -- --reset-cache
```

**iOS build issues:**
```bash
cd ios && pod install && cd ..
```

**Android build issues:**
```bash
cd android && ./gradlew clean && cd ..
```

## 📄 License

This project is for demonstration purposes.

---

Built with ❤️ using React Native & Expo
