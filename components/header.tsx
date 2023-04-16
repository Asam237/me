import Link from "next/link"
import { HiMenu } from "react-icons/hi"
import { links } from "../data/links"

const Header = () => {
    return (
        <header className={`bg-gray-900 py-6 px-4 lg:px-0`}>
            <div className="container mx-auto">
                <div className="flex lg:justify-end justify-start">
                    <div className="flex lg:hidden">
                        <HiMenu size={36} color="white" />
                    </div>
                    <nav className="hidden lg:flex">
                        <ul className="flex">
                            {
                                links.map((item, index) => {
                                    return (
                                        <li key={index} className="text-white ml-4 text-base">
                                            <Link href={item.path}>{item.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header