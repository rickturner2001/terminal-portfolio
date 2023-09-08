import Link from "next/link";

const projects = [
  {
    name: "Tealade",
    description: "Shopify custom storefront built on top of Hydrogen",
    stack: ["Remix.js", "Shopify", "React", "Typescript", "GraphQL"],
    url: "https://tealade.com",
  },
  {
    name: "FlowTalk",
    description: "Open-AI API SaaS project (SaaS expired)",
    stack: ["Next.js", "Stripe", "React", "Typescript", "Prisma"],
    url: "https://flow-talk.vercel.app/",
  },
  {
    name: "PaperSearch",
    description:
      "API that provides access Project Gutenberg's repository for books",
    stack: ["Next.js", "React", "Typescript", "tRPC", "Prisma"],
    url: "https://paper-search.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project) => {
        return (
          <Project
            key={project.name}
            name={project.name}
            stack={project.stack}
            url={project.url}
            description={project?.description}
          />
        );
      })}

      <p className="text-sm text-white">
        More on my{" "}
        <Link
          target="_blank"
          className="underline underline-offset-2 text-white"
          href={"https://github.com/rickturner2001"}
        >
          Github
        </Link>
      </p>
    </div>
  );
}

interface ProjectProps {
  name: string;
  description?: string;
  url: string;
  stack: string[];
}

function Project({ name, description, url, stack }: ProjectProps) {
  return (
    <div className="flex flex-col gap-3 border border-cyan-500 p-4 max-w-xl">
      <div className="flex gap-2">
        {stack.map((tech) => {
          return (
            <span className="text-green-500 text-xs" key={tech}>
              {tech}
            </span>
          );
        })}
      </div>
      <div className="flex gap-4 items-center text-sm text-white">
        <span>{name}: </span>
        <Link
          href={url}
          target="_blank"
          className="underline underline-offset-4"
        >
          {url}
        </Link>
      </div>
      {description && <p className="mt-1 text-xs text-white">{description}</p>}
    </div>
  );
}
