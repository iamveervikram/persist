import React, { useState } from "react";
import "./Home.css";
import { HiPencil } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { textActions } from "../store/text-slice";
import TextBox from "./TextBox";

function AddText() {
  const [hovered, setHovered] = useState(-1);
  const dispatch = useDispatch();

  function mouseEnterHandler(hovId) {
    setHovered(hovId);
  }

  function mouseLeaveHandler() {
    setHovered(-1);
  }
  function deleteHandler(id) {
    dispatch(textActions.removeItemFromBox(id));
  }
  const boxContent = useSelector((state) => state.tex.boxContent);
  function editHandler(id, textContent, fSize, fWidth, fStyle) {
    dispatch(
      textActions.showTextBoxHandler({
        id,
        showTextBox: true,
        textContent,
        fSize,
        fWidth,
        fStyle,
      })
    );
  }
  return (
    <div>
      {boxContent.length !== 0 &&
        boxContent.map((data) => {
          return (
            <div
              onMouseEnter={()=>mouseEnterHandler(data.id)}
              onMouseLeave={mouseLeaveHandler}
              className="contentItem"
            >
              {hovered===data.id && !data.showTextBox && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "0.5rem",
                    marginLeft: "0.5rem",
                    position: "absolute",
                    left:0
                  }}
                >
                  <button
                    onClick={() =>
                      editHandler(
                        data.id,
                        data.textContent,
                        data.fSize,
                        data.fWidth,
                        data.fStyle
                      )
                    }
                    className="icons"
                    style={{ marginRight: "1rem" }}
                  >
                    <HiPencil size={20} />
                  </button>
                  <button
                    onClick={() => deleteHandler(data.id)}
                    className="icons"
                  >
                    <AiFillDelete size={20} />
                  </button>
                </div>
              )}
              {!data.showTextBox && (
                <p
                  style={{
                    fontSize: `${data.fSize}px`,
                    fontWeight: data.fWidth,
                    fontStyle: data.fStyle,
                    color: "black",
                    textAlign: "left",
                    whiteSpace: "pre-line",
                  }}
                >
                  {data.textContent}
                </p>
              )}
              {data.showTextBox && (
                <TextBox
                  showTextBox={data.showTextBox}
                  id={data.id}
                  textContent={data.textContent}
                  fSize={data.fSize}
                  fWidth={data.fWidth}
                  fStyle={data.fStyle}
                />
              )}
            </div>
          );
        })}
    </div>
  );
}

export default AddText;
