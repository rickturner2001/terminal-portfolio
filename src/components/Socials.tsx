import Link from "next/link";

export default function Socials() {
  return (
    <section className="flex flex-col gap-4">
      <div className="gap-2 flex text-white text-sm">
        <span>Github:</span>
        <Link
          href={"https://github.com/rickturner2001"}
          target="_blank"
          className="underline underline-offset-2"
        >
          https://github.com/rickturner2001
        </Link>
      </div>
      <div className="gap-2 flex text-white text-sm">
        <span>LinkedIn (recruiters only):</span>
        <Link
          href={"https://www.linkedin.com/in/rickturner2001-dev/"}
          target="_blank"
          className="underline underline-offset-2"
        >
          https://www.linkedin.com/in/rickturner2001-dev/
        </Link>
      </div>
      <div className="gap-2 flex text-white text-sm">
        <span>Email: </span>
        <a
          href="mailto:taargafederico01@gmail.com"
          className="underline underline-offset-2"
        >
          taargafederico01@gmail.com
        </a>
      </div>
    </section>
  );
}
