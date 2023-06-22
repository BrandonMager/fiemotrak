import Image from 'next/image'
import Navbar from '@/modules/Navbar'
import Hero from '@/modules/home/Hero'
import Functionality from '@/modules/home/Functionality'
import Markets from '@/modules/home/Markets'
import Product from '@/modules/home/Product'

import { getServerSession } from 'next-auth'



export default async function Home() {
  
  return (
    <main>
      <Navbar />
      <Hero />
      <Markets />
      <Product />
      <Functionality />
    </main>
  )
}
