import { educations } from "../../data/education"
import Text from "../commons/text"

const Education = () => {
    return (
        <section id="education" className="mt-8">
            <div className="container mx-auto">
                <Text text="education" type="section" />
            </div>
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 mt-8">
                {
                    educations.map((item, index) => {
                        return (
                            <div key={index} className="lg:h-44 lg:w-96">
                                <Text text={item.school} type="introsubtitle" />
                                <Text text={item.diplome} />
                                <Text text={item.year} />
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Education