import { User } from "~/server/models/User.model";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const user = await User.create({
      username: body.username,
      email: body.email,
      password: body.password,
    });

    return {
      status: "success",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
});
