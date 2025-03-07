import About from '../About';
import Experience from '../Experience';
const RightSection = () => {
    return (
        <div className=' grid gap-4 px-4'>
            <About />
            <Experience />
            <div className='text-left mb-96'>Project1</div>
            <div className='text-left mb-96'>Project2</div>
        </div>
    )
}
export default RightSection;