import React from "react";
import "./Home.css";

function Headers() {
  return (
    <div>
      {/* <div className='theme'>Home</div> */}

      <div className="bcgImg">
        <img src="images/background.jpeg" />
      </div>

      <div className="profileImgDiv">
        <div>
          <img className="profileImg" src="images/profile.png" />
        </div>
      </div>
    </div>
  );
}

export default Headers;
