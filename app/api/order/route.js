import { NextResponse } from "next/server";
import DbConnection from "../middleware/DatabaseConnection";
import OrderSchema from "../model/OrderSchema";
import VerifyUserLogin from "../middleware/VeirfyUserLogin";


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
    // let userEmail = userData.user.email;
    const errors = [];
    let {
      Items,
      email,
      specialInstruction,
      country,
      pincode,
      firstName,
      state,
      mobile,
      lastName,
      address,
      city,
      paymentmode,
      totalamount,
      amountreceived
     
    } = await req.json();

    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      errors.push({ field: "email", message: "Invalid email address" });

    if (!country || country.trim() === "")
      errors.push({ field: "country", message: "Country must not be empty" });
    if (!pincode || pincode.trim() === "")
      errors.push({ field: "pincode", message: "Pincode must not be empty" });
    if (!firstName || firstName.trim() === "")
      errors.push({
        field: "firstName",
        message: "First Name must not be empty",
      });
    if (!state || state.trim() === "")
      errors.push({ field: "state", message: "State must not be empty" });
   
    if (!address || address.trim() === "")
      errors.push({ field: "address", message: "Address must not be empty" });
    if (!city || city.trim() === "")
      errors.push({ field: "city", message: "City must not be empty" });
    if (!paymentmode || paymentmode.trim() === "")
      errors.push({
        field: "paymentmode",
        message: "Payment mode must not be empty",
      });

    if (!mobile || !/^\d{10}$/.test(mobile))
      errors.push({
        field: "mobile",
        message: "Mobile number must contain exactly 10 digits",
      });

   
    if (errors.length > 0) {
      return NextResponse.json(
        {
          errors: errors,
        },
        {
          status: 400,
        }
      );
    }

    let genToken = parseInt(
      Math.floor(1000000000 + Math.random() * 9000000000).toString()
    );

    let orderSaveData = new OrderSchema({
      productToken: genToken,
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
      mobile,
      lastName,
      Items,
      country,
    });
    let orderData = await orderSaveData.save();

    return NextResponse.json(
      {
        data: orderData,
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
