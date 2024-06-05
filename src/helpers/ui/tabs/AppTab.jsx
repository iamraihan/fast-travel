import { useState, useEffect } from "react";

const AppTabs = ({ callback, isInitialLoading, tabData = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setActiveTab(0);
  }, []);

  const handleActiveTab = (index, tab) => {
    setActiveTab(index);
    if (callback) callback(tab);
  };

  return (
    <>
      <div className="">
        <div className=" flex flex-wrap text-center">
          {tabData.map((tab, index) => (
            <button
              type="button"
              key={tab.id}
              className={`  ${
                index === activeTab ? "text-dark " : " text-white"
              } rounded-md`}
              onClick={() => tab.content && handleActiveTab(index, tab)}
            >
              <span
                className={`px-4 py-3 lg:py-4 text-dark cursor-pointer ${
                  index === activeTab ? " bg-white" : "bg-neutral/20"
                } flex items-center text-xs lg:text-base`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div>
        {
          !isInitialLoading ? tabData[activeTab].content : ""
          //   <AppNothingToShow loading={isInitialLoading} />
        }
      </div>
    </>
  );
};

export default AppTabs;
