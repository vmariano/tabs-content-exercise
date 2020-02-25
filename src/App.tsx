import React from "react";
import "./App.css";
import TabsView from "./TabsView/TabsView";

function App() {
  return (
      <div>
        <TabsView selected={0}
                  tabs={[
                      {title: "Tab 1", content:<div>a simple div</div>},
                      {title: "Tab 2", content:<div>a more complex div</div>},
                      {title: "Tab 3, title", content:<div><img src="https://lh3.googleusercontent.com/proxy/pJnP-TmyUXYHDRzrlo2SjY7-e11IhusDrgWqsGQcVIB9phgbuWlHzvQPFQNi0bf2vxRnlZwyoADghp-uqxTGyn1D7e_pDViVc_ovAFD4RCQ35SKHTY6lcnvezY3ZgtMdnVVA8hw"/></div>},
                  ]}

        />
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
