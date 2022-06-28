import { InjectionToken } from '@angular/core';


export interface EnvironmentConfig {
  environment: {
    baseUrl: string;
    ImageDomainURL: string;
    DomainUrl: string;
    CompanyUrl: string;
    CompanyName: string;
    sendOTPURL: string;
    mapurlAddress:string;
  };
}

export const ENV_CONFIG = new InjectionToken<EnvironmentConfig>('EnvironmentConfig');
