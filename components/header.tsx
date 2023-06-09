import Link from "next/link"
import { useState } from "react"
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai"
import { links } from "../data/links"

const Header = () => {
    const [navbar, setNavBar] = useState(false)
    return (
        <header className={`bg-gray-900 py-6 px-4 lg:px-0 sticky top-0 left-0`}>
            <div className="container mx-auto">
                <div className="flex lg:justify-end justify-start">
                    <div className="flex lg:hidden" onClick={() => {
                        setNavBar(!navbar)
                    }}>
                        {navbar === false ? <AiOutlineMenu color="white" size={36} /> : <AiFillCloseCircle color="white" size={36} />}
                    </div>
                    <nav className="hidden lg:flex">
                        <ul className="flex">
                            {
                                links.map((item, index) => {
                                    return (
                                        <li key={index} className={`ml-4 text-base ${item.name === "Home" ? 'text-white' : 'text-gray-400'}`}>
                                            <Link href={item.path}>{item.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? 'block' : 'hidden'
                    }`}
            >
                <ul className="flex flex-col items-end justify-center space-y-8 md:space-x-6 md:space-y-0 lg:hidden text-gray-600">
                    {
                        links.map((item: any, index) => {
                            return <li key={index} className="text-base font-semibold py-2 text-white"><Link href={item.path}>{item.name}</Link></li>
                        })
                    }
                </ul>
            </div>
        </header>
    )
}

export default Header