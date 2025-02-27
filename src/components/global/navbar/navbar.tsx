import React, { ReactElement } from 'react';

const Navbar: () => Promise<ReactElement> = async (): Promise<ReactElement> => {
  return (
    <header className="fixed right-0 left-0 top-0 flex justify-between items-center px-4 py-4 bg-black/40 backdrop-blur-lg z-[100] border-b-[1px] border-neutral-900"></header>
  );
};

export default Navbar;
