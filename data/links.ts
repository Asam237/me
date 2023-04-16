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
        path: "#interests"
    },
    {
        name: "Projects",
        path: "#projects"
    },
]

export const socials: SocialLinkType[] = [
    {
        icon: LinkedinIcon,
        path: "https://www.linkedin.com/in/abba-sali-aboubakar-mamate/"
    },
    {
        icon: GithubIcon,
        path: "http://github.com/Asam237"
    },
    {
        icon: WakatimeIcon,
        path: "https://wakatime.com/@asam"
    },
    {
        icon: TwitterIcon,
        path: "https://twitter.com/asam_237"
    },
    {
        icon: EmailIcon,
        path: "mailto:abbasalimokolo@gmail.com"
    },
    {
        icon: PhoneIcon,
        path: "tel:+237691846922"
    },
]