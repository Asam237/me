import { projects } from "../../data/projects"
import Text from "../commons/text"

const Projects = () => {
    return (
        <section className="my-8 lg:my-16">
            <div className="container mx-auto">
                <Text text="EXPERIENCE" type="section" />
                <div className="grid gap-x-4 gap-y-6 grid-cols-1 lg:grid-cols-3 mt-8">
                    {
                        projects.map((item, index) => {
                            return (
                                <div key={index} className="lg:h-[22rem] border p-6">
                                    <Text text={item.title} type="title" />
                                    <Text text={item.description} type="tags" />
                                    <ul className="mt-4">
                                        {
                                            item.tags.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Text text={item} type="tags" />
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <Text path={item.link} text="GitHub Repository" type="link" />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Projects