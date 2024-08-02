import { NextResponse } from "next/server";
import DbConnection from "../middleware/DatabaseConnection";
import productdata from "../model/productDataSchema";

export async function GET(req, res) {
  try {
    await DbConnection();

    if (req.nextUrl.searchParams.get("category")) {
      let categoryName = req.nextUrl.searchParams.get("category");

      const data = await productdata.findOne({ name: categoryName });

      return NextResponse.json(
        {
          data: data,
        },
        {
          status: 200,
        }
      );
    } else {
      const data = await productdata.find();

      return NextResponse.json(
        {
          data: data,
        },
        {
          status: 200,
        }
      );
    }
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
