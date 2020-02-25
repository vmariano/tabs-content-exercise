import React, {useState} from "react";
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
    const [currentContent, setContent] = useState(props.tabs[props.selected].content);
    return (
        <div className="box">
            <div className="tabs">
                {props.tabs.map((number, index) => {
                    return (
                        <div className="tab">Tab {index}</div>
                    )
                })}
            </div>
            <div>{currentContent}</div>
        </div>
    );
}