export default function CommandsList() {
  return (
    <div className="flex flex-col gap-4 my-6 text-white text-sm">
      <div className="w-full max-w-md flex justify-between items-center">
        <span className="primary-command">about</span>
        <span className="text-right">A little bit about me</span>
      </div>
      <div className="w-full max-w-md flex justify-between items-center">
        <span className="primary-command">projects</span>
        <span className="text-right">Take a look at my work</span>
      </div>
      <div className="w-full max-w-md flex justify-between items-center">
        <span className="primary-command">socials</span>
        <span className="text-right">Reach out to me</span>
      </div>
      <div className="w-full max-w-md flex justify-between items-center">
        <span className="primary-command">clear</span>
        <span className="text-right">clear the console</span>
      </div>
    </div>
  );
}
