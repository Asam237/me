import Image from "next/image"
import Link from "next/link"
import { socials } from "../../data/links"
import Me from "../../public/me.png"
import Text from "../commons/text"

const title: string = "Abba Sali Aboubakar Mamate"
const subTitle: string = "Software Developer"
const content: string[] = ["I'm interested in web mobile and desktop technologies.",
    "I enjoy sharing my knowledge and contributing to open-source projects."]

const Intro = () => {
    return (
        <div id="about" className="container mx-auto">
            <div className="flex flex-col lg:flex-row">
                <div className="w-56 h-56 border-8 rounded-full border-gray-900">
                    <Image src={Me} alt="picture" className="object-cover w-52 rounded-full h-52" />
                </div>
                <div className="mt-6 lg:ml-32">
                    <div className="flex flex-col">
                        <Text text={title} type="introtitle" />
                        <Text text={subTitle} type="introsubtitle" />
                        <ul className="mt-4">
                            {
                                content.map((item, index) => {
                                    return (
                                        <li key={index} className="list-none mt-2 text-gray-700"><p className="text-xl font-light">{item}</p></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <ul className="flex justify-between flex-row mt-8">
                    {socials.map((item, index) => {
                        return (
                            <li key={index} className="rounded-full w-10 sm:w-14 lg:w-24 h-10 sm:h-14 lg:h-24 bg-gray-900 flex justify-center items-center">
                                <Link href={item.path}>
                                    <Image src={item.icon} alt="icon" className="w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12" />
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Intro