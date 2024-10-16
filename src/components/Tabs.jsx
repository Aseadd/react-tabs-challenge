import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { fetchTabs } from "../feature/tabSlice";
import Tab from "./Tab";

const Tabs = () => {
  const dispatch = useDispatch();
  const tabContents = useAppSelector((state) => state.tab.tabs);

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    dispatch(fetchTabs());
  }, [activeTab, dispatch]);

  const tabs = [
    {
      id: 1,
      tabTitle: "Tab 1",
      title: "Title 1",
      content: tabContents,
    },
    {
      id: 2,
      tabTitle: "Tab 2",
      title: "Title 2",
      content: tabContents,
    },
    {
      id: 3,
      tabTitle: "Tab 3",
      title: "Title 3",
      content: tabContents,
    },
    {
      id: 4,
      tabTitle: "Tab 4",
      title: "Title 4",
      content: tabContents,
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`  ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            
            {tab.title}
          </li>
        ))}
      </ul>
      <Tab content={tabs[activeTab]} />
    </div>
  );
};

export default Tabs;
