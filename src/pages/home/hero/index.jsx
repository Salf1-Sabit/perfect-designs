import ConstructionImage1 from "../../../assets/images/construction-uniform-1.jpg";
import CorporateImage1 from "../../../assets/images/corporate-apparel-1.jpg";
import FashionImage1 from "../../../assets/images/fashion-uniform-1.jpg";
import FashionImage2 from "../../../assets/images/fashion-dress-1.jpg";
import HospitalImage1 from "../../../assets/images/hospital-uniform-1.jpg";
import RestaurantImage1 from "../../../assets/images/restaurant-uniform-1.jpg";
import CorporateImage2 from "../../../assets/images/corporate-uniform-2.jpg";

import Wrapper from "../../../components/ui/wrapper";

const Hero = () => {
  return (
    <Wrapper className="h-[calc(100vh-75px)] w-full flex flex-col-reverse lg:flex-row">
      <div className="h-full w-full lg:w-[75%] flex flex-col">
        <h2 className="font-oswald text-[1.6vw] w-[60%] leading-[1.2em] text-gray-500">
          <span className="relative after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:h-[6px] after:w-full after:bg-orange-logo after:z-[-1]">
            Perfect Designs
          </span>{" "}
          is your partner of choice for providing made to measure, high quality
          and picture perfect uniforms for your Ambassadors.
        </h2>

        <div className="text-[8vw] font-anton-sc">
          <h1 className="mb-[-4vw]">DIFFERENTIATING</h1>
          <h1 className="">YOUR AMBASSADORS</h1>
        </div>
      </div>

      <div className="relative w-full lg:w-[30%] flex gap-[4%]">
        <img
          className="w-[40%] absolute left-[-44%]"
          src={CorporateImage2}
          alt=""
        />

        <div className="w-[50%]">
          <img
            src={FashionImage1}
            alt="Describing fashion apparel"
            className="object-cover"
          />

          <div className="font-oswald tracking-wider">
            <div className="flex justify-between items-center border-b border-gray-200 py-[.5em]">
              <h1>01</h1>
              <h1>CORPORATE APPAREL</h1>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 py-[.5em]">
              <h1>02</h1>
              <h1>HEALTHCARE UNIFORMS</h1>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 py-[.5em]">
              <h1>03</h1>
              <h1>CONSTRUCTION UNIFORMS</h1>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 py-[.5em]">
              <h1>04</h1>
              <h1>RESTAURANT UNIFORMS</h1>
            </div>
          </div>
        </div>

        <div className="w-[50%] flex flex-col gap-[1.5%]">
          <img
            className="object-cover w-[100%]"
            src={ConstructionImage1}
            alt=""
          />
          <img className="object-cover w-[100%]" src={CorporateImage1} alt="" />
          <img className="object-cover w-[100%]" src={HospitalImage1} alt="" />
          <img
            className="object-cover w-[100%]"
            src={RestaurantImage1}
            alt=""
          />
          <img className="object-cover w-[100%]" src={FashionImage2} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
