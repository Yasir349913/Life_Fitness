import img2 from '../Bacimages/img2.webp';
import img4 from '../Bacimages/img4.webp';
import img7 from '../Bacimages/img7.jpg';
import img8 from '../Bacimages/img8.jpg';
import img9 from '../Bacimages/img9.jpg';
let Facimages=()=>{
return(
    <>
    <center><h1 className="heading">Our Faculty Members</h1></center>
  <div className="allmembers">
  
  <img className="members" src={img8} alt="Description of the image" />
  <img className= "members"src={img2} alt="Description of the image" />
  <img className="members" src={img4} alt="Description of the image" />
  </div>
  <div className="allmembers2">
  <img className="members" src={img7} alt="Description of the image" />
  <img className= "members"src={img9} alt="Description of the image" />
  <img className="members" src={img8} alt="Description of the image" />
    </div>

    </>
)
}
export default Facimages;