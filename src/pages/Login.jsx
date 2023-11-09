import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { useState } from "react";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";

const Login = () => {
  const [user, setUser] = useState("");
  const [psw, setPsw] = useState("");
  const [validation, setValidation] = useState(true);
  const navigate = useNavigate();
  const login = () => {
    if (user === "red5g@email.com" && psw === "12345678") {
      setValidation(true);
      navigate("/");
    } else {
      setValidation(false);
    }
  };
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-screen overflow-hidden">
      <div
        className="absolute h-1/2 w-auto -left-[70px] -bottom-2 animate__animated animate__fadeInLeft animate__fast"
        style={{ animationDelay: "0.5s" }}
      >
        <img src={img1} alt="img1" className="" />
      </div>
      <div
        className="absolute bottom-44 right-96 animate__animated animate__fadeInLeft animate__fast"
        style={{ animationDelay: "0.5s" }}
      >
        <img src={img3} alt="img3" />
      </div>
      <div
        className="absolute bottom-24 right-[390px] animate__animated animate__fadeInLeft animate__fast"
        style={{ animationDelay: "0.5s" }}
      >
        <img src={img4} alt="img4" />
      </div>
      <div
        className="absolute h-1/2 w-auto -right-56 -top-48 animate__animated animate__fadeInRight animate__fast"
        style={{ animationDelay: "0.5s" }}
      >
        <img src={img2} alt="img2" />
      </div>
      <div
        className="absolute top-80 left-[350px] animate__animated animate__fadeInRight animate__fast"
        style={{ animationDelay: "0.5s" }}
      >
        <img src={img3} alt="img3" />
      </div>
      <div
        className="absolute top-56 left-[400px] animate__animated animate__fadeInRight animate__fast"
        style={{ animationDelay: "0.5s" }}
      >
        <img src={img4} alt="img4" />
      </div>

      <div className="mb-8 animate__animated animate__fadeInDown animate__fast">
        <img src={Logo} alt="Sufi" className="w-[16.5rem] h-auto mb-3" />
        <h1 className="text-center font-bold text-[1.7rem] font-sans">
          Sufiplay
        </h1>
        <p className="text-center font-sans text-[0.7rem]">
          Administrador comercial
        </p>
      </div>
      <div className="flex flex-col justify-center items-center animate__animated animate__fadeInUp animate__fast">
        <div className="flex flex-col justify-evenly items-center w-[400px] h-[156px] shadow-[0px_0px_16px_rgba(0,0,0,0.16)] rounded-xl mb-8">
          <div className="relative">
            <input
              type="text"
              id="user"
              className={`block rounded-md h-[56px] px-4 pt-4 w-[368px] font-sans text-base text-black bg-white border-[1px] ${
                !validation ? "border-red-600" : "border-gray-300"
              } appearance-none focus:outline-none focus:ring-0 peer`}
              placeholder=" "
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <label
              htmlFor="user"
              className={`absolute text-lg ${
                !validation ? "text-red-600" : "text-gray-300"
              } duration-300 font-sans transform -translate-y-2 scale-150 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Usuario
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="psw"
              className={`block rounded-md h-[56px] px-4 pt-4 w-[368px] font-sans text-base text-black bg-white border-[1px] ${
                !validation ? "border-red-600" : "border-gray-300"
              } appearance-none focus:outline-none focus:ring-0 peer`}
              placeholder=" "
              value={psw}
              onChange={(e) => setPsw(e.target.value)}
              required
            />
            <label
              htmlFor="psw"
              className={`absolute text-lg ${
                !validation ? "text-red-600" : "text-gray-300"
              } duration-300 font-sans transform -translate-y-2 scale-150 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Contraseña
            </label>
          </div>
        </div>
        <button
          className="h-12 w-[174px] bg-red-600 rounded-full text-white font-bold font-sans text-base mb-6"
          onClick={() => login()}
          type="submit"
        >
          INGRESAR
        </button>
        <Link to="/login" className="text-[12px] underline">
          No recuerdo mi contraseña
        </Link>
      </div>
    </div>
  );
};

export default Login;
