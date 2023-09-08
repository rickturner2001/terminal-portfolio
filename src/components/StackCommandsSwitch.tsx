"use client";
import { useContext } from "react";
import { CommandsContext } from "./CommandsContext";

export default function StackCommandsSwitch() {
  const { isStacking, setIsStacking } = useContext(CommandsContext);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        checked={isStacking}
        onChange={(e) => {
          setIsStacking(e.target.checked);
        }}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
      <span className="hidden md:block ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Stack Commands
      </span>
    </label>
  );
}
