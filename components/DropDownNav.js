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
          <a className="dropdown-item" href="#">Action 1</a>
          <a className="dropdown-item" href="#">Another action 2</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
        </Container>
        

    )
}

export default DropDownNav