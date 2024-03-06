import { SlControlPlay } from "react-icons/sl";
import { SlControlPause } from "react-icons/sl";
import { CiStop1 } from "react-icons/ci";
import { RxReload } from "react-icons/rx";
function Countdown() {
  return (
    <>
      <div className="flex justify-center space-x-3">
        <div className="items-center space-y-2">
          <div className="flex h-24 w-24 items-center justify-center bg-[#343650] lg:h-40 lg:w-40">
            <p className="font-red-hat text-4xl text-[#fb6087] lg:text-8xl">
              03
            </p>
          </div>
          <p className="text-center font-red-hat text-xs uppercase tracking-widest text-white lg:text-sm">
            Days
          </p>
        </div>
        <div className="items-center space-y-2">
          <div className="flex h-24 w-24 items-center justify-center bg-[#343650] lg:h-40 lg:w-40">
            <p className="font-red-hat text-4xl text-[#fb6087] lg:text-8xl">
              04
            </p>
          </div>
          <p className=" text-center font-red-hat text-xs uppercase  tracking-widest text-white lg:text-sm">
            Hours
          </p>
        </div>
        <div className="items-center space-y-2">
          <div className="flex h-24 w-24 items-center justify-center bg-[#343650] lg:h-40 lg:w-40">
            <p className="font-red-hat text-4xl text-[#fb6087] lg:text-8xl">
              05
            </p>
          </div>
          <p className="text-center font-red-hat text-xs uppercase tracking-widest text-white lg:text-sm">
            Minutes
          </p>
        </div>
        <div className="items-center space-y-2">
          <div className="flex h-24 w-24 items-center justify-center bg-[#343650] lg:h-40 lg:w-40">
            <p className="font-red-hat text-4xl text-[#fb6087] lg:text-8xl">
              06
            </p>
          </div>
          <p className="text-center font-red-hat text-xs uppercase tracking-widest text-white lg:text-sm">
            Seconds
          </p>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <input
              type="text"
              id="Days"
              className="peer border-b border-[#fb6087] bg-[#191a24] py-1 text-[#fb6087] transition-colors duration-300 hover:duration-300 focus:border-b-2 focus:border-[#F9154F] focus:outline-none"
              autoComplete="off"
            />
            <label
              htmlFor="Days"
              className="absolute left-0 top-1 cursor-text text-[#fb6087] transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F9154F]"
            >
              Days
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="Hours"
              className="peer border-b border-[#fb6087] bg-[#191a24] py-1 text-[#fb6087] transition-colors duration-300 hover:duration-300 focus:border-b-2 focus:border-[#F9154F] focus:outline-none"
              autoComplete="off"
            />
            <label
              htmlFor="Hours"
              className="absolute left-0 top-1 cursor-text text-[#fb6087] transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F9154F]"
            >
              Hours
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="Minutes"
              className="peer border-b border-[#fb6087] bg-[#191a24] py-1 text-[#fb6087] transition-colors duration-300 hover:duration-300 focus:border-b-2 focus:border-[#F9154F] focus:outline-none"
              autoComplete="off"
            />
            <label
              htmlFor="Minutes"
              className="absolute left-0 top-1 cursor-text text-[#fb6087] transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F9154F]"
            >
              Minutes
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="Seconds"
              className="peer border-b border-[#fb6087] bg-[#191a24] py-1 text-[#fb6087] transition-colors duration-300 hover:duration-300 focus:border-b-2 focus:border-[#F9154F] focus:outline-none"
              autoComplete="off"
            />
            <label
              htmlFor="Seconds"
              className="absolute left-0 top-1 cursor-text text-[#fb6087] transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F9154F]"
            >
              Seconds
            </label>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center">
        <button className="text-[#fb6087] transition-colors duration-300 hover:text-[#F9154F] hover:duration-300 sm:text-3xl md:text-4xl lg:text-5xl">
          <SlControlPlay className="" />
          <SlControlPause className="hidden" />
          <CiStop1 className="hidden" />
          <RxReload className="hidden" />
        </button>
      </div>
    </>
  );
}

export default Countdown;
