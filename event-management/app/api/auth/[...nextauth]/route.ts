// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';
import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'public', 'events.json');

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize() {
        return null; // We'll implement later
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google" || account?.provider === "facebook") {
        try {
          const fileData = fs.readFileSync(dataFile, 'utf-8');
          const jsonData = JSON.parse(fileData);

          const existingUser = jsonData.users?.find((u: any) => u.email === user.email);
          if (existingUser) return true;

          const newUser = {
            id: Date.now(),
            name: user.name,
            email: user.email,
            image: user.image || "/default-avatar.jpg",
            provider: account.provider,
            role: "volunteer",
            createdAt: new Date().toISOString()
          };

          jsonData.users = jsonData.users || [];
          jsonData.users.push(newUser);
          fs.writeFileSync(dataFile, JSON.stringify(jsonData, null, 2));

          return true;
        } catch (err) {
          console.error("Save user error:", err);
          return true; // Still allow login
        }
      }
      return true;
    },
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    }
  },
  pages: {
    signIn: '/auth',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };