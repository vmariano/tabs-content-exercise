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
    const [tabSelected, setTabSelected] = useState(props.selected);
    return (
        <div className="box">
            <div className="tabs">
                {props.tabs.map((tableElement, index) => {
                    if (tabSelected === index) {
                        return (<div className="tab selected" onClick={() => {
                            setContent(props.tabs[index].content);
                            setTabSelected(index)
                        }}>{tableElement.title}</div>)
                    } else {
                        return (
                            <div className="tab" onClick={() => {
                                setContent(props.tabs[index].content);
                                setTabSelected(index)
                            }}>{tableElement.title}</div>
                        );
                    }
                })}
            </div>
            <div>{currentContent}</div>
        </div>
    );
}