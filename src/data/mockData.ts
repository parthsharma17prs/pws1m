import { User, Job, Application, Interview, InterviewQuestion, Resume } from '../types';

export const DEMO_USERS: User[] = [
  { id: '1', name: 'Roam', email: 'student@demo.com', role: 'student', level: 'Level Up' },
  { id: '2', name: 'Tech Corp', email: 'company@demo.com', role: 'company', level: 'Enterprise' },
  { id: '3', name: 'Admin', email: 'admin@demo.com', role: 'admin', level: 'Super Admin' },
];

export const MOCK_JOBS: Job[] = [
  { id: '1', title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote', type: 'Full-time', salary: '$80k - $120k', description: 'Build modern web applications using React and TypeScript.', requirements: ['React', 'TypeScript', '3+ years experience'], postedDate: '2026-02-01', status: 'active' },
  { id: '2', title: 'UX Designer', company: 'Design Studio', location: 'New York', type: 'Full-time', salary: '$70k - $100k', description: 'Create beautiful user experiences for mobile and web.', requirements: ['Figma', 'User Research', 'Portfolio'], postedDate: '2026-02-03', status: 'active' },
  { id: '3', title: 'Backend Engineer', company: 'Cloud Systems', location: 'San Francisco', type: 'Full-time', salary: '$90k - $140k', description: 'Design and build scalable backend services.', requirements: ['Node.js', 'Python', 'AWS'], postedDate: '2026-02-04', status: 'active' },
  { id: '4', title: 'Mobile Developer', company: 'App Studio', location: 'Remote', type: 'Contract', salary: '$60k - $90k', description: 'Build cross-platform mobile applications.', requirements: ['React Native', 'TypeScript', 'Firebase'], postedDate: '2026-02-05', status: 'active' },
  { id: '5', title: 'Data Scientist', company: 'Data Insights', location: 'Boston', type: 'Full-time', salary: '$100k - $150k', description: 'Analyze data and build ML models.', requirements: ['Python', 'TensorFlow', 'SQL'], postedDate: '2026-02-06', status: 'closed' },
];

export const MOCK_APPLICATIONS: Application[] = [
  { id: '1', jobId: '1', studentId: '1', studentName: 'Roam Student', status: 'reviewed', appliedDate: '2026-02-05', atsScore: 85 },
  { id: '2', jobId: '2', studentId: '1', studentName: 'Roam Student', status: 'pending', appliedDate: '2026-02-06', atsScore: 78 },
  { id: '3', jobId: '3', studentId: '1', studentName: 'Roam Student', status: 'shortlisted', appliedDate: '2026-02-04', atsScore: 92 },
  { id: '4', jobId: '4', studentId: '1', studentName: 'Roam Student', status: 'rejected', appliedDate: '2026-02-03', atsScore: 45 },
];

export const MOCK_INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  { id: '1', question: 'Tell me about yourself and your background.', category: 'Behavioral', difficulty: 'easy' },
  { id: '2', question: 'Explain the difference between var, let, and const.', category: 'Technical', difficulty: 'medium' },
  { id: '3', question: 'How would you optimize a slow React application?', category: 'Technical', difficulty: 'hard' },
  { id: '4', question: 'Describe a challenge you overcame at work.', category: 'Behavioral', difficulty: 'easy' },
  { id: '5', question: 'What is the event loop in JavaScript?', category: 'Technical', difficulty: 'medium' },
  { id: '6', question: 'How do you handle state management in large apps?', category: 'Technical', difficulty: 'hard' },
];

export const MOCK_INTERVIEWS: Interview[] = [
  { id: '1', title: 'Frontend Developer Interview', type: 'Technical', duration: '45 min', difficulty: 'medium', questions: MOCK_INTERVIEW_QUESTIONS.slice(0, 3) },
  { id: '2', title: 'Behavioral Assessment', type: 'Behavioral', duration: '30 min', difficulty: 'easy', questions: MOCK_INTERVIEW_QUESTIONS.filter(q => q.category === 'Behavioral') },
  { id: '3', title: 'System Design Round', type: 'System Design', duration: '60 min', difficulty: 'hard', questions: MOCK_INTERVIEW_QUESTIONS.slice(2, 6) },
];

export const MOCK_RESUME: Resume = {
  id: '1', studentId: '1', fileName: 'resume_roam.pdf', uploadDate: '2026-02-01', atsScore: 82,
  analysis: {
    strengths: ['Strong technical skills section', 'Quantified achievements', 'Clear formatting', 'Good use of action verbs'],
    improvements: ['Add more relevant keywords', 'Expand project descriptions', 'Include certifications', 'Add LinkedIn profile'],
    keywords: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Git', 'REST API', 'Agile'],
  },
};

export const PLATFORM_STATS = {
  totalStudents: 1247,
  totalCompanies: 89,
  totalApplications: 3456,
  successRate: 73,
};

export const RECENT_ACTIVITY = [
  { id: '1', action: 'New student registered', name: 'Alex Johnson', time: '2 min ago', icon: 'person-add' as const },
  { id: '2', action: 'Application submitted', name: 'Sarah Lee', time: '15 min ago', icon: 'document-text' as const },
  { id: '3', action: 'Company joined', name: 'StartupXYZ', time: '1 hour ago', icon: 'business' as const },
  { id: '4', action: 'Interview completed', name: 'Mike Chen', time: '2 hours ago', icon: 'checkmark-circle' as const },
];
