"use client";
import About from "@/components/About";
import { CommandsContext } from "@/components/CommandsContext";
import CommandsList from "@/components/CommandsList";
import InvalidCommand from "@/components/InvalidCommand";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { Command } from "@/types";
import { isCommand } from "@/utils";
import clsx from "clsx";
import Image from "next/image";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

function parseCommand(
  command: Command | string,
  setTerminalOutput: Dispatch<SetStateAction<React.ReactNode[]>>,
  inputRef: RefObject<HTMLInputElement>,
  commandsContainer: RefObject<HTMLDivElement>,
  isStacking: boolean
) {
  switch (command) {
    case "about":
      if (isStacking) {
        setTerminalOutput((prev) => [...prev, <About key={"about"} />]);
      } else {
        setTerminalOutput([<About key={`about`} />]);
      }
      break;
    case "help":
      if (isStacking) {
        setTerminalOutput((prev) => [
          ...prev,
          <CommandsList key={`help-${prev.length}`} />,
        ]);
      } else {
        setTerminalOutput([<CommandsList key={`help`} />]);
      }

      break;
    case "projects":
      if (isStacking) {
        setTerminalOutput((prev) => [
          ...prev,
          <Projects key={`projects-${prev.length}`} />,
        ]);
      } else {
        setTerminalOutput([<Projects key={`projects`} />]);
      }

      break;
    case "socials":
      if (isStacking) {
        setTerminalOutput((prev) => [
          ...prev,
          <Socials key={`socials-${prev.length}`} />,
        ]);
      } else {
        setTerminalOutput([<Socials key={`socials`} />]);
      }

      break;
    case "clear":
      setTerminalOutput([]);
      break;
    default:
      if (isStacking) {
        setTerminalOutput((prev) => [
          ...prev,
          <InvalidCommand command={command} key={`invalid-${prev.length}`} />,
        ]);
      } else {
        setTerminalOutput([
          <InvalidCommand command={command} key={`projects`} />,
        ]);
      }

      break;
  }
  if (inputRef?.current) {
    inputRef.current.value = "";
    inputRef.current.select();
  }

  if (commandsContainer?.current) {
    commandsContainer.current.scrollIntoView(false);
  }
}
export default function Home() {
  const { inputRef } = useContext(CommandsContext);

  const [terminalOut, setTerminalOut] = useState<React.ReactNode[]>([]);

  const commandsContainer = useRef<HTMLDivElement>(null);

  return (
    <section
      className="w-full h-full bg-[#171421] rounded-b-md p-4"
      onClick={() => {
        if (inputRef?.current) {
          inputRef.current.select();
        }
      }}
    >
      <div ref={commandsContainer} className="mb-4 max-h-[80vh] overflow-auto">
        {terminalOut.length === 0 ? (
          <span className="text-zinc-300  text-sm">
            type <span className=" text-cyan-500 font-bold">help</span> for a
            list of all commands
          </span>
        ) : (
          terminalOut.map((Component, idx) => {
            return Component;
          })
        )}
      </div>
      <InputHeader
        setTerminalOut={setTerminalOut}
        commandsContainer={commandsContainer}
      />
    </section>
  );
}

function InputHeader({
  setTerminalOut,
  commandsContainer,
}: {
  setTerminalOut: Dispatch<SetStateAction<React.ReactNode[]>>;

  commandsContainer: RefObject<HTMLDivElement>;
}) {
  const { isStacking, inputRef } = useContext(CommandsContext);
  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.select();
    }
  }, [inputRef]);

  return (
    <UsernameDisplay>
      <input
        type="text"
        ref={inputRef}
        className="w-max bg-transparent   focus:outline-none focus:ring-0 border-none focus:border-none text-white"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const command = inputRef?.current?.value ?? "";
            if (command) {
              if (isStacking) {
                setTerminalOut((prev) => [
                  ...prev,
                  <UsernameDisplay
                    className="mb-4"
                    key={`user-command-${prev.length}`}
                  >
                    <span className="text-white">{command}</span>
                  </UsernameDisplay>,
                ]);
              }
            }

            parseCommand(
              command,
              setTerminalOut,
              inputRef,
              commandsContainer,
              isStacking
            );
          }
        }}
      />
    </UsernameDisplay>
  );
}

function UsernameDisplay({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx("flex gap-4 items-center mt-2", className)}>
      <span className="text-green-500 stroke-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </span>
      <span className="font-bold text-cyan-500">
        portfolio{" "}
        <span className="hidden md:inline-block font-bold text-blue-600">
          git:(
          <span className="text-red-500 font-bold">
            main<span className="text-blue-500 font-bold">)</span>
          </span>
        </span>
      </span>
      <span className="stroke-2  text-amber-500 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
      {children}
    </div>
  );
}
