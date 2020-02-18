import React, {ReactHTMLElement} from "react";
import "./TabsView.css";

type TabElement = {
    title: string;
    content: ReactHTMLElement<any>;
};

type Props = {
  tabs: TabElement[];
  selected: 1;
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