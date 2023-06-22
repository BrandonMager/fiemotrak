"use client"
import { useState, useEffect, useCallback} from "react"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";



export default function LoginSection(){

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setIsLoading(true)
        
        signIn('credentials', {...data, redirect: false,

        }).then((callback) => {
            setIsLoading(false)
            if(callback?.ok){
                toast.success("Logged In")
                router.refresh()
            } 

            if(callback?.error){
                toast.error(callback.error)
            }
        })
    }

    return <form color="" onSubmit={handleSubmit}>
        <div className="flex flex-col text-left text-white bg-gradient-to-r from-[#052030] to-[#02142e]  p-12 w-fit h-screen">
            <h1 className="text-4xl font-bold my-12">Sign In</h1>
            <label className="text-sm font-normal my-1">Email Address</label>
            <input type = "email"
            disabled = {isLoading}
            value = {data.email} onChange={e => setData({...data, email: e.target.value})} className="mb-6 text-xs font-normal p-2 pl-2 bg-[#041A2F] border-[1px] border-gray-500 rounded-lg"
             placeholder="yourname@email.com" id = "email" required></input>
            
            <label className="text-sm my-1">Password</label>
            <input value = {data.password} onChange={e => setData({...data, password: e.target.value})}
            disabled = {isLoading}
            className="mb-2 text-xs font-normal p-2 pl-2 bg-[#041A2F] border-[1px] border-gray-500 rounded-lg"
             placeholder="Password" id = "password" required></input>
            <button type = "submit" 
            disabled = {isLoading}
            className={`py-2 rounded-lg text-xs font-bold my-12 ${isLoading ? 'bg-gray-500' : 'bg-gradient-to-r from-[#0bb56e] to-[#0e6b44] '}`}>Sign In</button>

        </div>
    </form>
}