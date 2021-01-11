import styles from "../styles/module.index.css"
import Image from "next/image"

const About=()=>{
    return (
        <div id="about" className="d-flex justify-content-around">
        <div className="About1">
            <h2>Quienes somos?</h2>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column services-porque">
                <h4 className="services-porque text-center">Por que nostros?</h4>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                </div>
            </div>

            
            
            
        </div>
        <div class="About2">
            <Image src="/iloveDog.jpg" width="600px" height="600px"/>
        </div>
        </div>
    )
}

export default About