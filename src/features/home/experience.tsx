import { Button, Collapsible } from "@/libs/atoms"
import { motion, useInView } from "framer-motion"
import { FC, useRef } from "react"
import { LuArrowRight, LuExternalLink } from "react-icons/lu"
import { cn } from "react-tvcx"

const experienceData = [
  {
    id: 2,
    company: "Freelancer",
    time: "August 2023 — Present",
    image: "/myself.jpeg",
    description:
      "Developer, specializing in providing frontend technical solutions.",
    projects: [
      {
        id: 1,
        name: "Portfolio Website",
        description:
          "Personal portfolio built with React, Vite, and TypeScript.",
        link: "https://github.com/onepercman/onepercman.github.io",
      },
      {
        id: 2,
        name: "Several private projects (Crypto)",
        description: "Freelance projects",
      },
    ],
  },
  {
    id: 3,
    company: "Moonlab",
    time: "April 2021 — August 2023",
    image: "https://moonlab.asia/logo/logo.png",
    description:
      "Head of frontend development team. Provide and ensure frontend technical quality of the company's main products.",
    projects: [
      {
        id: 1,
        name: "ONUS Chain",
        description:
          "ETH Layer 2 blockchain network partnering with ONUS. Developed UI for block explorer, landing page, etc.",
        link: "https://onuschain.io/",
      },
      {
        id: 2,
        name: "Moonlab Landing page",
        description: "Moonlab official landing page",
        link: "https://moonlab.asia/",
      },
      {
        id: 3,
        name: "Run Together",
        description:
          "Move-to-earn project releasing tokens and NFTs on BSC network. Cooperated with ONUS.",
        link: "https://runtogether.net/",
      },
      {
        id: 4,
        name: "Mcity",
        description:
          "Metaverse project releasing tokens and NFTs on BSC network. Mainly responsible for developing the project's dApps.",
        link: "https://mcity.net/",
      },
      {
        id: 5,
        name: "Animverse",
        description:
          "GameFi project releasing tokens and NFTs on BSC network. Mainly responsible for developing the project's dApps.",
        link: "https://animverse.com/",
      },
      {
        id: 6,
        name: "200+ Web3 Dapp (Private projects)",
        description:
          "GameFi, DeFl, Quest-to-earn, Move-to-earn, AMM Dex, Cex.... ",
        link: "",
      },
    ],
  },
  {
    id: 4,
    company: "Teracom",
    time: "June 2020 — April 2021",
    image: "https://teracom.vn/teracom-favicon.png",
    description:
      "Participated in developing outsourcing projects for public and private enterprises.",
    projects: [
      {
        id: 1,
        name: "Vinh Tan TPC",
        description:
          "Outsourcing project to develop web portal/CMS/CRM of Vinh Tan Thermal Power Company. Participated in UI development and bug fixing.",
        link: "https://www.vinhtantpc.com.vn/",
      },
      {
        id: 2,
        name: "Son La HPC",
        description:
          "Outsourcing project to develop web portal/CMS/CRM of Son La Hydropower Company. Participated in UI development and bug fixing.",
        link: "https://sonlahpc.com.vn/",
      },
      {
        id: 3,
        name: "Yousim",
        description: "Participated in UI development and bug fixing.",
        link: "",
      },
      {
        id: 4,
        name: "Covid-19 Vaccination Registration Website",
        description:
          "Built UI for the registration and management websites for the Ministry of Public Security.",
        link: "",
      },
    ],
  },
]

export const Experience: FC = () => {
  const container = useRef<HTMLDivElement>(null)
  const inView = useInView(container, { once: true })

  return (
    <section id="experience" ref={container} className="py-12 pl-16 pr-6">
      <ol className="relative mx-auto w-full max-w-xl space-y-6 border-s border-line">
        {experienceData.map((experience, index) => (
          <motion.li
            key={experience.id}
            variants={{ start: { opacity: "100%", translateY: "0%" } }}
            initial={{ opacity: "0%", translateY: "-100%" }}
            animate={inView ? "start" : "idle"}
            transition={{ delay: index / 2 }}
            className="ms-8"
          >
            <motion.span
              variants={{ start: { opacity: "100%" } }}
              initial={{ opacity: "0%" }}
              animate={inView ? "start" : "idle"}
              transition={{ delay: index / 2 + index / 2 }}
              className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-component ring-8 ring-component"
            >
              <img className="rounded-full shadow-lg" src={experience.image} />
            </motion.span>
            <div className="rounded-lg border border-line bg-component p-4 shadow-sm sm:flex">
              <Collapsible className="w-full space-y-4">
                <Collapsible.Context>
                  {({ open }) => (
                    <>
                      <div className="inline-flex w-full flex-col-reverse gap-4 sm:flex-row">
                        <div className="grow text-sm font-semibold">
                          {experience.company}
                        </div>
                        <time className="mb-1 whitespace-nowrap text-xs font-normal text-muted sm:order-last sm:mb-0">
                          {experience.time}
                        </time>
                      </div>
                      <div className="text-sm font-normal text-secondary">
                        {experience.description}
                      </div>
                      <Collapsible.Trigger asChild>
                        <Button
                          size="sm"
                          shape="pill"
                          variant="light"
                          color={open ? "default" : "primary"}
                          rightIcon={
                            <LuArrowRight
                              className={cn(
                                "transition-transform",
                                open ? "-rotate-90" : "",
                              )}
                            />
                          }
                          className="w-fit"
                        >
                          {open ? "Hide " : ""}Projects
                        </Button>
                      </Collapsible.Trigger>
                      <Collapsible.Content className="mt-4 w-full space-y-4">
                        {experience.projects.map((project) => (
                          <div
                            key={project.id}
                            className="rounded-md border border-line bg-default p-4 shadow-sm transition-shadow duration-200 hover:shadow-md"
                          >
                            <h4 className="text-xs font-semibold text-primary">
                              {project.name}
                            </h4>
                            <p className="mt-1 text-xs text-secondary">
                              {project.description}
                            </p>
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-flex items-center text-sm text-primary hover:underline"
                              >
                                View Project{" "}
                                <LuExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            )}
                          </div>
                        ))}
                      </Collapsible.Content>
                    </>
                  )}
                </Collapsible.Context>
              </Collapsible>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
