const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const VerifyUserLogin = async (req, res) => {
  // get user from the jwt token and add id to req object
  try {
    let userData = await cookies().get("clientToken");
    if (!userData) {
      return NextResponse.json(
        {
          error: "please login with client credentials",
        },
        {
          status: 401,
        }
      );
    } else {
      const data = jwt.verify(userData.value, JWT_SECRET);
      return data;
    }
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .send({
        message: "please login with client credentials",
        unauthorized: "true",
      });
  }
};

module.exports = VerifyUserLogin;
