'use client'
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useForm } from "react-hook-form";
// import { signInSchema } from "../schemas/signInSchema";
// import { zodResolver } from "@hookform/resolvers/zod";

// export default function SignupPage() {
//     const form = useForm()
//     const [user, setUser] = useState({
//         email: "",
//         cnumber: "",
//         password: "",
//         username: ""
//     })
//     const [buttonDisabled, setButtonDisable] = useState(false)
//     const [loading, setLoading] = useState(false)
//     const router = useRouter()

//     const onSignup = async() => {
//         try {
//             setLoading(true)
//             const response = await axios.post("/api/signUp", user)
//             toast.success("successfully signup")
//             router.push('/login')
            
//         } catch (error:any) {
//             toast.error("signup failed",{
//                 position: 'top-center'})
//         }
//     }

//     useEffect(() => {
//         if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
//             setButtonDisable(false)  //show signup button
//         }else{
//             setButtonDisable(true)  //do not show signup button
//         }
//     }, [user])

//     // return (
//     //     <div className="flex justify-center items-center min-h-screen bg-gray-400">
//     //         <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
//     //         <h1> {loading? "proccessing": "signup"}  </h1>
//     //         <hr />
//     //         <label htmlFor="username">username</label>
//     //         <input 
//     //         type="text"
//     //         value={user.username}
//     //         onChange={(e) => setUser({...user, username: e.target.value})}
//     //         placeholder="username"
//     //         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black bg-gray-200"
//     //         />
//     //         <label htmlFor="email">email</label>
//     //         <input type="text"
//     //         value={user.email}
//     //         onChange={(e) => setUser({...user, email: e.target.value})}
//     //         placeholder="email"
//     //         className="rounded-lg p-2 mb-4 border border-gray-300 focus:border-gray-600 text-black focus:outline-none bg-gray-200"
//     //         />
//     //         <label htmlFor="password">password</label>
//     //         <input type="text"
//     //         value={user.password}
//     //         onChange={(e) => setUser({...user, password: e.target.value})}
//     //         placeholder="password"
//     //         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black bg-gray-200"
//     //         />
//     //         <button
//     //          onClick={onSignup}
//     //          className="bg-cyan-500 p-2.5 m-1 rounded-xl cursor-pointer hover:bg-cyan-600 text-sm">
//     //          {buttonDisabled? "no signup" : "signup"}
//     //         </button>
//     //         <Link href='/login' className="text-blue-400 hover:text-blue-600 mt-4">visit login page</Link>
//     //         </div>
//     //     </div>
//     // )

//     return(
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
//                 <div className="text-center">
//                     <h1 className="text-4xl font-extrabold tacking-light lg:text-5xl mb-6">Join Mystry Message
//                     </h1>
//                     <p className="mb-4"> sign in to start your anonymous adventure</p>                 
//                 </div>
//                 <Form {...form}>
//                     <form className="space-y-6">
                       
//                         <FormField 
//                         name="identifier"
//                         control={form.control}
//                         render={({field}) => (
//                             <FormItem>
//                                 <FormLabel>Email/Username</FormLabel>
//                                 <FormControl>
//                                     <Input 
//                                         placeholder="email/username" {...field}
//                                     />
//                                 </FormControl>
//                             </FormItem>
//                         )}
//                         > 
//                         </FormField>
//                         <FormField 
//                         name="password"
//                         control={form.control}
//                         render={({field}) => (
//                             <FormItem>
//                                 <FormLabel>Password</FormLabel>
//                                 <FormControl>
//                                     <Input 
//                                         placeholder="password" {...field}
//                                     />  
//                                 </FormControl>
//                             </FormItem>
//                         )}
//                         >  
//                         </FormField>
//                         <Button className='cursor-pointer' type="submit">
//                             sign in
//                         </Button>
//                     </form>
//                 </Form>
//                 <div className="text-center mt-4">
//                         <p>
//                             Not a member?{""}
//                             <Link href='/sign-up' className="text-blue-600 hover:text-blue-800">Sign-up</Link>
//                         </p>
//                  </div>
//             </div>
//         </div>
//     )
// }

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Attempt:", { email, password });
    // 🔑 Here you can call your backend API for authentication
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
          🌱 CropAI Login
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email / Phone
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter email or phone"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter password"
              required
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        {/* Extra Links */}
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <a href="#" className="hover:text-green-600">Forgot Password?</a>
          <a href="/register" className="hover:text-green-600">Create Account</a>
        </div>
      </div>
    </div>
  );
}

