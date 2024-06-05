import { useState, useEffect } from "react";

const AppTabs = ({
  callback,
  isInitialLoading,
  tabData = [],
  variant = "primary",
}) => {
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
      <div className={`inline-flex ${variant === "primary" ? "" : "gap-2"}`}>
        {tabData.map((tab, index) =>
          variant === "primary" ? (
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
                } flex items-center gap-1 text-xs lg:text-base`}
              >
                {tab.label}
              </span>
            </button>
          ) : (
            <button
              type="button"
              key={tab.id}
              className={`  ${
                index === activeTab ? "text-red " : " text-dark"
              } rounded-md`}
              onClick={() => tab.content && handleActiveTab(index, tab)}
            >
              <span
                className={` rounded-3xl px-4 py-2 cursor-pointer bg-gray ${
                  index === activeTab ? "border border-red" : ""
                } flex items-center text-xs `}
              >
                {tab.label}
              </span>
            </button>
          )
        )}
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
