import { Select } from "antd";

const OneWayTab = () => {
  return (
    <div className="mt-5">
      <div className="p-4 ">
        <p>Leaving from</p>
        <Select
          onChange={(value) => {
            console.log("Selected value:", value);
          }}
          className="w-full flight-search border-0"
          showSearch
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Not Identified",
            },
            {
              value: "2",
              label: "Closed",
            },
            {
              value: "3",
              label: "Communicated",
            },
            {
              value: "4",
              label: "Identified",
            },
            {
              value: "5",
              label: "Resolved",
            },
            {
              value: "6",
              label: "Cancelled",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default OneWayTab;
