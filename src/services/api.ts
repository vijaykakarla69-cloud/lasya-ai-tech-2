import { replaceCompanyNames } from "../supporting-data/constants";
// const PORT = process.env.PORT || 3700;
// const ENV = process.env.ENV || 'development';
// const DEFAULT_COMPANY = process.env.DEFAULT_COMPANY || 'LasyaAitech'; // or 'LasyaAitech' or 'Krivatech'


const STRAPI_BASE_URL = 'https://cms.kriva.tech/api';
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.kriva.studio';

// export const API_BASE_URL = ENV === 'development' ? 'http://localhost:7171' : 'https://api.kriva.tech';
const ABOUT_PAGE_BEARER_TOKEN = 'e53103adb401a9da1abb7e5d30e210ad528a17b71ff1d1a0b2604fc6fe7c6ce3336e51e18744c6bb43863337fa2b13e06960fb4af4ad2958433dcfba7b5186b0baf7184506295228f07ec777542583d09ad7875b598f8c6bbc5bf0f63aca66c0c0a537e03978fb233219262e032c71d92b493efd958d70bc247f06054ee62f9f';
// This is added from company account project name: LATRecaptch
export const NEXT_PUBLIC_RECAPTCHA_SITE_KEY = '6LdzcmIsAAAAAFRPJHm1JhP-tXLOQlYFzhGiRlox'
// this key is created with email address lasyaaitech007@gmail.com


// const API_BASE_URL = 'https://api.kriva.tech/';

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
  params?: Record<string, string | string[]>;
}

export class ApiService {
  static async strapiRequest<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const {
      method = 'GET',
      body,
      headers = {},
      params = {}
    } = options;

    // Construct URL with query parameters
    const queryString = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => queryString.append(key, v));
      } else {
        queryString.append(key, value);
      }
    });

    // Construct URL properly - ensure no double slashes except in protocol
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    const baseUrl = STRAPI_BASE_URL.endsWith('/') ? STRAPI_BASE_URL.slice(0, -1) : STRAPI_BASE_URL;
    const url = `${baseUrl}/${cleanEndpoint}${queryString.toString() ? `?${queryString.toString()}` : ''}`;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // Apply company name replacements before returning the data
      return replaceCompanyNames(data) as T;
    } catch (error) {
      console.error(`API request failed: ${error}`);
      throw error;
    }
  }

  static async apiRequest<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const {
      method = 'GET',
      body,
      headers = {},
      params = {}
    } = options;

    // Construct URL with query parameters
    const queryString = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => queryString.append(key, v));
      } else {
        queryString.append(key, value);
      }
    });

    // Construct URL properly - ensure no double slashes except in protocol
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    const baseUrl = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
    const url = `${baseUrl}/${cleanEndpoint}${queryString.toString() ? `?${queryString.toString()}` : ''}`;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${error}`);
      throw error;
    }
  }

  // Method for handling FormData (file uploads)
  static async apiRequestWithFormData<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const {
      method = 'POST',
      body,
      headers = {},
      params = {}
    } = options;

    // Construct URL with query parameters
    const queryString = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => queryString.append(key, v));
      } else {
        queryString.append(key, value);
      }
    });

    // Construct URL properly - ensure no double slashes except in protocol
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    const baseUrl = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
    const url = `${baseUrl}/${cleanEndpoint}${queryString.toString() ? `?${queryString.toString()}` : ''}`;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          // Don't set Content-Type for FormData - let browser set it with boundary
          ...headers,
        },
        body: body, // FormData will be sent as-is
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error(`API request failed: ${error}`);
      throw error;
    }
  }

  static async strapiRequestGetDataFromCMS(endpoint: string, options: RequestOptions = {}) { 
    const { params = {} } = options;  
    
    // Construct the CMS endpoint with query parameters 
    const queryString = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => queryString.append(key, v));
      } else {
        queryString.append(key, value);
      }
    });

    const cmsEndpoint = `/api/${endpoint}?${queryString.toString()}`;

    const data = await this.apiRequest('api/lapl/cms/getdata', {
      body: {
        endpoint: cmsEndpoint
      },
      method: 'POST'
    });
    
    // Apply company name replacements before returning the data
    return replaceCompanyNames(data);
  }
}