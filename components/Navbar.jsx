"use client";

import Link from "next/link"; // This is like Router/Anchor
import Image from "next/image";  // Automatically optimises the images that we use
import { useState, useEffect } from 'react';

import { signIn, signOut, useSession, getProviders } from 'next-auth/react'; // Like Allauth in Django. Helper utilities to make session handling easier.


const Navbar = () => {

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders();
      setProviders(res)
    }
    setUpProviders();
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
    { session?.user ? (
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
                 alt="profile"
                 
                  /> 
          </Link>
      </div>
    ) : (
      <>
      {providers &&
        Object.values(providers).map((provider) => (
          <button
            type='button'
            key={provider.name}
            onClick={() => {
              signIn(provider.id);
            }}
            className='black_btn'
          >
            Sign in
          </button>
        ))}
    </>
    )}
    </div>

    {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image src="/assets/images/logo.svg" 
                 width={37} 
                 height={37} 
                 className="rounded-full" 
                 alt="profile"
                 onClick={() => setToggleDropdown((prev) => !prev)} />
                 {toggleDropdown && (
                  <div className="dropdown">
                    <Link href="/profile"
                          className="dropdown_link"
                          onClick={() => setToggleDropdown(false)}>
                            My Profile
                          </Link>
                          <Link href="/create-prompt"
                          className="dropdown_link"
                          onClick={() => setToggleDropdown(false)}>
                            Create Prompt
                          </Link>
                          <button type="button"
                                  onClick={() => {setToggleDropdown(false); signOut();}}
                                  className="mt-5 w-full black_btn">Sign Out</button>
                  </div>
                 )}
          </div>
        ) : (
          <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
                className='black_btn'
              >
                Sign in
              </button>
            ))}
        </>
        )}
      </div>
    </nav>
  )
}

export default Navbar