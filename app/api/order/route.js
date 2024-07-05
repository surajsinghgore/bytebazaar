import { NextResponse } from "next/server";
import DbConnection from "../middleware/DatabaseConnection";
import OrderSchema from "../model/OrderSchema";
import VerifyUserLogin from "../middleware/VeirfyUserLogin";

// Store the last timestamp and counter
let lastTimestamp = 0;
let counter = 0;

// Function to generate a 10-digit unique number
const generateUniqueToken = () => {
  const timestamp = Date.now();

  // If the timestamp is the same as the last, increment the counter
  if (timestamp === lastTimestamp) {
    counter++;
  } else {
    // Reset the counter if the timestamp has changed
    counter = 0;
    lastTimestamp = timestamp;
  }

  // Ensure the counter fits within 3 digits
  const counterString = counter.toString().padStart(3, "0");

  // Combine parts to create the 10-digit number
  const uniqueNumber = (timestamp.toString().slice(-7) + counterString).slice(
    -10
  );

  return uniqueNumber;
};

export async function POST(req) {
  try {
    await DbConnection();
    let userData = await VerifyUserLogin();

    if (!userData) {
      return NextResponse.json(
        {
          error: "please login with client credentials",
        },
        {
          status: 401,
        }
      );
    }
    let userId = userData.user.id;
    let userEmail = userData.user.email;

    let {
      Items,
      email,
      specialInstruction,
      country,
      pincode,
      firstName,
      state,
      lastName,
      address,
      city,
      paymentmode,
      totalamount,
      amountreceived,
    } = await req.json();

    
    let orderSaveData = new OrderSchema({
      productToken: generateUniqueToken,
      paymentmode,
      userId: userId,
      amountreceived,
      totalamount,
      specialInstruction,
      email,
      address,
      city,
      state,
      pincode,
      firstName,
      lastName,
      Items,
      country,
    });
    await orderSaveData.save();

    return NextResponse.json(
      {
        message: "Order place Successfully",
      },
      {
        status: 201,
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
