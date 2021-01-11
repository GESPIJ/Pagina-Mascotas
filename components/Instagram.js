import Image from "next/image"
import style from "../styles/module.index.css"
const Instagram=()=>{
    return(
        <div className="instagram">
        <h3 className="mb-4">Siguenos en instagram</h3>
        <div className="d-flex justify-content-around instagram-images">
            <Image className="mb-2" src="/Insta1.jpg" width="240px" height="190px"/>
            <Image className="mb-2" src="/Insta2.jpg" width="240px" height="190px"/>
            <Image className="mb-2" src="/Insta3.jpg" width="240px" height="190px"/>
            <Image className="mb-2" src="/Insta4.jpg" width="240px" height="190px"/>
        </div>
        <div className="d-flex justify-content-around instagram-images">
        <Image className="mb-2" src="/Insta5.jpg" width="240px" height="190px"/>
        <Image className="mb-2" src="/Insta6.jpg" width="240px" height="190px"/>
        <Image className="mb-2" src="/Insta7.jpg" width="240px" height="190px"/>
        <Image className="mb-2" src="/Insta8.jpg" width="240px" height="190px"/>
        </div>
    </div>
    )
}

export default Instagram