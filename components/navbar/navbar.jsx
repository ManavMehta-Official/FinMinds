import React from 'react';
import Link from 'next/link';
import {
    NavigationMenu,
    NavigationMenuLink,
  } from "@/components/ui/navigation-menu"
import logo from "../../styles/svgs/logo.svg"
import Image from 'next/image';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
  

const Navbar = () => {

  return (
    <>
    <div className='md:block hidden'>
      <nav className='flex flex-row w-100 m-2 align-middle items-center'>
      <div className='w-1/3'>
        <a href="/">
            {/* <h1 className='text-3xl green'><span className='font-[900]'>fin</span>Minds</h1> */}
            <Image src={logo} alt="logo" width={200} height={200} />
        </a>
      </div>
      <div className='w-1/3 flex justify-center gap-10'>
      <NavigationMenu className="gap-10">
            <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className='link-hover py-2 px-3 rounded-md transition-all'>
                    Home
                </NavigationMenuLink>
            </Link>
            <Link href="/learn" legacyBehavior passHref>
                <NavigationMenuLink className='link-hover py-2 px-3 rounded-md transition-all'>
                    Learn
                </NavigationMenuLink>
            </Link>
            <Link href="/simulator" legacyBehavior passHref>
                <NavigationMenuLink className='link-hover py-2 px-3 rounded-md transition-all'>
                    Market
                </NavigationMenuLink>
            </Link>
        </NavigationMenu>
      </div>
      <div className='w-1/3 text-right flex justify-end'>
        <a href='https://github.com/ManavMehta-Official/finminds/tree/main' className='bg-black px-4 py-1 text-white rounded-full flex flex-row justify-center items-center gap-2 text-sm'>
          <GitHubLogoIcon /> Github Repo
        </a>
      </div>
      </nav>
    </div>
    <div className='block md:hidden sticky top-0 z-50 bg-white'>
        <nav className='flex flex-row w-full justify-center py-2 border-b border-black sticky top-1'>
          <NavigationMenu className="gap-10">
              <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className='link-hover py-2 px-3 rounded-md transition-all'>
                      Home
                  </NavigationMenuLink>
              </Link>
              <Link href="/learn" legacyBehavior passHref>
                  <NavigationMenuLink className='link-hover py-2 px-3 rounded-md transition-all'>
                      Learn
                  </NavigationMenuLink>
              </Link>
              <Link href="/simulator" legacyBehavior passHref>
                  <NavigationMenuLink className='link-hover py-2 px-3 rounded-md transition-all'>
                      Market
                  </NavigationMenuLink>
              </Link>
          </NavigationMenu>
        </nav>
    </div>
    </>
  )
}

export default Navbar;
