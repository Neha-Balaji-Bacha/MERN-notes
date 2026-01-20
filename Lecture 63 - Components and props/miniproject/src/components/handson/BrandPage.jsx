import "../../css/handson/productApp.css";
import ShoesCollection from "./ShoesCollection";
function BrandPage() {
    return ( 
        <>
        <div className="app">
          <nav className="container">

            <div className="logo">
                <img src="/images/brand_logo.png" alt="logo" />
            </div>

            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Conatct</li>
            </ul>
            <button className="login">Login</button>
         </nav>

         <div className="main">
            <div className="content">
            <div className="info">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Style is visible, comfort is felt — the best footwear delivers both.Every journey begins with a step, and every step should feel powerful. Our shoes are crafted to support your movement, fuel your confidence, and walk with you through every challenge.</p>
            </div>

             <div className="btn">
                 <button className="primary-btn">Shop Now</button>
                 <button className="secondary-btn">Category</button>
            </div>

            <div className="icon">
                <p>Also available on</p>
                <img src = "/images/flipkart.png" alt="flipkart"/>
                <img src = "/images/amazon.png" alt="amazon"/>
            </div>
         </div>
         <ShoesCollection/>
         </div>
        </div>
        </>
     );
}

export default BrandPage;