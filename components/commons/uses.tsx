import Image from "next/image"
import Text from "./text"

interface IUses {
    title: string
    skills: any[]
}

const Uses = ({ title, skills }: IUses) => {
    return (
        <div>
            <Text text={title} />
            <ul className="flex flex-wrap mb-8 items-center">
                {skills.map((item, index) => {
                    return (<li className="mr-6" key={index}>
                        <Image src={item} alt="pic" className="w-12 h-auto object-cover" />
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Uses