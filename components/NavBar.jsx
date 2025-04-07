import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-400 px-8 py-3 rounded-lg">
        <Link href={"/"} className="text-2xl font-bold text-white">Navigation App</Link>
        <Link href={"/addMessage"} className="text-xl font-bold text-white bg-slate-500 px-4 py-2 rounded-lg">App Messages</Link>
    </nav>
  )
}

export default NavBar