import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <header className="flex flex-row justify-center items-center w-full h-[72px] shadow-[0px_3px_16px_rgba(209,232,255,0.45)]">
      <nav className="grid grid-cols-12 place-items-center items-center w-full">
        <div className="col-span-2"></div>
        <img
          src={Logo}
          alt="Sufi"
          className="h-6 w-auto col-span-8 place-items-center"
        />
        <Link
          to="/login"
          className="text-xl font-sans font-bold col-span-2 text-right"
        >
          Cerrar sesi&oacute;n
          <i className="fa-solid fa-arrow-right-from-bracket ms-3" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
