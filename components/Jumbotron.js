
import style from "../styles/module.index.css"

const Jumbotron = ()=>{
return(<div className="jumbotron JumboImage">
    <div className="d-flex justify-content-center">
    <h1 className="display-4">Pet Safe</h1>
    </div>
  <div className="d-flex flex-column justify-content-center align-items-center">
  <p className="lead"></p>
  <hr className="my-4"/>
  <p></p>
  <p className="lead mt-3">
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>

  </div>
  
</div>)
}
export default Jumbotron