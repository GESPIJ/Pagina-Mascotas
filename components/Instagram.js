import Image from "next/image"
import style from "../styles/module.index.css"
const Instagram=()=>{
    return(
        <div className="instagram">
        <h3 className="mb-4">Siguenos en instagram</h3>
        <div className="d-flex justify-content-around instagram-images">
            <Image src="/Insta1.jpg" width="240px" height="190px"/>
            <Image src="/Insta2.jpg" width="240px" height="190px"/>
            <Image src="/Insta3.jpg" width="240px" height="190px"/>
            <Image src="/Insta4.jpg" width="240px" height="190px"/>
        </div>
        <div className="d-flex justify-content-around instagram-images">
        <Image src="/Insta5.jpg" width="240px" height="190px"/>
        <Image src="/Insta6.jpg" width="240px" height="190px"/>
        <Image src="/Insta7.jpg" width="240px" height="190px"/>
        <Image src="/Insta8.jpg" width="240px" height="190px"/>
        </div>
    </div>
    )
}

export default Instagram