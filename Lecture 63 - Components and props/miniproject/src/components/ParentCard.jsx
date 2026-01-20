import Child from "./Child";

function ParentCard(props) {
    return ( 
        <>
          <Child name={props.name}/>
        </>
     );
}

export default ParentCard;