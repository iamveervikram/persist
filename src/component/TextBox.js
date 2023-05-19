import React, { useState } from "react";
import { ImBold } from "react-icons/im";
import { ImItalic } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { textActions } from "../store/text-slice";
import { v4 as uuidv4 } from "uuid";

function TextBox({ showTextBox, id, textContent, fSize, fWidth, fStyle }) {
  const [myText, setMyText] = useState("");
  const [fItalic, setFItalic] = useState("");
  const [fBold, setFBold] = useState("");
  const [fBoldCount, setFBoldCount] = useState(0);
  const [fItalicCount, setFItalicCount] = useState(0);
  const [ButtonBGC, setButtonBGC] = useState("#e5e5e5");
  const [ButtonIGC, setButtonIGC] = useState("#e5e5e5");
  const [choosed, setchoosed] = useState();
  const uniqueId = uuidv4();

  function boldHandler() {
    if (fBoldCount % 2 === 0) {
      setFBold("bold");
      setButtonBGC("#69a8ff");
    } else {
      setFBold("");
      setButtonBGC("#e5e5e5");
    }
    setFBoldCount(fBoldCount + 1);
  }

  function italicHandler() {
    if (fItalicCount % 2 === 0) {
      setFItalic("italic");
      setButtonIGC("#69a8ff");
    } else {
      setFItalic("");
      setButtonIGC("#e5e5e5");
    }
    setFItalicCount(fItalicCount + 1);
  }

  const dispatch = useDispatch();
  function clickHandler() {
    dispatch(
      textActions.addItemToBox({
        id: uniqueId,
        textContent: myText,
        fSize: choosed,
        fWidth: fBold,
        fStyle: fItalic,
        showTextBox: false,
      })
    );
  }
  function clickSaveHandler() {
    dispatch(
      textActions.showTextBoxHandler({
        id,
        showTextBox: false,
        textContent: myText,
        fSize: choosed,
        fWidth: fBold,
        fStyle: fItalic,
      })
    );
  }
  return (
    <div>
      <div className="contentDiv">
        <div className="content">
          <div style={{ margin: "2rem 0 0.2rem 0", float: "left" }}>
            <button
              style={{ backgroundColor: `${ButtonBGC}`, marginRight: "0.5rem" }}
              onClick={boldHandler}
            >
              <ImBold />
            </button>
            <button
              style={{ backgroundColor: `${ButtonIGC}`, marginRight: "0.5rem" }}
              onClick={italicHandler}
            >
              <ImItalic />
            </button>
            <div style={{ display: "inline-block" }}>
              <label style={{ marginRight: "0.5rem" }} htmlFor="fsz">
                Font Size:
              </label>
              <select
                id="fsz"
                value={choosed}
                onChange={(e) => setchoosed(Math.floor(e.target.value))}
              >
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="20">20</option>
                <option value="24">24</option>
                <option value="36">36</option>
              </select>
            </div>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <textarea
              onChange={(event) => setMyText(event.target.value)}
              placeholder="Enter your Text"
              style={{
                float: "left",
                width: "100%",
                fontSize: choosed,
                fontStyle: fItalic,
                fontWeight: fBold,
              }}
              rows="5"
            >
              {textContent}
            </textarea>
          </div>
        </div>
        <div className="addNew" style={{ display: "flex" }}>
          {showTextBox ? (
            <button
              onClick={clickSaveHandler}
              style={{ padding: "1rem", borderRadius: "10px" }}
            >
              Save
            </button>
          ) : (
            <button
              onClick={clickHandler}
              style={{ padding: "1rem", borderRadius: "10px" }}
            >
              Add New Text
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TextBox;
