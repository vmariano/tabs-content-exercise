import React from "react";
import "./App.css";
import TabsView from "./TabsView/TabsView";

function App() {
  return (
      <div>
        <TabsView tabs={[1,2,3]} />
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
