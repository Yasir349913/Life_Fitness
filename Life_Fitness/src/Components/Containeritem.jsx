let Containeritem = ({name1,name2,name3,name4}) => {
  return (
    <>
     <center>
          <h1 className="Container_heading">Our Process</h1>
        </center>
      <div className="ProcessContainer">
        <div className="box"> 
            {name1}  
        </div>
        <div className="box"> 
        {name2}    
        </div>
        <div className="box"> 
        {name3}    
        </div>
        <div className="box">  
        {name4}   
        </div>
      </div>
    </>
  );
};
export default Containeritem;
