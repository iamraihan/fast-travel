import { Check } from "react-feather";
import Loader from "../customSVG/Loader";

// allowed button types
/*
 1. btn_primary
*/

const AppButton = ({
  Icon = Check,
  btnType = "btn_primary",
  title = "Save",
  disabled = false,
  loader = "",
  loaderText = "Loading...",
  callBack = () => {},
  customClass = "",
  options: { iconClasses = "w-5 h-5" } = {},
}) => {
  const btnContent = () => (
    <>
      <span className="text-sm font-medium">
        {loader ? (
          <div className="pt-1">
            <Loader />
          </div>
        ) : (
          <Icon className={iconClasses} />
        )}
      </span>
      <span className="pl-1 pt-[2.75px] text-14 font-medium">
        {loader ? loaderText : title}
      </span>
    </>
  );

  const btnTypes = {
    btn_primary: (
      <button
        type="button"
        className={`flex ${
          customClass || ""
        } px-[25px] justify-center items-center mb-2 text-14 font-medium rounded-[8px] h-[41px] focus:outline-none text-white disabled:bg-brand disabled:opacity-50 bg-brand hover:bg-brand-secondary`}
        onClick={callBack}
        disabled={disabled}
      >
        {btnContent()}
      </button>
    ),
  };

  return <div className="flex">{btnTypes[btnType]}</div>;
};

export default AppButton;
