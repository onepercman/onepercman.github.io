import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa"
import { LuMail, LuSmartphone } from "react-icons/lu"
import { contact } from "./features/home/data"
import { Experience } from "./features/home/experience"
import { Hero } from "./features/home/hero"
import { RepoList } from "./features/home/repo-list"
import { Resume } from "./features/home/resume"
import "./styles/styles.scss"

export default function App() {
  return (
    <div>
      <Hero />
      <Resume />
      <Experience />
      <RepoList />

      <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-4 rounded-l border-y border-l border-line/20 p-4 backdrop-blur">
        <a
          target="_blank"
          href={`tel:${contact.phone}`}
          className="inline-flex items-center gap-2 whitespace-nowrap transition-all duration-300 hover:scale-150 hover:text-primary"
        >
          <LuSmartphone />
        </a>
        <a
          target="_blank"
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-2 whitespace-nowrap transition-all duration-300 hover:scale-150 hover:text-primary"
        >
          <LuMail />
        </a>
        <a
          target="_blank"
          href={contact.github}
          className="inline-flex items-center gap-2 whitespace-nowrap transition-all duration-300 hover:scale-150 hover:text-primary"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          href={contact.linkedin}
          className="inline-flex items-center gap-2 whitespace-nowrap transition-all duration-300 hover:scale-150 hover:text-primary"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          href={contact.telegram}
          className="inline-flex items-center gap-2 whitespace-nowrap transition-all duration-300 hover:scale-150 hover:text-primary"
        >
          <FaTelegram />
        </a>
      </div>
    </div>
  )
}
