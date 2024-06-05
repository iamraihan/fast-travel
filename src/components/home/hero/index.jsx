import { AppTab } from "@/helpers/ui";
import { HotelIcon, RedFlightIcon } from "@/helpers/ui/customSVG";
import FlightTab from "@/components/home/hero/flight-tab/index";
import HotelTab from "@/components/home/hero/hotel-tab/index";

const Hero = () => {
  const myTabs = [
    {
      id: 1,
      label: (
        <div className="inline-flex items-center">
          <span>
            <RedFlightIcon />
          </span>
          Flights
        </div>
      ),
      content: <FlightTab />,
    },
    {
      id: 2,
      label: (
        <div className="inline-flex items-center">
          <span>
            <HotelIcon />
          </span>
          Hotels
        </div>
      ),
      content: <HotelTab />,
    },
  ];
  const handleTabClick = (tab) => {
    console.log("Tab clicked:", tab);
  };

  return (
    <section
      className="bg-cover  bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://habgs-content.s3.ap-south-1.amazonaws.com/habgs-partners-banners/default-image/default_image-8.png')`,
      }}
    >
      <div className="container mx-auto py-10">
        <div className="">
          <AppTab
            id="flight-tab"
            tabData={myTabs}
            callback={handleTabClick}
            isInitialLoading={false} // Set to true if content is loading initially
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
