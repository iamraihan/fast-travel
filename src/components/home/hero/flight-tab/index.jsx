import { AppTab } from "@/helpers/ui";
import { ArrowRight, RefreshCcw } from "react-feather";
import OneWayTab from "./OneWayTab";

export default function FlightTab() {
  const tabData = [
    {
      id: 1,
      label: (
        <div className="inline-flex items-center gap-2">
          <span>
            <ArrowRight width={14} height={14} />
          </span>
          One-way
        </div>
      ),
      content: <OneWayTab />,
    },
    {
      id: 2,
      label: (
        <div className="inline-flex items-center gap-2">
          <span>
            <RefreshCcw width={14} height={14} />
          </span>
          Hotels
        </div>
      ),
      content: <p>content 2</p>,
    },
  ];
  const handleTabClick = (tab) => {
    console.log("Tab clicked:", tab);
  };
  return (
    <div className="rounded-b-2xl rounded-tr-2xl bg-white p-6">
      <div className="flex justify-between">
        <div>
          <AppTab
            id="oneway-tab"
            tabData={tabData}
            callback={handleTabClick}
            isInitialLoading={false}
            variant="secondary"
          />
        </div>
        <div>Right</div>
      </div>
    </div>
  );
}
