import StackCommandsSwitch from "./StackCommandsSwitch";

export default function Navbar() {
  return (
    <nav className=" p-4 bg-zinc-900 w-full flex justify-between items-center rounded-t-md">
      <StackCommandsSwitch />
      <span className="text-white font-bold text-sm md:text-base ">
        FedericoTarga@rickturner2001
      </span>
      <button className="bg-white/5 p-1 text-xs hidden md:block rounded-full text-white font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>
  );
}
