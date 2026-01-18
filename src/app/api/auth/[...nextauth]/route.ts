import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";

// Phase 0: minimal config; add providers in Phase 1 (Google OAuth) or Email provider.
// For now, just block auth routes from crashing.

const authOptions: NextAuthOptions = {
    session: { strategy: "jwt" },
    providers: [],
    pages: { signIn: "/signin" },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };