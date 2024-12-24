function ChatBubble({
  text,
  imageSrc,
  time,
  name,
  ltr,
}: {
  text: string;
  imageSrc?: string;
  time: string;
  name: string;
  ltr: "sender" | "receiver";
}) {
  return (
    <div
      className={`flex items-start ${
        ltr === "sender" ? "justify-end" : "justify-start"
      } gap-2.5 w-full`}
    >
      <div
        className={`flex flex-col gap-1 ${
          ltr === "sender" ? "items-end" : "items-start"
        }`}
      >
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-text">{name}</span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {time}
          </span>
        </div>
        <div
          className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 
          ${
            ltr === "sender"
              ? "rounded-b-xl rounded-s-xl"
              : "rounded-b-xl rounded-e-xl"
          } 
          dark:bg-gray-700`}
        >
          <p className="text-sm font-normal text-text">{text}</p>
          {imageSrc && (
            // <div className="group relative my-2.5">
            //   <img src={imageSrc} className="rounded-lg" />
            // </div>
            <a
              href="#"
              className="bg-gray-50 dark:bg-gray-600 rounded-xl p-4 mb-2 mt-2 hover:bg-gray-200 dark:hover:bg-gray-500"
            >
              <img
                src={imageSrc}
                className="rounded-lg mb-2"
              />
              <span className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Focus Grid - Habit Tracker
              </span>
            </a>
          )}
        </div>
        {ltr === "sender" && (
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Read
          </span>
        )}
      </div>
    </div>
  );
}

export default ChatBubble;
