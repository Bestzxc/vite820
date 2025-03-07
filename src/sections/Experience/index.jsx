import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pic1 from "../../assets/Pic1.png";
import Pic2 from "../../assets/Pic2.png";

const Experience = () => {
    return (
        <div className="space-y-4">
            <div className="text-left text-primaryAccent font-medium">Experience</div>
            <div className="grid grid-cols-[25%_75%]">
                <div>
                    <div className="text-sm">2024-2025</div>
                    <div>
                        <img src={Pic1} className="w-5/6 rounded-md borded-2" />
                    </div>
                    
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className="text-left text-primaryAccent">Fashion and Ecomerce</div>
                    <div className="flex gap-4 text-lg" >
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faMedium} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="text-left text-sm">Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.</div>
                    <div className="text-left flex gap-4 text-sm">
                        <div className="text-gray-100 font-medium bg-primaryTitle px-2 py-1 roundeed-md">React</div>
                        <div className="text-gray-100 font-medium bg-primaryTitle px-2 py-1 roundeed-md">Tailwind</div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-[25%_75%]">
                <div>
                    <div className="text-sm">2024-2025</div>
                    <div>
                        <img src={Pic2} className="w-5/6 rounded-md borded-2" />
                    </div>
                    
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className="text-left text-primaryAccent">Fashion and Ecomerce</div>
                    <div className="flex gap-4 text-lg" >
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faMedium} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="text-left text-sm">Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.</div>
                    <div className="text-left flex gap-4 text-sm">
                        <div className="text-gray-100 font-medium bg-primaryTitle px-2 py-1 roundeed-md">React</div>
                        <div className="text-gray-100 font-medium bg-primaryTitle px-2 py-1 roundeed-md">Tailwind</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;