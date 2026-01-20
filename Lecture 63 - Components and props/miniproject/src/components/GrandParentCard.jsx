import ParentCard from "./ParentCard";

function GrandParentCard(props) {
    return ( 
        <>
           <ParentCard name={props.name}/>
        </>
     );
}

export default GrandParentCard;