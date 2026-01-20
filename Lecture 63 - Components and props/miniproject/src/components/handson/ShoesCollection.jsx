import { useEffect,useState } from "react";
import "../../css/handson/productApp.css";
function ShoesCollection() {
     const images = [
        "/images/image copy 2.png",
        "/images/image copy.png",
        "/images/image copy 3.png",
        "/images/image.png"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
   
    const interval = () => setCurrentIndex( currentIndex === images.length - 1 ? 0 : currentIndex+1);
    return ( 
        <>
        <div className="images">
                <img src ={images[currentIndex]} alt="shoes"/>
                <button className="next" onClick={interval}>Next</button>
         </div>
        </>
     );
}

export default ShoesCollection;