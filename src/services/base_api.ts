/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/services/base_api.ts
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { apiConfig } from '@/configuration/api';

export class BaseApiService {
  protected readonly instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: apiConfig.baseUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    // Add interceptors for token handling
    this.instance.interceptors.request.use(async (config) => {
      const token = await this.getAccessToken();
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          // Handle token refresh
          const refreshToken = await this.getRefreshToken();
          if (refreshToken) {
            try {
              const newToken = await this.performTokenRefresh(refreshToken);
              await this.onTokenRefreshSuccess(newToken);
              error.config.headers.Authorization = `Bearer ${newToken}`;
              return this.instance(error.config);
            } catch (refreshError) {
              await this.onTokenRefreshFailed(refreshError, refreshToken);
              throw refreshError;
            }
          }
        }
        throw error;
      }
    );
  }

  protected async getAccessToken(): Promise<string | null> {
    // Implement token retrieval (e.g., from localStorage or context)
    return localStorage.getItem('accessToken');
  }

  protected async getRefreshToken(): Promise<string | null> {
    // Implement refresh token retrieval
    return localStorage.getItem('refreshToken');
  }

  protected async performTokenRefresh(refreshToken: string): Promise<string> {
    // Implement token refresh logic (you may need a refresh endpoint)
    return refreshToken; // Placeholder
  }

  protected async onTokenRefreshSuccess(newAccessToken: string): Promise<void> {
    localStorage.setItem('accessToken', newAccessToken);
  }

  protected async onTokenRefreshFailed(
    error: any,
    refreshToken: string
  ): Promise<void> {
    console.error('Token refresh failed:', error);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
}
