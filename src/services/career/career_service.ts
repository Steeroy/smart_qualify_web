// src/services/career/career_service.ts
import { BaseApiService } from '@/services/base_api';
import { apiConfig } from '@/configuration/api';
import { CategorySummaryDto, CareerDto, CareerStatsDto } from '@/types';

export class CareerService extends BaseApiService {
  async getCategories(): Promise<CategorySummaryDto[]> {
    const response = await this.instance.get(
      apiConfig.endpoints.career.getCategories
    );
    return response.data.categories;
  }

  async getCategory(category: string): Promise<string[]> {
    const response = await this.instance.get(
      apiConfig.endpoints.career.getCategory,
      {
        params: { category },
      }
    );
    return response.data.jobTitles;
  }

  async getJob(category: string, job: string): Promise<CareerDto> {
    const response = await this.instance.get(
      apiConfig.endpoints.career.getJob,
      {
        params: { category, job },
      }
    );
    return response.data.job;
  }

  async getCareerStatsAndCategories(): Promise<CareerStatsDto> {
    const response = await this.instance.get(
      apiConfig.endpoints.career.getCareerStats
    );
    return response.data.cat;
  }
}

export const careerService = new CareerService();
