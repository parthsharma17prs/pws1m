export type UserRole = 'student' | 'company' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  level?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  postedDate: string;
  status?: 'active' | 'closed' | 'draft';
}

export interface Application {
  id: string;
  jobId: string;
  studentId: string;
  studentName: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected';
  appliedDate: string;
  atsScore: number;
}

export interface Interview {
  id: string;
  title: string;
  type: string;
  duration: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questions: InterviewQuestion[];
}

export interface InterviewQuestion {
  id: string;
  question: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Resume {
  id: string;
  studentId: string;
  fileName: string;
  uploadDate: string;
  atsScore: number;
  analysis: {
    strengths: string[];
    improvements: string[];
    keywords: string[];
  };
}

export interface PlatformStats {
  totalStudents: number;
  totalCompanies: number;
  totalApplications: number;
  successRate: number;
}
