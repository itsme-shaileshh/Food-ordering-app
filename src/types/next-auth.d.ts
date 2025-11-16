// File: src/types/next-auth.d.ts

import 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's database ID. */
      id: string;
    } & DefaultSession['user']; // This merges with default properties (name, email, image)
  }

  /**
   * The shape of the user object returned in the `session` callback
   */
  interface User {
    id: string;
  }
}