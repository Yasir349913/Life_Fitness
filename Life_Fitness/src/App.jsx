import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Images from "./Components/Images";
import FacContainer from "./Components/FacContainer";
import Form from "./Form";
import Facimages from "./Components/Facimages";
import Health_heading from "./Components/Health_heading";
import Food from "./Components/Food";
import Error_Message from "./Components/Error_Message";
import Container from "./Components/Container";
import Foodinput from "./Components/Foodinput";
import Services from "./Components/Services";
import { useState } from "react";
import "./App.css"
let App=()=>{
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newfooditem = event.target.value;
      event.target.value = "";
      let newItems = [...fooditems, newfooditem];
      setfooditems(newItems);
    }
  };
  let [fooditems, setfooditems] = useState([]);
return(
  <>
  <div className="parent_container">
  <Navbar></Navbar>

    <Images className="images"></Images>
    <FacContainer></FacContainer>
    <Form></Form>
    <Facimages></Facimages>
    <Services></Services>
    <Container class="healthapp">
      <Health_heading></Health_heading>
      <Foodinput handleonKeyDown={onKeyDown}></Foodinput>
      <Food fooditems={fooditems}></Food>
      <Error_Message fooditems={fooditems}></Error_Message>
    </Container>
  <Footer></Footer>

  </div>
  </>
)
}
export default App;