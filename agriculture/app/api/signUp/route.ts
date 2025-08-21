import dbConnect from "@/lib/dbconnection";
import FarmerModel from "@/app/models/Farmer.model";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


dbConnect()

export async function POST(request: NextRequest){
    try {
        const requestBody =await request.json()
        const {username, email,cnumber, password} = requestBody

        const farmer = await FarmerModel.findOne({
            $or: [
                { email},
                { cnumber}
  ]
        })
        if(farmer){
           return NextResponse.json(
            {error:"user already exist"},
            {status: 400}
           )
            
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new FarmerModel({
            username,
            email,
            cnumber,
            password: hashedPassword
        })

        await newUser.save()
        // TODO: print saved user

        // send verification email

        // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json(
            {message: "user register successfully"},
            {status: 200}
        )   
    } catch (error:any) {
        return NextResponse.json(
            {error: error.message},
            {status: 500}
        )
        
    }
}