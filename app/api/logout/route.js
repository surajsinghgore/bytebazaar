import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
     

    cookies().set("clientToken", "", {
      httpOnly: true,
      path: "/",
      maxAge:-1,
      expires: new Date(Date.now()+100),
  
    });

    return NextResponse.json(
      {
        message: "User Logout successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("error",error);
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
