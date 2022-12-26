import React from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { layout } from "../style";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";
import DynamicFormTwoToneIcon from "@mui/icons-material/DynamicFormTwoTone";
import MouseTwoToneIcon from "@mui/icons-material/MouseTwoTone";
import CompressTwoToneIcon from "@mui/icons-material/CompressTwoTone";

const Resources = () => {
  return (
    <section className={`${layout.section} bg-white`}>
      <div className="w-full   items-center flex-col">
        <div className=" mb-40  md:w-[75%] mx-auto px-4">
          <h1 className=" text-center font-bold text-3xl mt-2 pb-6">
            Get premium products for more <br /> profitable conversations
          </h1>
          <p className=" text-center text-sm text-gray-800 mb-8">
            Generate and analyze customer interactions across essential
            communication channels, including <br />
            your salescalls,email adn phone outreach, and Resources website.
          </p>

          <div className="grid md:grid-cols-3 gap-5 md:gap-x-5">
            <div className="shadow-md bg-white h-46 w-31 p-4">
              <div className="flex items-center">
                <GraphicEqIcon fontSize="large" color="primary" />
                <p className="font-bold text-2xl text-primary">
                  Sales<span className="text-ora font-normal ">OS</span>
                </p>
              </div>

              <p className="p-2 text-sm mb-8">
                intelligence and prospecting solutions for relentless sales
                teams determined to crush quotes
              </p>
              <span className="text-ora text-sm font-semibold p-2 ">
                Hit your number <ArrowRightAltIcon />{" "}
              </span>
            </div>
            <div className="shadow-md bg-white h-46 w-31 p-4">
              <div className="flex items-center">
                <QuestionAnswerTwoToneIcon fontSize="large" color="success" />
                <p className="font-bold text-2xl text-primary">
                  Chat<span className="text-ora font-normal ">OS</span>
                </p>
              </div>

              <p className="p-2 text-sm mb-8">
                intelligence and prospecting solutions for relentless sales
                teams determined to crush quotes
              </p>
              <span className="text-ora text-sm font-semibold p-2 ">
                Hit your number <ArrowRightAltIcon />{" "}
              </span>
            </div>
            <div className="shadow-md bg-white h-46 w-31 p-4">
              <div className="flex items-center">
                <DynamicFormTwoToneIcon fontSize="large" color="dark" />
                <p className="font-bold text-2xl text-primary">
                  Engage<span className="text-ora font-normal ">OS</span>
                </p>
              </div>

              <p className="p-2 text-sm mb-8">
                intelligence and prospecting solutions for relentless sales
                teams determined to crush quotes
              </p>
              <span className="text-ora text-sm font-semibold p-2 ">
                Hit your number <ArrowRightAltIcon />{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="h-40 bg-black w-full p-o m-0 mt-20 border-t-4  border-ora relative pb-20">
          <div className=" h-fit absolute hidden md:flex right-[2%] top-[-70%] bottom-[50%] w-full items-center justify-center px-72 text-black flex-col bg-trasnparent ">
            <h4 className="text-center text-3xl font-bold pb-4">
              Your success fuels ours.
            </h4>
            <div className="grid grid-cols-3 shadow-lg h-full py-2 px-20">
              <div className="h-[22rem] col-span-2 row-span-2  rounded-bl-2xl rounded-tl-2xl border-ora bg-gradient-to-r from-[#f54c47] via-[#e94271] to-[#cf3e97] px-8 py-2">
                <h3 className="font-poppins text-md font-bold text-white p-4">
                  "Bringing on Zoominfo has been the best decision we've made.
                </h3>
                <p className="text-sm px-4 text-dimWhite pb-8 pr-4">
                  the depth and breath of Zoominfo's database has enabled us to
                  prospect better accounts and bring in larger deals. in fact,
                  since bringing on Zoominfo the average company size we're
                  closing has grown bt 2.5x'
                </p>
                <div className="text-white pl-2 pb-8  ">
                  <CompressTwoToneIcon /> Hotel
                  <span className="text-dimWhite italic">Engine</span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 pl-4">
                  <img
                    src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="photo"
                    className="w-9 h-9 rounded-[50%] border-2 border-white border-solid "
                  />
                  <div>
                    <p className="font-semibold text-white text-xs">
                      Larry Williams
                    </p>
                    <p className="text-dimWhite text-[9px]">
                      Senior sales operation manager
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[22rem] py-10 px-4 w-full col-span-1 row-span-1 rounded-br-2xl rounded-tr-2xl bg-gradient-to-r from-white via-slate-50 to-zinc-100 flex flex-col items-center justify-between ">
                <h2 className="text-5xl font-extrabold place-self-start px-2">
                  5<span className="font-bold">x</span>
                </h2>
                <p className="text-lg px-2 font-semibold  ">
                  Increase in productivity & 3x increase in demos scheduled
                </p>
                <span className="flex text-sm pt-5 place-self-start px-2">
                  Read success story
                  <ArrowRightAltIcon />
                </span>
              </div>
            </div>
          </div>
          <div className=" flex bg-black w-full  h-screen text-black pb-10 md:pb-36">
            <div className="flex flex-col md:place-self-end bg-black items-center w-full  pt-20 md:pt-80">
              <div className="flex flex-col md:flex-row  items-center  gap-5 md:gap-5  md:w-[30%] pb-10 ">
                <div className="h-32 w-32 flex flex-col items-center justify-evenly bg-white rounded-br-full rounded-bl-full py-2  ">
                  <MouseTwoToneIcon color="secondary" className="bg-red-900" />
                  <p className="font-bold text-center">
                    {" "}
                    Best <br /> Usablity{" "}
                  </p>
                  <span className="text-center font-semibold bg-[#ffd200] text-black px-1 w-full rounded-full">
                    Summer
                  </span>
                  <p className="font-bold">2022</p>
                </div>
                <div className="h-40 w-40 flex flex-col items-center justify-evenly bg-white rounded-br-full rounded-bl-full py-2  ">
                  <MouseTwoToneIcon color="secondary" className="bg-red-900" />
                  <p className="font-bold text-center">
                    {" "}
                    Best <br />
                    Results{" "}
                  </p>
                  <span className="text-center font-semibold bg-[#f24136] text-white px-1 w-full rounded-full">
                    Midmarket
                  </span>
                  <p className="font-bold">2022</p>
                </div>
                <div className="h-32 w-32 flex flex-col items-center justify-evenly bg-white rounded-br-full rounded-bl-full py-2  ">
                  <MouseTwoToneIcon color="secondary" className="bg-red-900" />
                  <p className="font-bold text-center">
                    {" "}
                    Best <br /> EST. ROI{" "}
                  </p>
                  <span className="text-center font-semibold bg-[#5837a0] text-white px-1 w-full rounded-full">
                    Enterprise
                  </span>
                  <p className="font-bold">2022</p>
                </div>
              </div>
              <button className=" bg-ora py-2 px-6 rounded-full font-semibold text-white place-self-center ">
                Free trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
