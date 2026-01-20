import "../css/Card.css";
function Card({theme}) {
    return ( <>
       <div className={theme}>Current Theme : {theme}</div>
    </> );
}

export default Card;