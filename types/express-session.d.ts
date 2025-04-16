// types/express-session.d.ts
import 'express-session';

declare module 'express-session' {
  interface SessionData {
    visited?: boolean;
    // add any other custom properties here
    userId?: number;
    isAdmin?: boolean;
  }
}
