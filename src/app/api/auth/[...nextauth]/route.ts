import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text'},
        password: { label: 'password', type: 'password'},
      },
      async authorize(credentials){
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        const user = await prisma.usuario.findUnique({
          where: { email: credentials?.email},
        });
        if(!user){
          return null
        }
        const validPassword = bcrypt.compare(credentials!.password, user.senha);
        if (!validPassword) {
          return null
        }
        return user;
      }
    })
  ],
  pages:{
    signIn: '/login'
  },
 callbacks: {
		async jwt({ token, user }) {
			user && (token.user = user)
			return token
		},
		async session({ session, token }){
			session = token.user as any
			return session
		}
	}
}
const handler = NextAuth(nextAuthOptions)
export{ handler as GET, handler as POST, nextAuthOptions }