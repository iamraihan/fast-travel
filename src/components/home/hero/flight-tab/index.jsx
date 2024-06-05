import { AppDropDown, AppTab } from "@/helpers/ui";
import { ArrowRight, RefreshCcw } from "react-feather";
import OneWayTab from "./OneWayTab";
import { useGetAirlinesQuery } from "@/redux/api/apiSlice";
import { useEffect } from "react";

export default function FlightTab() {
  const { data, error, isLoading } = useGetAirlinesQuery();
  console.log("isLoading: ", isLoading);
  console.log("error: ", error);
  console.log("data: ", data);

  useEffect(() => {
    console.log(error, "error");
  }, [error]);
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
          Round-trip{" "}
        </div>
      ),
      content: <p>content 2</p>,
    },
    {
      id: 3,
      label: (
        <div className="inline-flex items-center gap-2">
          <span>
            <RefreshCcw width={14} height={14} />
          </span>
          Multi-city{" "}
        </div>
      ),
      content: <p>content 2</p>,
    },
  ];
  const handleTabClick = (tab) => {
    console.log("Tab clicked:", tab);
  };

  //   Dropdown data
  const flightCategories = [
    {
      label: <p className="flex">Any Flight</p>,
      key: "0",
    },
    {
      label: <p className="flex">Non-Stop</p>,
      key: "1",
    },
  ];
  const flightClasses = [
    {
      label: <p className="flex">Any class</p>,
      key: "0",
    },
    {
      label: <p className="flex">Economy</p>,
      key: "1",
    },
    {
      label: <p className="flex">Premium Economy</p>,
      key: "2",
    },
    {
      label: <p className="flex">Business Class</p>,
      key: "3",
    },
    {
      label: <p className="flex">First Class</p>,
      key: "4",
    },
  ];
  return (
    <div className="rounded-b-2xl rounded-tr-2xl bg-white p-6">
      <div className="flex justify-between w-full ">
        <div className="w-full">
          <AppTab
            id="oneway-tab"
            tabData={tabData}
            callback={handleTabClick}
            isInitialLoading={false}
            variant="secondary"
          />
        </div>
        <div className="flex justify-between w-full">
          <div>
            <AppDropDown items={flightCategories} />
          </div>
          <div>
            <AppDropDown items={flightCategories} />
          </div>
          <div>
            <AppDropDown items={flightClasses} />
          </div>
        </div>
      </div>
    </div>
  );
}
