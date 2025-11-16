// File: src/app/api/auth/[...nextauth]/route.ts

import NextAuth, { AuthOptions } from "next-auth" // <-- 1. Import AuthOptions
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma" // Use your existing prisma instance

// --- 2. RENAME "const handler = NextAuth({...})" to "export const authOptions: AuthOptions = {...}" ---
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  // We removed the "session: { strategy: 'jwt' }" block
  // This forces it to use the database, which is what the Adapter needs.

  callbacks: {
    // This new callback correctly adds the user's ID to the session
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// --- 3. Create the handler using the options we just defined ---
const handler = NextAuth(authOptions);

// --- 4. Export the handler for Next.js ---
export { handler as GET, handler as POST }