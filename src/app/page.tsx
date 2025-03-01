import { ReactElement } from 'react';
import Navbar from '@/components/global/navbar/navbar';

export default function Home(): ReactElement {
  return (
    <main>
      <Navbar />

      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]"></div>
      </section>
    </main>
  );
}
