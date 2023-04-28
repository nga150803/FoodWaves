import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heropData } from "../utils/data";

export const HomeCotainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className=" py-2 flex-1 flex flex-col items-start justify-start gap-6">
        <div className="flex items-center gap-2 justify-center bg-yellow-100 p-4 rounded-full">
          <p className="text-base text-yellow-400 font-semibold">
            Bike Delivery
          </p>
          <div className="w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor ">
          The Fastest Delivery in{" "}
          <span className="text-buttontext text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor md:text-left wd:w-[80%] tracking-wide leading-7">
          Today's cuisine is quite diverse from Vietnamese, Western, European
          and Asian dishes that have entered the Vietnamese market. In Vietnam,
          especially in big cities with densely populated areas,Today's cuisine
          is quite diverse from Vietnamese, Western, European and Asian dishes
          that have entered the Vietnamese market. In Vietnam, especially in big
          cities with densely populated areas, restaurants, eateries and pubs
          have grown up like mushrooms to meet the needs of diners from all over
          the world.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br md:w-auto from-yellow-300 to-pink-400 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          {" "}
          Order Now
        </button>
      </div>

      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650 rounded-3xl"
          alt="hero-bg"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 gap-4 flex-wrap  lg:px-32 ">
          {heropData &&
            heropData.map((n) => (
              <div
                key={n.id}
                className=" lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className=" w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt="i1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name_product}
                </p>
                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  $<span className="text-xs text-6ed-500">{n.price}</span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
export default HomeCotainer;
