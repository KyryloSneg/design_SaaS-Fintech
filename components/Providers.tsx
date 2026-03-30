"use client";

import { LazyMotion, domAnimation } from "motion/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion features={domAnimation} strict={true}>
      {children}
    </LazyMotion>
  );
};

export default Providers;
