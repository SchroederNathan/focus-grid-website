import Link from "next/link";
import ThemeToggler from "./ui/theme";

function NavBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="flex items-center">
              <p className="text-text font-bold text-4xl">Focus</p>
              <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-4xl">
                Grid.
              </p>
            </div>
          </Link>
        </div>
        <ThemeToggler />
      </nav>
    </header>
  );
}

export default NavBar;
