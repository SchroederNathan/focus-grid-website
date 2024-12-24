import React from "react";
import Grid from "./ui/grid";

function Bento() {
  return (
    <div className=" grid gap-4  lg:grid-cols-3 lg:grid-rows-2">
      <div className="relative lg:row-span-2">
        <div className="absolute inset-px rounded-lg bg-containerBackground lg:rounded-l-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
          <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
            <p className="mt-2 text-2xl font-medium tracking-tight text-text max-lg:text-center">
              Habit Tracking
            </p>
            <p className="mt-2  max-w-lg max-lg:mx-auto text-md/6 text-gray-400 max-lg:text-center">
              Create, customize, and complete your habits with ease. Set up
              personalized habits that align with your goals and track your
              progress as you build lasting routines.
            </p>
          </div>
          <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
            <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
              <img
                className="size-full object-cover object-top"
                src="images/device-add.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
      </div>
      <div className="relative max-lg:row-start-1">
        <div className="absolute inset-px rounded-lg bg-containerBackground max-lg:rounded-t-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-2 text-xl font-medium tracking-tight text-text max-lg:text-center">
              Daily Logging
            </p>
            <p className="mt-2 max-w-lg max-lg:mx-auto text-md/6 text-gray-400 max-lg:text-center">
              Effortlessly track your daily habits with our simple tracking
              system. Mark habits as complete to start streaks
            </p>
          </div>
          <div className="w-full lg:mt-8 px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
            <Grid />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
      </div>
      <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
        <div className="absolute inset-px rounded-lg bg-containerBackground"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-2 text-xl font-medium tracking-tight text-text max-lg:text-center">
              Security
            </p>
            <p className="mt-2 max-w-lg max-lg:mx-auto text-md/6 text-gray-400 max-lg:text-center">
              Your habit data stays private on your device and restores
              seamlessly from backups, ensuring secure and reliable tracking.
            </p>
          </div>
          <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
            <img
              className="h-[min(152px,40cqw)] object-cover"
              src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
              alt=""
            />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
      </div>
      <div className="relative lg:row-span-2">
        <div className="absolute inset-px rounded-lg bg-containerBackground max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
          <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
            <p className="mt-2 text-xl font-medium tracking-tight text-text max-lg:text-center">
              Daily Reminders
            </p>
            <p className="mt-2 max-w-lg max-lg:mx-auto text-md/6 text-gray-400 max-lg:text-center">
              Stay on track with notifications. Get gentle reminders throughout
              the day to help you maintain your habits and achieve your goals.
            </p>
          </div>
          <div className="relative min-h-[20rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
            <div className="absolute inset-x-12  bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
              <img
                className="size-full object-cover object-top"
                src="images/device-notification.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
      </div>
    </div>
  );
}

export default Bento;
