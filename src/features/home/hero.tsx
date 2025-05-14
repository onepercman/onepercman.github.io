import { Button } from "@/libs/atoms"
import { motion, useScroll, useTransform } from "framer-motion"
import { FC } from "react"
import {
  LuExternalLink,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuSmartphone,
} from "react-icons/lu"
import { Typewriter } from "react-simple-typewriter"
import { contact } from "./data"

export const Hero: FC = () => {
  const { scrollYProgress } = useScroll()

  const translateL = useTransform(scrollYProgress, [0, 1], ["0", "200%"])
  const opacityDown = useTransform(scrollYProgress, [0, 0.2], ["100%", "0%"])
  const translateYL = useTransform(scrollYProgress, [0, 1], ["0", "60vh"])
  const translateR = useTransform(scrollYProgress, [0, 1], ["0", "150%"])
  const scaleL = useTransform(scrollYProgress, [0, 1], ["100%", "500%"])
  const scaleR = useTransform(scrollYProgress, [0, 1], ["100%", "0%"])

  return (
    <motion.section
      className="relative grid min-h-screen grid-cols-1 items-center gap-4 overflow-hidden p-6 sm:grid-cols-2 sm:p-16"
      aria-label="Hero section"
    >
      <motion.div
        initial={{ translateX: "-100%" }}
        animate={{ translateX: "0" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={{}}
        className="relative flex h-full w-full flex-col items-start justify-center gap-8"
      >
        <div className="flex flex-col text-4xl font-semibold uppercase sm:text-6xl">
          <motion.span style={{ opacity: opacityDown }}>My name</motion.span>
          <motion.span
            style={{ opacity: opacityDown }}
            className="text-2xl sm:text-4xl"
          >
            is
          </motion.span>
          <motion.h1
            style={{
              translateX: translateL,
              translateY: translateYL,
              scale: scaleL,
            }}
            className="text-transparent [-webkit-text-stroke:_2px_#ef4444]"
          >
            onepercman
          </motion.h1>
        </div>
        <motion.div
          style={{ opacity: opacityDown }}
          className="text-lg sm:text-3xl"
        >
          <span className="font-semibold">
            <Typewriter
              words={["Frontend Engineer", "Web3 Enthusiast"]}
              cursor
              loop
            />
          </span>
          based in <span className="font-bold">VN</span>
        </motion.div>
        <motion.a
          href="#resume"
          style={{ opacity: opacityDown }}
          aria-label="Go to resume section"
        >
          <Button size="lg" color="primary" rightIcon={<LuExternalLink />}>
            Work with me
          </Button>
        </motion.a>
        <motion.div
          style={{ opacity: opacityDown }}
          className="flex flex-col items-start gap-3"
          role="list"
          aria-label="Contact information"
        >
          <motion.a
            initial={{ translateX: "10rem", opacity: 0 }}
            animate={{ translateX: "0", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            target="_blank"
            href={`tel:${contact.phone}`}
            className="inline-flex items-center gap-2 whitespace-nowrap"
            role="listitem"
            aria-label="Phone number"
          >
            <LuSmartphone />
            <span>{contact.phone}</span>
          </motion.a>
          <motion.a
            initial={{ translateX: "10rem", opacity: 0 }}
            animate={{ translateX: "0", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            target="_blank"
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 whitespace-nowrap"
            role="listitem"
            aria-label="Email address"
          >
            <LuMail />
            <span>{contact.email}</span>
          </motion.a>
          <motion.a
            initial={{ translateX: "10rem", opacity: 0 }}
            animate={{ translateX: "0", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            target="_blank"
            href={contact.github}
            className="inline-flex items-center gap-2 whitespace-nowrap"
            role="listitem"
            aria-label="GitHub profile"
          >
            <LuGithub />
            <span>@onepercman</span>
          </motion.a>
          <motion.a
            initial={{ translateX: "10rem", opacity: 0 }}
            animate={{ translateX: "0", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            target="_blank"
            href={contact.linkedin}
            className="inline-flex items-center gap-2 whitespace-nowrap"
            role="listitem"
            aria-label="LinkedIn profile"
          >
            <LuLinkedin />
            <span>@onepercman</span>
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ translateY: "-100%" }}
        animate={{ translateY: "0" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={{ translateY: translateR, scale: scaleR }}
        className="absolute bottom-0 right-0 -z-10 aspect-square w-full overflow-hidden rounded-t-full sm:relative sm:rounded-full"
      >
        <img
          src="/myself.jpeg"
          className="h-full w-full rounded-t-full"
          alt="Trung Tran Duy - Frontend Engineer"
          loading="eager"
        />
      </motion.div>
    </motion.section>
  )
}
