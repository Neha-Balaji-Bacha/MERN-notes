import Display from './components/Display'
import Card from './components/Card'
import Profile from './components/Profile'
import Productcard from './components/ProductCard'

function App() {
  // const [count, setCount] = useState(0)
  // const ele = <p className="para">Hi this is Neha</p>;
  // React.createElement("p",null,)
  // {
  //   type: "p",
  //   props: {

  //   }
  // }

  return (
    <>  
      <div className="card">
       {/* <Display name="Neha"/>
       <Card theme ="dark"/> */}

       <h3>Student profile</h3>
       <Profile 
       name="Neha"
       email="neha@example.com"
       degree="B.Tech"
       skill="HTML CSS, JavaScript"/>

      <h3>Product Card</h3>

      <div className="productSection">
        <Productcard
          productName="Book"
          image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          price="600"
          description="Good book"
          theme="light"
        />

        <Productcard
          productName="Laptop"
          image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
          price="50000"
          description="Fast laptop"
          theme="dark"
        />
      </div>
      </div>     
    </>
  )
}

export default App
