import style from "../styles/module.index.css"

const Footer = ()=>{
    return(
        <div id="container" className="Footer">
         <div id="part1">
             <div id="companyinfo"> <a id="sitelink" href="#">PETSAFE</a>
                 <p id="title">Lo mejor para tu mascota</p>
                 <p id="detail">Nos hacemos cargo de todo lo que necesite tu mascota, desde alimentos, medicinas o hasta un buen corte de pelo</p>
             </div>
             <div id="explore">
                 <p id="txt1">Explorar</p> <a class="link" href="#">Home</a> <a class="link" href="#">Quienes somos?</a> <a class="link" href="#">Seminarios</a> <a class="link" href="#">Ofertas de empleo</a>
             </div>
             <div id="visit">
                 <p id="txt2">Visitanos</p>
                 <p class="text">Plaza Venezuela </p>
                 <p class="text">Avenida Principal de Las Palmas </p>
                 <p class="text">Telefóno: (212) 236-3611 </p>
                 <p class="text">Fax: (212) 236-0350 </p>
             </div>
             <div id="legal">
                 <p id="txt3">Legal</p> <a class="link1" href="#">Terminos y condiciones</a> <a class="link1" href="#">Private Policy</a>
             </div>
             <div id="subscribe">
                 <p id="txt4">Escribenos</p>
                 <form> <input id="email" type="email" placeholder="Email"/> </form> <a class="waves-effect waves-light btn">Suscribir</a>
                 <p id="txt5">Contactanos</p> <i class="fab fa-facebook-square social fa-2x"></i> <i class="fab fa-linkedin social fa-2x"></i> <i class="fab fa-twitter-square social fa-2x"></i>
             </div>
         </div>
         <div id="part2">
             <p id="txt6"><i class="material-icons tiny"> copyright</i>copyright 2019 BBbootstrap - All right reserved</p>
         </div>
     </div>
    )
}

export default Footer