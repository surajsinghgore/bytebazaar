import { NextResponse } from "next/server";
import DbConnection from "../middleware/DatabaseConnection";
import productdata from "../model/productDataSchema";

export async function GET() {
  try {
    await DbConnection();
    const data = await productdata.find();

    return NextResponse.json(
      {
        data: data,
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
