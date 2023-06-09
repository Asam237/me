import { experiences } from "../../data/experiences"
import Text from "../commons/text"

const Experience = () => {
    return (
        <section id="experience" className="my-8 lg:my-16">
            <div className="container mx-auto">
                <Text text="EXPERIENCE" type="section" />
                <div className="grid gap-x-16 grid-cols-1 lg:grid-cols-3 mt-8">
                    {
                        experiences.map((item, index) => {
                            return (
                                <div key={index} className="lg:h-64">
                                    <Text text={item.title} type="title" />
                                    <Text text={item.periode} type="subtitle" />
                                    <Text text={item.structure} type="structure" />
                                    <Text text={item.description} />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Experience