import { NextResponse } from "next/server";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
import DbConnection from "../middleware/DatabaseConnection";
import userPersonalData from "../model/userDataSchema";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    await DbConnection();

    let { email, password } = await req.json();

    if (!email) {
      return NextResponse.json(
        {
          error: "Email is required",
        },
        {
          status: 400,
        }
      );
    }
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error: "Email is not valid",
        },
        {
          status: 400,
        }
      );
    }
    if (!password) {
      return NextResponse.json(
        {
          error: "Password is required",
        },
        {
          status: 400,
        }
      );
    }

    //  check weather user already exits or not
    let activeUserData = await userPersonalData.findOne({ email: email });
    if (activeUserData == null) {
      return NextResponse.json(
        {
          error: "User not found with the provided credentials",
        },
        {
          status: 404,
        }
      );
    }

    // compare password
    const compPassword = await bcrypt.compare(
      password,
      activeUserData.password
    );
  
    if (!compPassword) {
      return NextResponse.json(
        {
          error: "Password is incorrect",
        },
        {
          status: 401,
        }
      );
    }

    // sending user id if correct details
    const data = {
      user: {
        id: activeUserData.id,
        email: activeUserData.email,
      },
    };
    // jwt token generate
    const clientToken = jwt.sign(data, JWT_SECRET, {
      expiresIn: "24h",
    });
  
   

    cookies().set("clientToken", clientToken,{
        httpOnly: true,
        path: "/",
        expires: new Date(Date.now() + 86400000),
        secure: true,
    });

    return NextResponse.json(
      {
        message: "User Login successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Internal Server Error" + error,
      },
      {
        status: 500,
      }
    );
  }
}
