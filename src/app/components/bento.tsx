import React from "react";
import Grid from "./ui/grid";
import ChatBubble from "./ui/chat";

function Bento() {
  return (
    <div className=" grid gap-4  xl:grid-cols-3 xl:grid-rows-2">
      <div className="relative xl:row-span-2">
        <div className="absolute inset-px rounded-lg bg-containerBackground xl:rounded-l-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] xl:rounded-l-[calc(2rem+1px)]">
          <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10 text-center">
            <p className="mt-2 text-2xl font-medium tracking-tight text-text">
              Habit Tracking
            </p>
            <p className="mt-2 max-w-lg mx-auto text-md/6 text-gray-400">
              Create, customize, and complete your habits with ease. Set up
              personalized habits that align with your goals and track your
              progress as you build lasting routines.
            </p>
          </div>
          <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-xl:mx-auto max-xl:max-w-sm">
            <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
              <img
                className="size-full object-cover object-top"
                src="images/device-add.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 xl:rounded-l-[2rem]"></div>
      </div>
      <div className="relative max-xl:row-start-1">
        <div className="absolute inset-px rounded-lg bg-containerBackground max-xl:rounded-t-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-xl:rounded-t-[calc(2rem+1px)]">
          <div className="px-8 pt-8 sm:px-10 sm:pt-10 text-center">
            <p className="mt-2 text-xl font-medium tracking-tight text-text">
              Daily Logging
            </p>
            <p className="mt-2 max-w-lg mx-auto text-md/6 text-gray-400">
              Effortlessly track your daily habits with our simple tracking
              system. Mark habits as complete to start streaks
            </p>
          </div>
          <div className="flex items-center justify-center w-full h-full xl:mt-8 px-8 max-xl:pb-12 max-xl:pt-10 sm:px-10 xl:pb-2">
            <div className="w-full">
              <Grid />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-xl:rounded-t-[2rem]"></div>
      </div>
      <div className="relative max-xl:row-start-3 xl:col-start-2 xl:row-start-2 ">
        <div className="absolute inset-px rounded-lg bg-containerBackground"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
          <div className="px-8 pt-8 sm:px-10 sm:pt-10 text-center">
            <p className="mt-2 text-xl font-medium tracking-tight text-text">
              Security
            </p>
            <p className="mt-2 max-w-lg mx-auto text-md/6 text-gray-400">
              Your habit data stays private on your device and restores
              seamlessly from backups, ensuring secure and reliable tracking.
            </p>
          </div>
          <div className="flex items-center justify-center w-full h-full xl:mt-8 px-8 max-xl:pb-12 max-xl:pt-10 sm:px-10 pb-12">
            <div className="w-full  max-w-lg">
              <ChatBubble
                name="Bonnie Green"
                text="I'm working from home today! 😅"
                imageSrc="images/"
                time="11:46"
                ltr="sender"
              />
              <ChatBubble
                name="Nathan Schroeder"
                text="That's awesome! 👏👏"
                time="11:52"
                ltr="receiver"
              />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
      </div>
      <div className="relative xl:row-span-2">
        <div className="absolute inset-px rounded-lg bg-containerBackground max-xl:rounded-b-[2rem] xl:rounded-r-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-xl:rounded-b-[calc(2rem+1px)] xl:rounded-r-[calc(2rem+1px)]">
          <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10 text-center">
            <p className="mt-2 text-xl font-medium tracking-tight text-text">
              Daily Reminders
            </p>
            <p className="mt-2 max-w-lg mx-auto text-md/6 text-gray-400">
              Stay on track with notifications. Get gentle reminders throughout
              the day to help you maintain your habits and achieve your goals.
            </p>
          </div>
          <div className="relative min-h-[20rem] w-full grow [container-type:inline-size] max-xl:mx-auto max-xl:max-w-sm">
            <div className="absolute inset-x-12  bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
              <img
                className="size-full object-cover object-top"
                src="images/device-notification.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-xl:rounded-b-[2rem] xl:rounded-r-[2rem]"></div>
      </div>
    </div>
  );
}

export default Bento;
