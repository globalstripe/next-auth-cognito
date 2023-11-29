import NextAuth from 'next-auth'
import CognitoProvider from "next-auth/providers/cognito";


// UserPool eu-west-1_PFnsI557R
// AppClien 6ie96mvnei8lfuqbmm0df8lq0c
// https://next-auth-signon.auth.eu-west-1.amazoncognito.com
// Client Secret k2imghehpj68kfcr3gsr2e10b2e3a64j52urk1fhh4edsf5m1h6

export default NextAuth({
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_DOMAIN,
    }),
  ],
  debug: process.env.NODE_ENV === 'development' ? true : false
})