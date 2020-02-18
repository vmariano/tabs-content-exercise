import React from "react";
import "./App.css";

function App() {
  return (
      <div>
        <div className="box">
          <div className="tabs">
            <div className="tab selected">Tab 1</div>
            <div className="tab">Tab 2</div>
            <div className="tab">Tab 3</div>
          </div>
          <div>Content</div>
        </div>

        <div className="box">
          <div className="tabs">
            <div className="tab selected">Tab 4</div>
            <div className="tab">Tab 5</div>
            <div className="tab">Tab 6</div>
          </div>
          <div>Content</div>
        </div>
      </div>
  );
}

export default App;
