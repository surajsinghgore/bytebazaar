import { NextRequest, NextResponse } from "next/server";
// import DbConnection from "../controller/DatabaseConnection";
// import clientPersonalData from "../models/clientPersonalSchema";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req) {
  try {
    // const res=await NextRequest.
    //   await DbConnection();
    let { fname, lname, email, password } = await req.json();

    // validation to form data
    if (!fname) {
      return NextResponse.json(
        {
          message: "First name is required",
        },
        {
          status: 400,
        }
      );
    }
    if (fname.length < 3) {
      return NextResponse.json(
        {
          message: "First name must be at least 3 characters long",
        },
        {
          status: 400,
        }
      );
    }
    if (!lname) {
      return NextResponse.json(
        {
          message: "Last name is required",
        },
        {
          status: 400,
        }
      );
    }
    if (!email) {
      return NextResponse.json(
        {
          message: "Email is required",
        },
        {
          status: 400,
        }
      );
    }
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          message: "Email is not valid",
        },
        {
          status: 400,
        }
      );
    }
    if (!password) {
      return NextResponse.json(
        {
          message: "Password is required",
        },
        {
          status: 400,
        }
      );
    }
    if (password.length !== 5 || !/^\d{5}$/.test(password)) {
      return NextResponse.json(
        {
          message: "Password must be exactly 5 digits long and numeric",
        },
        {
          status: 400,
        }
      );
    }

    // // check weather user exits for not
    // let data=await clientPersonalData.findOne({email:email});

    // // create new entry only if user not exits in database
    // if(!data){

    // let dataSend = new clientPersonalData({
    //     name,
    //     email,
    //     image,
    //   });

    // await dataSend.save();

    return NextResponse.json(
      {
        message: "user register successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error" + error,
      },
      {
        status: 500,
      }
    );
  }
}
