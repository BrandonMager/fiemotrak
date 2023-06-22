'use client'

import LoginSection from "@/modules/login/LoginSection"

export default function Login() {
    
    return (
      <div className="h-screen">
        <div className="w-1/3">
          <LoginSection />
        </div>
        <div className="w-2/3"></div>
      </div>
    )
  }