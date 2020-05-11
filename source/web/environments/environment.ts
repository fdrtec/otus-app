export const environment = {
  production: true,
  API_URL: 'OTUS_API',
  baseUrl: 'http://localhost:51002/otus-rest/v01',
  authBasePath: '/participant-authentication',
  activityBasePath: '/activities',
  registerPasswordUrl: '/participants/registerPassword',
  loginUrl: '/auth',
  logoutUrl: '/invalidate',
  followUpBasePath: '/followUp',
  getEvents: '/participantEvent/listAll',
  accomplishEvent: '/participantEvent/accomplished',
  requiredMessage: 'Este campo é <strong>obrigatório</strong>',
  resetPassword: '/participants/password-reset'
};
