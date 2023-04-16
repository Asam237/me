import { NextSeo } from "next-seo";
import Head from "next/head";
import { ReactNode } from "react"
import Header from "./header";
import { Jost } from "@next/font/google"
import Footer from "./footer";

type Props = {
    children?: ReactNode;
    title?: string
}

const jost = Jost({ weight: "400", subsets: ["latin"] })

const description = [
    "I'm interested in Frontend, Backend, Mobile, Observability, and Infrastructure as Code.",
    'I enjoy sharing my knowledge and contributing to open-source projects.',
]

const Layout = ({ children, title = "Abba Sali Aboubakar Mamate" }: Props) => {
    return (
        <div className={`${jost.className}`}>
            <NextSeo description={description.join(' ')} />
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta content="initial-scale=1.0, width=device-width" name="viewport" />
                <meta content="#009efa" name="theme-color" />
                <link href="/favicon.svg" rel="icon" />
            </Head>
            <div>
                <Header />
                <main className="py-6 lg:py-8">
                    <div className="container mx-auto">
                        <div>
                            {children}
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Layout