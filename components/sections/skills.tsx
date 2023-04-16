import { daily, monthly, weekly } from "../../data/skills"
import Text from "../commons/text"
import Uses from "../commons/uses"

const useText = "Things I Use"

const Skills = () => {
    return (
        <section className="mt-8">
            <div className="container mx-auto">
                <Text text="skills" type="section" />
            </div>
            <div className="my-8">
                <Text text={useText} />
            </div>
            <Uses title="daily" skills={daily} />
            <Uses title="weekly" skills={weekly} />
            <Uses title="monthly" skills={monthly} />
        </section>
    )
}

export default Skills