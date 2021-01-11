import styles from "../styles/module.index.css"
import Image from "next/image"

const Services =()=>{
    return(
        <div id="servicios">
        <hr/>
    <div className="d-flex justify-content-center services">
        <h2>Nuestros servicios</h2>
    </div>
    <div className="d-flex justify-content-around services2">
        <div className="d-flex flex-column justify-content-center align-items-center services2-item">
            <div>
            <h5 className="text-center">Veterinario</h5>
            <br/>
            <p className="text-justify">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div className="d-flex flex-column align-items-center">
            <Image src="/dog1.jpg" width="240px" height="190px" className="border" />
            <br/>
            <span className="text-center">Porque es un miembro mas de la familia</span> 
            </div>
            </div>
        <div className=" d-flex flex-column align-items-center justify-content-center services2-item">
            <div>
            <h5 className="text-center">Venta de suplementos</h5>
            <br/>
            <p className="text-justify">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div className="d-flex flex-column align-items-center">
            <Image src="/dog2.jpg" width="240px" height="190px" className="border" />
            <br/>
            <span className="text-center">Para los chiquitos de la casa</span> 
            </div>
            
            
        </div>
        <div className=" d-flex flex-column align-items-center justify-content-center services2-item">
            <div>
            <h5 className="text-center">Peluqueria</h5>
            <br/>
            <p className="text-justify">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div className="d-flex flex-column align-items-center">
            <Image src="/dog-3.jpg" width="240px" height="190px" className="border" />
            <br/>
            <span className="text-center">Amor incondicional</span> 
            </div>

           
        </div>
    </div>
    </div>

    )
}

export default Services