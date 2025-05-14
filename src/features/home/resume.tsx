import { Button } from "@/libs/atoms"
import { FC } from "react"
import {
  LuArrowRight,
  LuDownload,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuQuote,
  LuSmartphone,
} from "react-icons/lu"
import { contact } from "./data"

export const Resume: FC = () => {
  return (
    <section
      id="resume"
      className="space-y-14 bg-component px-6 py-12 sm:px-8"
      aria-label="Resume section"
    >
      <div className="flex flex-col items-start gap-4">
        <div className="font-medium italic">Nice to meet you!</div>
        <div className="text-3xl font-semibold sm:text-5xl">WELCOME TO...</div>
      </div>

      <div className="flex flex-col gap-6 xl:flex-row">
        <div className="flex w-full flex-none flex-col items-center gap-4 xl:max-w-lg">
          <img
            src="/myself-2.png"
            className="h-80 w-80 rounded-full"
            alt="Trung Tran Duy - Frontend Engineer"
            loading="lazy"
          />
          <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-semibold uppercase text-transparent">
            Trung Tran Duy
          </div>
          <div>
            aka <span className="font-semibold text-primary">@onepercman</span>
          </div>
          <div className="text-lg sm:text-xl">
            <span className="font-bold">Frontend Engineer</span> based in{" "}
            <span className="font-bold">VN</span>
          </div>
          <div className="inline-flex items-center gap-4">
            <a href="/resume.pdf" target="_blank" aria-label="Download resume">
              <Button size="lg" color="primary" rightIcon={<LuDownload />}>
                Download Resume
              </Button>
            </a>
            <a href="#experience" aria-label="View experience">
              <Button
                size="lg"
                variant="outlined"
                color="primary"
                rightIcon={<LuArrowRight />}
              >
                See my experience
              </Button>
            </a>
          </div>
        </div>

        <div className="flex grow flex-col gap-8">
          <p className="text-justify">
            Skilled ReactJS Frontend Developer with 4 years of experience in
            building dynamic and responsive web applications. Proficient in
            JavaScript, TypeScript, and modern frontend technologies, including
            Redux, React Hooks, and Next.js. Strong expertise in creating
            intuitive user interfaces, optimizing performance, and ensuring
            cross-browser compatibility. Adept at collaborating with
            cross-functional teams to deliver high-quality, scalable solutions.
          </p>
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            role="list"
            aria-label="Contact information"
          >
            <a
              target="_blank"
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 whitespace-nowrap"
              role="listitem"
              aria-label="Phone number"
            >
              <LuSmartphone />
              <span>{contact.phone}</span>
            </a>
            <a
              target="_blank"
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 whitespace-nowrap"
              role="listitem"
              aria-label="Email address"
            >
              <LuMail />
              <span>{contact.email}</span>
            </a>
            <a
              target="_blank"
              href={contact.github}
              className="inline-flex items-center gap-2 whitespace-nowrap"
              role="listitem"
              aria-label="GitHub profile"
            >
              <LuGithub />
              <span>@onepercman</span>
            </a>
            <a
              target="_blank"
              href={contact.linkedin}
              className="inline-flex items-center gap-2 whitespace-nowrap"
              role="listitem"
              aria-label="LinkedIn profile"
            >
              <LuLinkedin />
              <span>@onepercman</span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-3xl font-semibold text-transparent sm:text-6xl">
                  4+
                </span>
                <span className="text-lg font-medium sm:text-2xl">
                  Years experience...
                </span>
              </div>
              <div className="text-xs sm:text-sm">
                Hello! I'm onepercman, a web frontend developer with over 4
                years of experience specializing in ReactJS. I'm passionate
                about building responsive, high-performance applications that
                offer great user experiences. Over the years, I've honed my
                skills in frontend technologies, ensuring that my projects not
                only look visually appealing but also perform seamlessly across
                devices.
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-3xl font-semibold text-transparent sm:text-6xl">
                  200+
                </span>
                <span className="text-lg font-medium sm:text-2xl">
                  Project completed...
                </span>
              </div>
              <div className="text-xs sm:text-sm">
                Having completed over 200 projects, I've gained extensive
                experience in delivering user-centric, robust web applications.
                My work spans a wide range, from small business websites to
                large-scale platforms. I'm always excited to take on new
                challenges, bringing innovative ideas to life through clean,
                maintainable code.
              </div>
            </div>
          </div>

          <div
            className="inline-flex gap-4 rounded-2xl bg-default p-6"
            role="complementary"
            aria-label="Quote"
          >
            <LuQuote size={80} className="flex-none text-secondary" />
            <div className="grow text-2xl font-medium">
              "Crafting seamless user experiences with code that speaks
              simplicity, performance, and innovation."
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
