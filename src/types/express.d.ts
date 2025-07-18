// src/types/express.d.ts

import { User } from '../db/usersTable'; // Import your User type

// This extends the global Express namespace
declare global {
  namespace Express {
    export interface Request {
      user?: User; // Add the optional 'user' property
    }
  }
}