import { data } from "../../Content/About";
const About = () => {
    return (
        <div className="text-left space-y-4">
            <div className='text-primaryAccent'>{data.title}</div>
            <div>{data.description}</div>

        </div>
    )
}
export default About;