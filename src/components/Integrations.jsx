import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WebhookSharpIcon from "@mui/icons-material/WebhookSharp";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";
import SplitscreenSharpIcon from "@mui/icons-material/SplitscreenSharp";

const Integrations = () => {
  return (
    <section className="w-full max-h-fit md:h-screen bg-[#f5f6f8] py-6">
      <div className="w-[80%] mx-auto bg-[#f5f6f8] h-fit ">
        <div className="text-center py-6 h-fit mb-4 md:mb-10">
          <p className="font-bold">
            REV<span className="text-ora mt-2">OS</span>
          </p>
          <h1 className="font-bold text-5xl mt-2">Choose Your Platform</h1>
          <p className="text-sm font-normal text-gray-900 mt-2">
            Zoominfo RevOS is a multiplatform operating system that revunue
            learns to use <br /> to deliver business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-y-1 md:gap-y-7 md:gap-x-7  md:px-8">
          <div className="shadow-md bg-white h-40 w-31 p-4">
            <div className="flex items-center">
              <ZoomInIcon fontSize="large" color="primary" />
              <p className="font-bold text-2xl text-primary">
                Sales<span className="text-ora font-normal ">OS</span>
              </p>
            </div>

            <p className="p-2 text-sm">
              intelligence and prospecting solutions for relentless sales teams
              determined to crush quotes
            </p>
            <span className="text-ora text-sm font-semibold p-2">
              Hit your number <ArrowRightAltIcon />{" "}
            </span>
          </div>

          <div className="shadow-md bg-white h-40 w-31 p-4">
            <div className="flex items-center">
              <StorefrontSharpIcon fontSize="large" color="action" />
              <p className="font-bold text-2xl text-primary">
                Marketing<span className=" text-cyan-400 font-normal ">OS</span>
              </p>
            </div>

            <p className="p-2 text-sm">
              intelligence and prospecting solutions for relentless sales teams
              determined to crush quotes
            </p>
            <span className="text-ora text-sm font-semibold p-2">
              Accelerate your ROI <ArrowRightAltIcon />{" "}
            </span>
          </div>

          <div className="shadow-md bg-white h-40 w-31 p-4">
            <div className="flex items-center">
              <SplitscreenSharpIcon fontSize="large" color="success" />
              <p className="font-bold text-2xl text-primary">
                Talent<span className="text-orange-500 font-normal ">OS</span>
              </p>
            </div>

            <p className="p-2 text-sm">
              intelligence and prospecting solutions for relentless sales teams
              determined to crush quotes
            </p>
            <span className="text-ora text-sm font-semibold p-2">
              Reach qualified candidates <ArrowRightAltIcon />{" "}
            </span>
          </div>

          <div className="shadow-md bg-white h-40 w-31 p-4">
            <div className="flex items-center">
              <WebhookSharpIcon fontSize="large" color="secondary" />
              <p className="font-bold text-2xl text-primary">
                Operations
                <span className="text-green-300 font-normal ">OS</span>
              </p>
            </div>

            <p className="p-2 text-sm">
              intelligence and prospecting solutions for relentless sales teams
              determined to crush quotes
            </p>
            <span className="text-ora text-sm font-semibold p-2">
              Discover data as a service <ArrowRightAltIcon />{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
