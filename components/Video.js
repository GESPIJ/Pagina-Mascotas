import style from "../styles/module.index.css"
const Video=()=>{
return(
    <>
<div id="recomendaciones" className="d-flex justify-content-center recommendations">
    <h4 className= "mt-4">Are you taking good care of your dog?</h4>
</div>
<div className="videoclass d-flex justify-content-around">
    <iframe className="videoind" width="392" height="221" src="https://www.youtube.com/embed/ed22MIDGVr8" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>
    <iframe className="videoind" width="392" height="221" src="https://www.youtube.com/embed/z3fYXLdQN2M" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>
    <iframe className="videoind" width="392" height="221" src="https://www.youtube.com/embed/gpBwi3Md8Ag" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>
</div>
</>)
}

export default Video