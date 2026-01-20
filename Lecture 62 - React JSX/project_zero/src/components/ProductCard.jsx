import "../css/product.css";
function ProductCard({productName,image,price,description,theme}) {
    return (
        <>
        <div className={`productCard ${theme}`}>
            <p>Name : {productName}</p>
            <img src={image} alt={productName} width="150" />
            <p>Price : {price}</p>
            <p>Description : {description}</p>
        </div>
        </>
    );
}
export default ProductCard;