import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-4 overflow-y-auto px-4">
      {children}
    </div>
  );
};
export default Layout;
