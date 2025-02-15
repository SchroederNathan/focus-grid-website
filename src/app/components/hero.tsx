import Image from "next/image";

function Hero() {
  return (
    <div className="max-lg:mx-auto max-w-5xl max-lg:py-24 py-32 mx-auto">
      <div className="flex max-lg:flex-col items-center justify-center max-lg:gap-12 gap-24">
        <div>
          <div className="hidden sm:mb-8 sm:flex max-lg:justify-center justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-400/10 hover:ring-gray-400/20">
              See our newest features.{" "}
              <a href="#" className="font-semibold text-primary">
                <span aria-hidden="true" className="absolute inset-0" />
                Click here <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="max-lg:text-center">
            <h1 className="text-balance text-6xl font-semibold tracking-tight text-text sm:text-7xl">
              Build better habits, one day at a time.
            </h1>
            <p className="mt-8 text-pretty text-xl font-medium text-gray-500 sm:text-2xl/8">
              Small steps lead to big changes. Track your habits daily, stay
              consistent, and watch your progress unfold over time.
            </p>
            <div className="mt-10 flex max-lg:justify-center gap-x-6">
              <a href="https://apps.apple.com/us/app/focus-grid-habit-tracker/id6741008684" className="">
                <Image
                  src="/images/appstore.svg"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="h-10"
                />
              </a>
              <a href="#" className="opacity-20 cursor-not-allowed  flex-col">
                <Image
                  src="/images/googleplay.png"
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="h-10"
                />
                <p className="text-text mt-2 font-semibold">Coming Soon</p>
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] mt-3">
          <div className="h-[32px] w-[3px]bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] dark:bg-gray-800">
            <Image
              src="/images/device-home.jpeg"
              className="block"
              alt="Device home - iOS"
              width={272}
              height={572}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
