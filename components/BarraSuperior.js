import style from "../styles/module.index.css"
import DropDownNav from "../components/DropDownNav"
import Image from "next/image"
const BarraSuperior=()=>{
    return (
        <div className="d-flex justify-content-between contenedorNav">
        <DropDownNav/>
        <div className="d-flex justify-content-center lista1">
        <ul>
            <li>Servicios</li>
            <li>Quienes somos?</li>
            <li>Recomendaciones</li>
        </ul>
        </div>
        <div className="d-flex justify-content-center">
            <Image src="/logo.jpg" width="138px" height="100px" className="logo-img"/>
        </div>
        </div>
    )
}

export default BarraSuperior