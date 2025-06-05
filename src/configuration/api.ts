// src/configurations/api.ts
export const apiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  endpoints: {
    auth: {
      register: '/authentication/register',
      login: '/authentication/login',
      confirmEmail: '/authentication/confirmEmail',
      resendEmailConfirmation: '/authentication/resendEmailConfirmation',
      emailVerified: '/authentication/emailVerified',
      forgetPassword: '/authentication/forgetPassword',
      resendForgetPasswordConfirmation:
        '/authentication/resendForgetPasswordConfirmation',
      resetPasswordPermission: '/authentication/resetPasswordPermission',
      forgetPasswordConfirmed: '/authentication/forgetPasswordConfirmed',
      resetPassword: '/authentication/resetPassword',
    },
    university: {
      getUserManual: '/university/getUserManual',
      getUniversities: '/university/getUniversities',
      getFaculties: '/university/getFaculties',
      getCourses: '/university/getCourses',
      getCourse: '/university/getCourse',
      universityEntry: '/university/universityEntry',
      exportToPdf: '/university/exportToPdf',
    },
    career: {
      getCategories: '/career/getCategories',
      getCategory: '/career/getCategory',
      getJob: '/career/getJob',
      getCareerStats: '/career/getCareerStatsAndCategories',
    },
    testimonial: {
      getTestimonials: '/testimonial/getTestimonials',
    },
  },
};
