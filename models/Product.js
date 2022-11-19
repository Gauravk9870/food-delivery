import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: 60
        },

        description :{
            type:String,
            required: true,
            maxlength: 200
        },

        image:{
            type:String,
            required: true
        },

        price:{
            type:String,
            required:true
        },

        category:{
            type:String,
            required:true
        },

        veg :{
            type:Boolean,
            required:true
        },

        available:{
            type:Boolean,
            required:true
        },

        offer:{
            type:Boolean,
            required:false,
        }

    },

    {timestamps: true}
)

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);