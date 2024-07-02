import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbConnection";
import Item from "@/model/item";

const GET = async (req, context)=>{
    await dbConnection();
    try {
        const id = context.params.id;
        const item = await Item.findOne({_id: id});
        return NextResponse.json(item, {status: 200});
    } catch (error) {
        return NextResponse.json(error, {status: 400});
    };
};

const PUT = async (req, context)=>{
    await dbConnection();
    try {
        const id = context.params.id;
        const body = await req.json();
        const replacedItem = await Item.findOneAndReplace({_id: id}, body, {upsert: false, new: true});
        return NextResponse.json(replacedItem, {status: 200});
    } catch (error) {
        return NextResponse.json(error, {status: 400});
    };
};

const PATCH = async (req, context)=>{
    await dbConnection();
    try {
        const id = context.params.id;
        const body = await req.json();
        const updatedItem = await Item.findOneAndUpdate({_id: id}, body, {upsert: false, new: true});
        return NextResponse.json(updatedItem, {status: 200});
    } catch (error) {
        return NextResponse.json(error, {status: 400});
    };
};

const DELETE = async (req, context)=>{
    await dbConnection();
    try {
        const id = context.params.id;
        const deletedItem = await Item.findOneAndDelete({_id: id});
        return NextResponse.json(deletedItem, {status: 200});
    } catch (error) {
        return NextResponse.json(error, {status: 400});
    }
}

export { GET, PUT, PATCH, DELETE };