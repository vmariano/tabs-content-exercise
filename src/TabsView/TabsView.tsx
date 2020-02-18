import React from "react";
import "./TabsView.css";

export default function TabsView() {
    return (
        <div className="box">
            <div className="tabs">
                <div className="tab selected">Tab 1</div>
                <div className="tab">Tab 2</div>
                <div className="tab">Tab 3</div>
            </div>
            <div>Content</div>
        </div>
    );
}