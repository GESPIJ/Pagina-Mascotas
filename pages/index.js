import DropDownNav from "../components/DropDownNav"
import Footer from "../components/Footer"
import BarraSuperior from "../components/BarraSuperior"
import Jumbotron from "../components/Jumbotron"
import About from "../components/About"
import Services from "../components/Services"
import ServicesImages from "../components/ServicesImages"
import Video from "../components/Video"
import Instagram from "../components/Instagram"
import style from "../styles/module.index.css"

const Index=()=>{
    return (
        <>  
    <BarraSuperior/> 
    <Jumbotron/>
    <About/>
    <Services /> 
    <ServicesImages/>
    <Video/>
    <br/>
    <Instagram/>
    <Footer/>

        </>
    )
    
}

export default Index