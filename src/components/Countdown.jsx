function Countdown() {
  return (
    <>
      <div className="flex justify-center space-x-3">
        <div className="items-center space-y-2">
          <div className="flex h-16 w-16 items-center justify-center bg-[#343650] md:h-20 md:w-20">
            <p className="font-red-hat text-4xl text-[#fb6087] md:text-8xl">
              3
            </p>
          </div>
          <p className="text-center font-red-hat text-xs uppercase tracking-widest text-white md:text-sm">
            Days
          </p>
        </div>
        <div className="items-center space-y-2">
          <div className="flex h-16 w-16 items-center justify-center bg-[#343650] md:h-20 md:w-20">
            <p className="font-red-hat text-4xl text-[#fb6087] md:text-8xl">
              3
            </p>
          </div>
          <p className=" text-center font-red-hat text-xs uppercase  tracking-widest text-white md:text-sm">
            Hours
          </p>
        </div>
        <div className="items-center space-y-2">
          <div className="flex h-16 w-16 items-center justify-center bg-[#343650] md:h-20 md:w-20">
            <p className="font-red-hat text-4xl text-[#fb6087] md:text-8xl">
              3
            </p>
          </div>
          <p className="text-center font-red-hat text-xs uppercase tracking-widest text-white md:text-sm">
            Minutes
          </p>
        </div>
        <div className="items-center space-y-2">
          <div className="flex h-16 w-16 items-center justify-center bg-[#343650] md:h-20 md:w-20">
            <p className="font-red-hat text-4xl text-[#fb6087] md:text-8xl">
              3
            </p>
          </div>
          <p className="text-center font-red-hat text-xs uppercase tracking-widest text-white md:text-sm">
            Seconds
          </p>
        </div>
      </div>
      <div className="flex justify-center my-3">
        <button className="rounded-md bg-[#343650] p-2 font-red-hat text-white ring ring-[#fb6087] hover:bg-opacity-60 hover:text-[#fb6087]">
          Start
        </button>
      </div>
    </>
  );
}

export default Countdown;
