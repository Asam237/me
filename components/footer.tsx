const Footer = () => {
    return (
        <footer className="bg-gray-900 py-6">
            <div className="container mx-auto">
                <div className="flex">
                    <p className="text-white text-sm lg:text-base">© All Rights Reserved - {new Date().getFullYear} Abba Sali</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer