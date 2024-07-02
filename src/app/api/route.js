import { NextResponse } from "next/server";
import Item from "@/model/item";
import dbConnection from "@/lib/dbConnection";

const GET = async (req)=>{
    await dbConnection();
    try {
        const getItems = await Item.find();
        return NextResponse.json(getItems, {status: 200});
    } catch (error) {
        return NextResponse.json(error, {status: 400});
    }
};

const POST = async (req)=>{
    await dbConnection();
    try {
        const body = await req.json();
        const newItems = await Item.create(body);
        return NextResponse.json(newItems, {status: 201});
    } catch (error) {
        return NextResponse.json(error, {status: 400});
    }
}

export { GET, POST };