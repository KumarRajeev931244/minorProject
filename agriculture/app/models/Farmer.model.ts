import mongoose, {Schema, Document} from "mongoose";

export interface Farmer extends Document{
    fname:string,
    email:string,
    cnumber:string,
    password:string,
    verifyCode:string,
    verifyCodeExpiry:Date,
    isLoggedIn:boolean,
    location: string,
    language: string

}

const FarmerSchema: Schema<Farmer> = new Schema({
    fname:{
        type:String,
        required:[true, "name is required"],
        unique:true,
        trim: true
    },
    email:{
        type:String,
        required:[true, "email is required"],
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , 'please use a valid email address']
    },
    cnumber:{
        type:String,
        required:[true, "contact number is required"],
        unique: true,
    },
    password:{
        type:String,
        required:[true, "password is required"],
        unique: true,
    },
    location:{
        type: String,
        required: [true, "location is required"]
    },
    language:{
        type: String,
        required: true,
        enum: ['english', 'hindi', 'punjabi', 'haryanvi', 'bhojpuri']
    },
    verifyCode:{
        type:String,
        required:[true, "verify code is required"] 
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true, "verify code  expiry is required"],
    },
    isLoggedIn:{
        type: Boolean,
        default: false
    }
})

const Farmer = (mongoose.models.Farmer as mongoose.Model<Farmer>) || mongoose.model<Farmer>("Farmer",FarmerSchema)

export default Farmer