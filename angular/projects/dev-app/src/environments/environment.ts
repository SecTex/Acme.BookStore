import { Config } from '@abp/ng.core';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44396',
    redirectUri: 'http://localhost:4200',
    clientId: 'BookStore_ConsoleTestApp',
    responseType: 'code',
    scope: 'offline_access BookStore',
  },
  apis: {
    default: {
      url: 'https://localhost:44312',
      rootNamespace: 'Acme.BookStore',
    }
  },
} as Config.Environment;
