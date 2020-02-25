import React from "react";
import "./TabsView.css";

type TabElement = {
    title: string;
    content: JSX.Element;
};

type Props = {
  tabs: TabElement[];
  selected: number;
}

export default function TabsView(props: Props) {
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