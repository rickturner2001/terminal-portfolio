"use client";
import { useContext, useRef } from "react";
import CommandContextWrapper, { CommandsContext } from "./CommandsContext";
import Navbar from "./Navbar";

export default function Terminal({ children }: { children: React.ReactNode }) {
  const { inputRef } = useContext(CommandsContext);

  return (
    <div
      className="h-full w-full flex flex-col"
      onClick={() => {
        if (inputRef?.current) {
          inputRef.current.select();
        }
      }}
    >
      <Navbar />
      {children}
    </div>
  );
}
