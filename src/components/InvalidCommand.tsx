export default function InvalidCommand({ command }: { command: string }) {
  return (
    <div>
      <span className="text-red-500 font-bold">
        {command} is not a valid command (type help for a list of all commands)
      </span>
    </div>
  );
}
