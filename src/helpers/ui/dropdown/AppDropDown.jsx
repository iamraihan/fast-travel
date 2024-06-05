import { useState } from "react";
import { Dropdown, Menu } from "antd";
import { Check, ChevronDown } from "react-feather";

const AppDropDown = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(
    items[0].label.props.children
  );

  const handleMenuClick = (e) => {
    const item = items.find((item) => item.key === e.key);
    setSelectedItem(item.label.props.children);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {items.map((item) => (
        <Menu.Item key={item.key}>
          <div
            className={`flex gap-2 items-center ${
              item.label.props.children === selectedItem
                ? "text-red"
                : "text-black"
            }`}
          >
            {item.label}
            {item.label.props.children === selectedItem && (
              <span>
                <Check width={14} height={14} />
              </span>
            )}
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="flex">
      <Dropdown overlay={menu} trigger={["click"]}>
        <p
          className={`flex gap-2 items-center font-medium text-sm hover:bg-[#7a7a7a1a] py-1 px-2 rounded-md`}
          onClick={(e) => e.preventDefault()}
        >
          {selectedItem} <ChevronDown height={14} width={14} />
        </p>
      </Dropdown>
    </div>
  );
};

export default AppDropDown;
