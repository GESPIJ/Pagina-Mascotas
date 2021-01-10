import Image from "next/image"
import style from "../styles/module.index.css"

const ServicesImages=()=>{
    return (
        <div className="d-flex justify-content-center">
    <span className="w-100 d-flex justify-content-around" >
            <div className="w-25 d-flex flex-column align-items-center">
            <Image src="/dog1.jpg" width="240px" height="190px" className="border" />
            <br/>
            <span>Porque es un miembro mas de la familia</span>
            </div>  
            <div className="w-25 d-flex flex-column align-items-center">
            <Image src="/dog2.jpg" width="240px" height="190px" className="border" />
            <br/>
            <span>Para los chiquitos de la casa</span>
            </div>
            <div className="w-25 d-flex flex-column align-items-center">
            <Image src="/dog-3.jpg" width="240px" height="190px" className="border" />
            <br/>
            <span>Amor incondicional</span>
            </div>        
    </span>
</div>
    )
}
export default ServicesImages