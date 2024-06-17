import {  NextResponse } from "next/server";
const bcrypt = require('bcryptjs');
import DbConnection from "../middleware/DatabaseConnection";
import userPersonalData from "../model/userDataSchema";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;

export async function POST(req) {
  await DbConnection();
  try {
    // const res=await NextRequest.
    //   await DbConnection();
    let { fname, lname, email, password } = await req.json();

    // validation to form data
    if (!fname) {
      return NextResponse.json(
        {
          error: "First name is required",
        },
        {
          status: 400,
        }
      );
    }
    if (fname.length < 3) {
      return NextResponse.json(
        {
          error: "First name must be at least 3 characters long",
        },
        {
          status: 400,
        }
      );
    }
    if (!lname) {
      return NextResponse.json(
        {
          error: "Last name is required",
        },
        {
          status: 400,
        }
      );
    }
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
    if (!passwordRegex.test(password)) {
      return NextResponse.json(
        {
          error:
            "Password must be at least 5 characters long and include at least one symbol, one uppercase letter, one lowercase letter, and one number.",
        },
        {
          status: 400,
        }
      );
    }

    //  check weather user already exits or not
    let userLen = await userPersonalData.findOne({ email: email });
    if (userLen) {
      return NextResponse.json(
        {
          error: "An account with this email address already exists",
        },
        {
          status: 400,
        }
      );
    }
// generating  hash of password
const salt=await bcrypt.genSaltSync(10);
const securePassword=await bcrypt.hash(password,salt);
    // create user account in database
    const newUser = new userPersonalData({
      fname,
      lname,
      email,
      password:securePassword,
    });
    await newUser.save();

    return NextResponse.json(
      {
        message: "User registered successfully!",
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
