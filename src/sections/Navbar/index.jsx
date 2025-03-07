import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return (
        <div className='text-left flex flex-col gap-4 font-semibold'>
            <div>
                <FontAwesomeIcon className=' text-primaryTitle' icon={faArrowRight} />
                About
            </div>
            <div>Experience</div>
            <div>Project</div>
            <div>Article</div>
        </div>
    )
}
export default Navbar;