import { AppTab } from "@/helpers/ui";
import { HotelIcon, RedFlightIcon } from "@/helpers/ui/customSVG";

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
      content: <p>Content of Tab 1</p>,
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
      content: <p>Content of Tab 2</p>,
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
        <div className=" p-6 mb-16 shadow-md rounded-b-2xl rounded-tr-2xl bg-white search-box-1">
          <div className="inline-flex items-center"></div>

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
