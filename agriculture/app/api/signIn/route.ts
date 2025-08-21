import dbConnect from "@/lib/dbconnection";
import Farmer from "@/app/models/Farmer.model";
import bcryptjs from "bcryptjs";
import { NextRequest,NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import toast from "react-hot-toast";

dbConnect()
export async function POST(request: NextRequest){
    try {
        const requestBody = await request.json()
        const {email, cnumber, password} = requestBody
        const user = await Farmer.findOne({email, cnumber})
        if(!user){
            return NextResponse.json(
                {message: "user does not exist"},
                {status:400}
            )
        }
        toast.error("user already exist")
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json(
                {message: "incorrect password"},
                {status: 400}
            )
        }

        // creating token {payload matlab data }

        const tokenData = {
            id: user._id,
            username: user.fname,
            email: user.email
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: '1d'})

        const response = NextResponse.json(
            {
                message: "logged in success"
            },
            {
                status:200
            }
        )
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: true
        })
        return response
        
    } catch (error: any) {
        return NextResponse.json(
            {error: error.message},
            {status:500}
        )
        
    }
}