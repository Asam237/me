import { HeaderLinkType, SocialLinkType } from "../types";
import { EmailIcon, GithubIcon, LinkedinIcon, PhoneIcon, TwitterIcon, WakatimeIcon } from "./icons";

export const links: HeaderLinkType[] = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "#about"
    },
    {
        name: "Experience",
        path: "#experience"
    },
    {
        name: "Skills",
        path: "#skills"
    },
    {
        name: "Interest",
        path: "#interest"
    },
    {
        name: "Projects",
        path: "#projects"
    },
]

export const socials: SocialLinkType[] = [
    {
        icon: LinkedinIcon,
        path: "#"
    },
    {
        icon: GithubIcon,
        path: "#"
    },
    {
        icon: WakatimeIcon,
        path: "#"
    },
    {
        icon: TwitterIcon,
        path: "#"
    },
    {
        icon: EmailIcon,
        path: "#"
    },
    {
        icon: PhoneIcon,
        path: "#"
    },
]