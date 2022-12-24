import styles from "../style";
import { airbnb, binance, coinbase } from "../assets";
import Brightness1Icon from "@mui/icons-material/Brightness1";

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col py-4 h-fit`}>
      <div className=" w-full max-h-full m-0 p-0 bg-cover  bg-[url('https://media.istockphoto.com/id/1400711760/photo/abstract-graphic-wave-background.jpg?b=1&s=170667a&w=0&k=20&c=-g9GxywxKP1qHt2IF5rOwcf6od-RuWBeX3P56R9mgdQ=')]">
        <div className="bg-[#0005154d] w-[100%] md:w-[50%] mx-auto h-screen shadow-2xl text-white">
          <div className="flex flex-col pt-8 md:pt-10">
            <h1 className=" relative text-5xl font-poppins  font-bold text-center mb-4  ss:text-[72px] text-[32] text-white ss:leading-[100px] leading-[70px]">
              It's Our Business <br /> To Grow Yours{" "}
              <Brightness1Icon className="absolute bottom-5 ml-1 text-ora" />
            </h1>
            <span className="font-poppins font-semibold text-[#797a84] text-sm text-center leading-[25.8px] p-2 mb-2">
              Get the B2B data and the software you need to connect and close
              your most <br />
              valuable buyers - all in one operating system.
            </span>
            <div className="w-[90%] md:w-[70%] h-fit md:h-13 mx-auto bg-none  md:bg-[#191f35] flex flex-col gap-4 md:flex-row items-center justify-between p-1 rounded-full">
              <input
                type="text"
                placeholder="Business Email"
                className="flex-1 rounded-full h[40px] md:h-[40px] p-4 w-full outline-ora text-black"
              />
              <button className=" ml-4 sm:m-0 bg-ora py-2 md:py-3 px-6 text-sm font-semibold rounded-full">
                Free trial
              </button>
            </div>
            <p className="text-center  text-xm text-[#686973] px-4 mt-2 md:mt-4">
              By submitting this form, you are agreeing to zoominfo's privacy
              policy and Terms of service. <br />
              you are also agreeing to receive information and offers relevant
              to zoominfo's ser
            </p>
          </div>
          <div className="flex flex-col h-fit py-10 md:pt-20">
            <p className=" font-poppins font-semibold text-center text-[#959699] tracking-wider">
              TRUSTED BY 30,000 BUSINESS
            </p>
            <div className="flex items-center gap-14 justify-center  mt-4">
              <img src={airbnb} alt="airbnb" width="100" height="100"  />
              <img src={binance} alt="airbnb" width="100" height="100" />
              <img src={coinbase} alt="airbnb" width="100" height="100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
