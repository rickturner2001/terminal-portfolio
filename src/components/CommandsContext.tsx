"use client";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  createContext,
  useRef,
  useState,
} from "react";

interface CommandContextProps {
  isStacking: boolean;
  setIsStacking: Dispatch<SetStateAction<boolean>>;
  inputRef: RefObject<HTMLInputElement>;
}

export const CommandsContext = createContext<CommandContextProps>({
  isStacking: true,
  setIsStacking: () => {},
  inputRef: { current: null },
});

export default function CommandContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isStacking, setIsStacking] = useState(true);
  const userInputRef = useRef<HTMLInputElement>(null);

  return (
    <CommandsContext.Provider
      value={{
        isStacking,
        setIsStacking,
        inputRef: userInputRef,
      }}
    >
      {children}
    </CommandsContext.Provider>
  );
}
