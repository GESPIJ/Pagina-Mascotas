import Link from "next/link"
import Container from "../components/Container"

const DropDownNav=()=>{
    return (
        <Container>
            
            <div className="dropdown" onClick={()=>{console.log("Haciendo click")}}>
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="true">
          Navegar
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Quienes somos?</a>
          <a className="dropdown-item" href="#">Servicios</a>
          <a className="dropdown-item" href="#">Recomendaciones</a>
        </div>
      </div>
        </Container>
        

    )
}

export default DropDownNav