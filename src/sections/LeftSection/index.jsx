import Header from "../Header"
import Navbar from "../Navbar"
import Contact from "../contact"

const LeftSection = () => {
    return (
        <div className="px-4">
            <div className='sticky top-0 grid lg:grid-rows-[35% 40% 25%] lg:h-[90vh] gap-4'>
                <Header />
                <Navbar />
                <Contact />
            </div>
        </div>
    )
}
export default LeftSection;