import Link from "next/link"

interface IText extends React.HTMLAttributes<HTMLButtonElement> {
    text: any
    type?: string
    path?: any
}

const Text = ({ text, type, path, ...props }: IText) => {
    if (type === "introtitle") {
        return <h1 className="text-4xl lg:text-6xl font-bold">{text}</h1>
    }
    if (type === "introsubtitle") {
        return <h1 className="mt-4 text-2xl lg:text-3xl">{text}</h1>
    }
    if (type === "section") {
        return <h1 className="text-3xl lg:text-5xl font-bold uppercase my-4">{text}</h1>
    }
    if (type === "title") {
        return <h1 className="text-xl lg:text-3xl font-bold my-2">{text}</h1>
    }
    if (type === "subtitle") {
        return <h1 className="text-base lg:text-xl font-normal my-2">{text}</h1>
    }
    if (type === "tags") {
        return <h1 className="text-base lg:text-lg font-normal my-2">{text}</h1>
    }
    if (type === "structure") {
        return <h1 className="text-base lg:text-lg text-green-500 my-2">{text}</h1>
    }
    if (type === "link") {
        return <Link href={`${path}`} className="text-base lg:text-xl text-green-500 my-2">{text}</Link>
    }
    return <p className={`text-base lg:text-lg font-normal text-gray-700 my-2 ` + props}> { text }</p >

}

export default Text