// src/types/index.ts
export interface UserResponseDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: string;
  accessToken?: string;
  refreshToken?: string;
  verificationToken?: string;
  verifiedAt?: string;
  passwordResetToken?: string;
  resetTokenExpires?: string;
  isVerified: boolean;
  resetPassword?: boolean;
}

export interface UniversityResponseDto {
  name: string;
  imageUrl: string;
}

export interface GetFacultyDto {
  facultyName: string;
  facultyColor: string;
}

export interface CoursesDto {
  courseName: string;
  courseType: string;
}

export interface UniversityCourseModel {
  name: string;
  mode: string;
  type: string;
  duration: string;
  scoreType: string;
  asRequirements?: {
    mathematics?: number;
    mathematicalLiteracy?: number;
  };
  apsRequirements?: {
    mathematics?: number;
    mathematicalLiteracy?: number;
  };
  aveRequirements?: {
    mathematics?: number;
    mathematicalLiteracy?: number;
  };
  fpsRequirements?: {
    mathematics?: number;
    mathematicalLiteracy?: number;
  };
  cputRequirements?: {
    mathematics?: number;
    mathematicalLiteracy?: number;
  };
  subjectRequirements: {
    subject: string;
    minimumPercentage?: number;
    minimumLevel?: number;
  }[];
}

export interface SubjectDto {
  title: string;
  percentage?: number;
  level?: number;
}

export interface UniversityEligibilityResponseDto {
  universityName: string;
  faculty: string;
  facultyColor: string;
  programName: string;
  mode: string;
  type: string;
  duration: string;
}

export interface CategorySummaryDto {
  category: string;
  icon: string;
}

export interface CareerDto {
  title: string;
  description: string;
  aveJuniorIncome: string;
  aveMidIncome: string;
  aveSeniorIncome: string;
  demand: string;
  popularSkills: string[];
  salaryDefiningSkills: string[];
  popularEmployers: string[];
  possibleDegrees: string[];
  genderBreakdown: { female?: number; male?: number; other?: number }[];
}

export interface CareerStatsDto {
  stats: {
    categoryCount: number;
    jobsCount: number;
  };
  categories: string[];
}

export interface TestimonialResponseDto {
  name: string;
  testimony: string;
  role: string;
}
