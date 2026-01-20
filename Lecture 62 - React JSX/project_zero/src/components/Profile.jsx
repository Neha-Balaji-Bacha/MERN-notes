import "../css/profile.css";
function Profile({name,email,degree,skill}) {
    return ( 
        <>
        <div className="profileOfStudent">
         <div>Full name : {name}</div>
         <div>Email : {email}</div>
         <div>Degree : {degree}</div>
         <div>Skills : {skill}</div>
         </div>
        </>
     );
}

export default Profile;