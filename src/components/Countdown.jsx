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
      <div className="mt-3 flex items-center justify-center">
        <button className="text-[#fb6087] transition-colors duration-300 hover:text-[#F9154F] hover:duration-300 sm:text-3xl md:text-4xl lg:text-5xl">
          <SlControlPlay className="" />
          <SlControlPause className="hidden" />
          <CiStop1 className="hidden" />
          <RxReload className="hidden" />
        </button>
      </div>
      <input
        className="bg-[#191a24] px-8 w-full rounded-lg border border-[#fb6087] py-4 text-sm font-medium placeholder-[#fb6087] focus:border-[#f9154f] focus:outline-none"
        type="email"
        placeholder="hours"
      />
    </>
  );
}

export default Countdown;
