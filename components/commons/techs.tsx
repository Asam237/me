import Text from "./text"
import { HiCode, HiOutlineCog } from "react-icons/hi"

interface ITech {
    title: string
    techs: any[]
    type?: string
}

const Techs = ({ title, techs, type }: ITech) => {
    if (type === "technologies") {
        return (<div>
            <Text type="introsubtitle" text={title} />
            <div>
                <ul className="ml-4 mt-4">
                    {
                        techs.map((item, index) => {
                            return (
                                <li key={index} className="flex items-center">
                                    <HiCode size={30} className="mr-2" /><Text text={item} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        )
    } else {

        return (

            <div className="mt-4 lg:mt-8">
                <Text type="introsubtitle" text={title} />
                <div>
                    <ul className="ml-4 mt-4">
                        {
                            techs.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center">
                                        <HiOutlineCog size={30} className="mr-2" /><Text text={item} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        )
    }
}

export default Techs