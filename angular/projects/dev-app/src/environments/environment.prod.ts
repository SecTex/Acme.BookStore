import { Config } from '@abp/ng.core';

export const environment = {
  production: true,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44396',
    clientId: 'BookStore_ConsoleTestApp',
    dummyClientSecret: '1q2w3e*',
    scope: 'BookStore',
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44396',
      rootNamespace: 'Acme.BookStore',
    },
    BookStore: {
      url: 'https://localhost:44312',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Config.Environment;
