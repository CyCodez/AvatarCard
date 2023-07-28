import "./App.css";
import doctor from "./doctor6.jpg";

const AvatarCard = () => {
  return (
    <div className="avatardiv">
      <div
        className="subdiv"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <b>Add A New Comment</b>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img className="docImg" src={doctor} alt="doc" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <textarea className="textareadiv" placeholder="Type your message" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div className="markdiv">
                  <div class="circle">
                    <div className="tooltip">
                      ?<span className="tooltiptext">Click here for help</span>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <label for="HTML">Some HTML is okay</label>
                  </div>
                </div>
              </div>
              <button>post a comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <AvatarCard />
    </div>
  );
}

export default App;
