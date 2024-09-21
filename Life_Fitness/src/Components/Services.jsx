import img10 from '../Bacimages/img10.avif';
import img11 from '../Bacimages/img11.avif';
import img12 from '../Bacimages/img12.avif';
import img13 from '../Bacimages/img13.avif';
import img14 from '../Bacimages/img14.avif';
import img15 from '../Bacimages/img15.avif';
import img17 from '../Bacimages/img17.avif';
import img18 from '../Bacimages/img18.avif';
import img19 from '../Bacimages/img19.avif';

let Services=()=>{
return(<>
<center><h1 className="services">Our Services</h1></center>
<center><h1 >Personal Training</h1></center>
<div className="allmembers">
  
  <img className="members" src={img10} alt="Description of the image" />
  <img className="members" src={img11} alt="Description of the image" />
  <img className="members" src={img12} alt="Description of the image" />
  
 
  </div>
  <center><h1 >Group Training</h1></center>
  <div className="allmembers2">
  <img className="members" src={img13} alt="Description of the image" />
  <img className="members" src={img14} alt="Description of the image" />
  <img className="members" src={img15} alt="Description of the image" />
    </div>
    <center><h1 >Facilities</h1></center>
    <div className="allmembers2">
    <img className="members" src={img17} alt="Description of the image" />
    <img className="members" src={img18} alt="Description of the image" />
    <img className="members" src={img19} alt="Description of the image" />
    </div>
</>)
}
export default Services;