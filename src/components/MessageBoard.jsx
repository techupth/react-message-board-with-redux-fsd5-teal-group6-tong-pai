import { useSelector, useDispatch } from "react-redux";
import { addText, deleteText } from "../slices/messageBoardSlice";
function MessageBoard() {
  const text = useSelector((state) => {
    return state.textSlice;
  });
  const dispatch = useDispatch();
  const handleDelete = (index) => {
    dispatch(deleteText(index));
  };
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.target[0].value ? dispatch(addText(e.target[0].value)) : null;
            e.target[0].value = "";
          }}
        >
          <label>
            <input
              id="message-text"
              name="message-text"
              type="text"
              placeholder="Enter message here"
            />
          </label>
          <button className="submit-message-button">Submit</button>
        </form>
      </div>
      <div class="board">
        {text.map((item, index) => {
          return (
            <div key={index} className="message">
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
