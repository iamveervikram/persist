import React from "react";
import Headers from "./Headers";
import "./Home.css";
import AddText from "./AddText";
import TextBox from "./TextBox";

function Home() {
  return (
    <div className="main">
      <Headers />
      <div style={{ width: "900px", maxWidth: "100%", margin: "auto" }}>
        <AddText />
      </div>
      <div style={{ width: "900px", maxWidth: "100%", margin: "auto" }}>
        <TextBox />
      </div>
      <p style={{backgroundColor:'blue',padding:'1rem',color:'white'}}>You can write any content and you can edit,delete and publish also</p>
    </div>
  );
}

export default Home;
