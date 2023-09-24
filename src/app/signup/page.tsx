"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignupPage () {
    const [user, setUser ] = React.useState({
        email:"",
        password:"",
        username:"",
    })

    const onSignup = async () => {};
    return (
     <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
        <h1>Signup</h1>
        <hr />
        <label htmlFor="username" >username</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg
        mb-2 focus:outline-none focus:border-gray-600"
         id="username"
         type="text"
         value={user.username}
         onChange={(e) => setUser({...user, username: e.target.value})}
         placeholder="username"
        />

<label htmlFor="email" >Email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg
        mb-2 focus:outline-none focus:border-gray-600"
         id="email"
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
        onClick={onSignup}>
         Signup Here
        </button>
        <Link className="mt-1 flex" href={"/login"}>Visit login page</Link>
     </div>
    );
}