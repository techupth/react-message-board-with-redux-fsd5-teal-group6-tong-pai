import { useSelector, useDispatch } from "react-redux";
import { textChange } from "../slices/textChangeSlice";
import { addText, deleteText } from "../slices/messageBoardSlice";


function MessageBoard() {

  const inputText = useSelector((state) => {
		return state.inputText
	});


  const messageList = useSelector((state) => {
		return state.messageList
	});

  const dispatch = useDispatch();

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => dispatch(textChange(event.target.value))}
          />
        </label>
        <button className="submit-message-button" onClick={()=>dispatch(addText(inputText))}>Submit</button>
      </div>
      <div class="board">
        
        {messageList.map((item, index) => {

          return(
            <div className="message">
            <h1>{item}</h1>
            <button className="delete-button" onClick={() => dispatch(deleteText(index))}>x</button>
          </div>

          )


        })}

      </div>
    </div>
  );
}

export default MessageBoard;
