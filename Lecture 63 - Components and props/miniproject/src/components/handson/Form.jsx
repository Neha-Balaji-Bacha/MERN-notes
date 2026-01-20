import "../../css/handson/contactUs.css";
function Form({onSuccess}) {
    return ( 
    <>
    <form onSubmit={(e) => {
        e.preventDefault();
        onSuccess(true);
    }}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text"></input>

        <label htmlFor="email">Email</label>
        <input id="email" type="text"></input>

        <label htmlFor="info">Any Suggestions</label>
        <textarea id="info"></textarea>
        
        <div className="btn">
        <button className="submitBtn">Submit</button>
        <button className="callMeBtn">Call Me</button>
        </div>
     </form>
    </>
     );
}
export default Form;
