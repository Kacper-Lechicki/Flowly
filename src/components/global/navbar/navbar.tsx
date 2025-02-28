import React, { ReactElement } from 'react';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

const Navbar: () => Promise<ReactElement> = async (): Promise<ReactElement> => {
  return (
    <header className="fixed right-0 left-0 top-0 bg-black/40 backdrop-blur-lg z-[100] border-b-[1px] border-neutral-900">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <aside className="flex items-center gap-[2px]">
          <h1 className="text-2xl font-medium tracking-wide sm:text-3xl">
            Flowly
          </h1>
        </aside>

        <nav className="lg:block hidden">
          <ul className="flex items-center gap-8 list-none">
            <li className="h-10">
              <Link className="flex items-center h-full" href="#">
                Products
              </Link>
            </li>
            <li className="h-10">
              <Link className="flex items-center h-full" href="#">
                Pricing
              </Link>
            </li>
            <li className="h-10">
              <Link className="flex items-center h-full" href="#">
                Clients
              </Link>
            </li>
            <li className="h-10">
              <Link className="flex items-center h-full" href="#">
                Resources
              </Link>
            </li>
            <li className="h-10">
              <Link className="flex items-center h-full" href="#">
                Documentation
              </Link>
            </li>
            <li className="h-10">
              <Link className="flex items-center h-full" href="#">
                Enterprise
              </Link>
            </li>
          </ul>
        </nav>

        <aside className="flex items-center gap-8">
          <Link
            href="/dashboard"
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 font-medium text-white backdrop-blur-3xl">
              {/*TODO: wire up user*/}
              {true ? 'Dashboard' : 'Get Started'}
            </span>
          </Link>

          <MenuIcon className="lg:hidden cursor-pointer"></MenuIcon>
        </aside>
      </div>
    </header>
  );
};

export default Navbar;
