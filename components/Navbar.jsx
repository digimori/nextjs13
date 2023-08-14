"use client";

import Link from "next/link"; // This is like Router/Anchor
import Image from "next/image";  // Automatically optimises the images that we use
import { useState, useEffect } from 'react';

import { signIn, signOut, useSession, getProviders } from 'next-auth/react'; // Like Allauth in Django. Helper utilities to make session handling easier.


const Navbar = () => {
  const isUserLoggedIn = true; 
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response)
    }
    setProviders();
  }, [])

  return (
    <nav className="flex-between pt-3 w-full mb-16">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/logo.svg" 
               alt="Promptodo Logo" 
               width={30}
               height={30}
               className="object-contain" />
               <p className="logo_text">Promptodo</p>
      </Link>

    {/* Desktop Navigation */}
    <div className="sm:flex hidden">
    { isUserLoggedIn ? (
      <div className="flex gap-3 md:gap-5">
        <Link href="/create-prompt" className="black_btn">
        Create Post
        </Link>
        <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
        <Link href="/profile">
          <Image src="/assets/images/logo.svg" 
                 width={37} 
                 height={37} 
                 className="rounded-full" 
                 alt="profile" />
          </Link>
      </div>
    ) : (
      <>
      {providers && Object.values(providers).map((provider) => (
        <button type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="black_btn">
          Sign In
        </button>
      ))}
      </>
    )}
    </div>

    {/* Mobile Navigation */}

    </nav>
  )
}

export default Navbar