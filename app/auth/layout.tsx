import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className=" w-full ">
      <div className=" h-screen flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
