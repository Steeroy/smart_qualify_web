// src/services/testimonial/testimonial_service.ts
import { BaseApiService } from '@/services/base_api';
import { apiConfig } from '@/configuration/api';
import { TestimonialResponseDto } from '@/types';

export class TestimonialService extends BaseApiService {
  async getTestimonials(): Promise<TestimonialResponseDto[]> {
    const response = await this.instance.get(
      apiConfig.endpoints.testimonial.getTestimonials
    );
    return response.data.testimonials;
  }
}

export const testimonialService = new TestimonialService();
