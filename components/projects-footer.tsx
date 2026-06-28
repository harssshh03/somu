import HeartIcon from "@/components/icons/HeartIcon"
import GithubIcon from "@/components/icons/GithubIcon"
import LinkedinIcon from "@/components/icons/LinkedinIcon"
import ResumeIcon from "./icons/ResumeIcon"

const ProjectsFooter = () => {
  return (
    <div className="flex max-w-2xl  mx-auto  px-6 sm:px-3">
      <div className="flex mt-7 mb-12 w-full justify-between lg:mt-10">

        
        <div className="flex  items-center gap-1">
          <HeartIcon className="w-4 h-4 text-zinc-900 dark:text-zinc-300" />
          <p className="text-sm text-zinc-900 dark:text-zinc-300">
            soumyaa.xyz
          </p>
        </div>

        
        <div className="flex items-center  gap-3">
         <a href="https://github.com/soumya-singh18" target="_blank">
            <GithubIcon className="w-4 h-4 text-zinc-900 dark:text-zinc-300 hover:opacity-70 transition-opacity" />
          </a>

          <a href="https://linkedin.com/in/#" target="_blank">
            <LinkedinIcon className="w-4 h-4 text-zinc-900 dark:text-zinc-300 hover:opacity-70 transition-opacity" />
          </a>

          <a href="/ME.pdf" target="_blank">
            <ResumeIcon className="w-4 h-4 text-zinc-900 dark:text-zinc-300 hover:opacity-70 transition-opacity" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default ProjectsFooter
