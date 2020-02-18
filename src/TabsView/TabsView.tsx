import React from "react";
import "./TabsView.css";

export default function TabsView(props: { tabs: number[] }) {
    return (
        <div className="box">
            <div className="tabs">
                {props.tabs.map((number, index) => {
                    return (
                        <div className="tab">Tab {index}</div>
                    )
                })}
            </div>
            <div>Content</div>
        </div>
    );
}