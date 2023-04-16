import { methodologies, technologies } from "../../data/techs"
import Techs from "../commons/techs"
import Text from "../commons/text"

const tech = "Technologies"
const meth = "Methodologies"

const Interested = () => {
    return (
        <section className="mt-10 lg:my-16">
            <div className="container mx-auto">
                <Text text="INTERESTS" type="section" />
                <div className="mt-6 lg:mt-10" />
                <Techs type="technologies" title="Technologies" techs={technologies} />
                <Techs title="Methodologies" techs={methodologies} />
            </div>
        </section>
    )
}

export default Interested