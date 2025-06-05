// src/services/university/universityService.ts
import { BaseApiService } from '@/services/base_api';
import { apiConfig } from '@/configuration/api';
import {
  UniversityResponseDto,
  GetFacultyDto,
  CoursesDto,
  UniversityCourseModel,
  SubjectDto,
  UniversityEligibilityResponseDto,
} from '@/types';
import { AxiosResponse } from 'axios';

export class UniversityService extends BaseApiService {
  async getUserManual(): Promise<AxiosResponse<Blob>> {
    return this.instance.get(apiConfig.endpoints.university.getUserManual, {
      responseType: 'blob',
    });
  }

  async getUniversities(): Promise<UniversityResponseDto[]> {
    const response = await this.instance.get(
      apiConfig.endpoints.university.getUniversities
    );
    return response.data.universities;
  }

  async getFaculties(universityName: string): Promise<GetFacultyDto[]> {
    const response = await this.instance.get(
      apiConfig.endpoints.university.getFaculties,
      {
        params: { input: universityName },
      }
    );
    return response.data.faculties;
  }

  async getCourses(
    universityName: string,
    facName: string
  ): Promise<CoursesDto[]> {
    const response = await this.instance.get(
      apiConfig.endpoints.university.getCourses,
      {
        params: { universityName, facName },
      }
    );
    return response.data.courses;
  }

  async getCourse(
    universityName: string,
    facName: string,
    courseName: string
  ): Promise<UniversityCourseModel> {
    const response = await this.instance.get(
      apiConfig.endpoints.university.getCourse,
      {
        params: { universityName, facName, courseName },
      }
    );
    return response.data.course;
  }

  async universityEligibility(
    subjects: SubjectDto[]
  ): Promise<UniversityEligibilityResponseDto[]> {
    const response = await this.instance.post(
      apiConfig.endpoints.university.universityEntry,
      subjects
    );
    return response.data.qualifyingPrograms;
  }

  async exportToPdf(
    programs: UniversityEligibilityResponseDto[]
  ): Promise<AxiosResponse<Blob>> {
    return this.instance.post(
      apiConfig.endpoints.university.exportToPdf,
      programs,
      {
        responseType: 'blob',
      }
    );
  }
}

export const universityService = new UniversityService();
