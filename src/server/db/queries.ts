/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { User } from "@prisma/client";
import { db } from "./db";

type CreateUserPayload = Omit<User, 'id' | "subscribed">

function ErrorHandler(error: Error) {
  return new Error(error.message)
}


const QUERIES = {
  async createUser(user: CreateUserPayload) {
    try {
      const newUser = await db.user.create({
        data: {
          username: user.username,
          email: user.email,
          clerk_id: user.clerk_id,
          first_name: user.first_name,
          last_name: user.last_name,
          profile_image: user.profile_image,
        }
      })

      if (!newUser) return;
      return newUser.id;

    } catch (error) {
      if (error instanceof (Error)) {
        ErrorHandler(error)
      }
    }

  },
}

export default QUERIES;