import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" rounded-lg  m-2 mt-12">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <div className="flex items-center">
              <p className="text-text font-bold text-2xl">Focus</p>
              <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-2xl">
                Grid.
              </p>
            </div>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="">
              <Link
                href="/privacy-policy"
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="hover:underline me-4 md:me-6"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-secondaryContainer sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.nathanschroeder.dev/"
            className="hover:underline"
          >
            FocusGrid™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
