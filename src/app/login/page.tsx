"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LoginPage () {
    const [user, setUser ] = React.useState({
        email:"",
        password:"",
    })

    const onLogin = async () => {};
    return (
     <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
        <h1>Login</h1>
        <hr />

<label htmlFor="email" >Email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg
        mb-2 focus:outline-none focus:border-gray-600"
         id="username"
         type="text"
         value={user.email}
         onChange={(e) => setUser({...user, email: e.target.value})}
         placeholder="email"
        />

<label htmlFor="password" >password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg
        mb-2 focus:outline-none focus:border-gray-600"
         id="password"
         type="password"
         value={user.password}
         onChange={(e) => setUser({...user, password: e.target.value})}
         placeholder="password"
        />
        <button className="p-2 border border-gray-400 rounded-lg
        mb-2 focus:outline-none focus:border-gray-700 bg-blue-400"
        onClick={onLogin}>
         Login Here
        </button>
        <Link className="mt-1 flex" href={"/signup"}>Visit Signup page</Link>
     </div>
    );
}