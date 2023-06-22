"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default async function Dashboard(){
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();

  
    return <div className="text-white">In here</div>
}