import Image from "next/image";
import { Ellipsis } from "lucide-react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import SendIcon from "./ui/send-icon";

const projects = [
  {
    id: 1,
    link: "https://chat-app-ruddy-one-92.vercel.app/",
    title: "chats",
    year: "2025",
    desc: "let's you chat to anyone, anytime, anywhere. ( anonymously )",
    image: "/chats.jpg",
  },
  {
    id: 2,
    link: "https://medium-app-pearl.vercel.app/",
    title: "medium-app",
    year: "2025",
    desc: "built with hono on cloudflare workers. supports user auth, blog creation, and dynamic routing in a fast.",
    image: "/medium_app.jpg",
  },
  {
    id: 3,
    link: "https://starters-snippets.vercel.app/",
    title: "starters",
    year: "2025",
    desc: "quickly generate starter files and boilerplate code for projects in multiple programming languages",
    image: "/starters.jpg",
  },
  {
    id: 4,
    link: "https://cash-app-virid.vercel.app/",
    title: "cash-app",
    year: "2025",
    desc: "a cash app which let's you add money into your wallet then enables you to send to other user's.",
    image: "/cash.jpg",
  },
  {
    id: 5,
    link: "https://github.com/harshdev03/stocky",
    title: "stocky",
    year: "2025",
    desc: "minimal cli tool for fetching Indian stock prices.",
    image: "#",
  },
];

const ProjectsList = () => {
  return (
    <div className="flex flex-col mb-6 justify-center">
      <div className="max-w-2xl px-6 sm:px-4 mx-auto w-full">
        <div className="pt-12">
          <p className="text-lg flex items-center font-semibold">
            project&apos;s
            <Ellipsis className="pt-2 h-6 w-6" />
          </p>
        </div>

        <div className="flex flex-col pt-8 space-y-4">
          {projects.map((project) => (
            <Modal  key={project.id}>
              <ModalTrigger className="block w-full p-0  text-left rounded-md overflow-hidden">
                <div className="rounded-md bg-zinc-100 py-4 dark:bg-zinc-900 cursor-pointer transition-shadow hover:shadow-md">
                  <div className="mx-5 flex items-start justify-between gap-3">
                    <div className="flex flex-col min-w-0">
                      <p className="font-semibold text-md tracking-tight">
                        {project.title}
                      </p>
                      <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] tracking-tighter wrap-break-word">
                        {project.desc}
                      </p>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 shrink-0">
                      {project.year}
                    </p>
                  </div>
                </div>
              </ModalTrigger>

              <ModalBody className="px-3 sm:px-2">
                <ModalContent className="p-0 px-5 sm:px-2 pt-9 sm:pt-0 overflow-y-auto">
                  <div className="relative w-full aspect-video">
                    {project.image && project.image !== "#" ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover rounded-xl object-top"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-semibold tracking-tight">
                          {project.title.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-semibold text-lg tracking-tight">
                        {project.title}
                      </h3>
                      <span className="text-xs shrink-0">{project.year}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed">{project.desc}</p>
                  </div>
                </ModalContent>

                <ModalFooter className="justify-between items-center gap-4 border-t border-zinc-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                  <span className="hidden sm:block text-xs text-neutral-500 dark:text-neutral-400 truncate">
                    {project.link.replace("https://", "")}
                  </span>
                  
                   <a href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-md shadow-zinc-400 transition-all duration-200 hover:-translate-y-0.5 dark:bg-white dark:text-black shrink-0"
                  >
                    Preview
                    <SendIcon className="h-4 w-4" />
                  </a>
                </ModalFooter>
              </ModalBody>
            </Modal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;