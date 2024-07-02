import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const itemSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    img: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        trim: true,
        min: [1, "Wrong Minimum Quantity"]
    }
});

const Item = models.Item || model("Item", itemSchema);

export default Item;