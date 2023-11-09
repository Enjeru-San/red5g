// eslint-disable-next-line react/prop-types
const Navfilter = ({ filters, handleFilterChange }) => {
  // eslint-disable-next-line react/prop-types
  let { typeid, numid, numdes } = filters;
  const borrar = () => {
    handleFilterChange({ target: { name: "typeid", value: "" } });
    handleFilterChange({ target: { name: "numid", value: "" } });
    handleFilterChange({ target: { name: "numdes", value: "" } });
  };
  return (
    <div
      className="relative flex flex-row justify-center items-center w-full py-4 gap-4 h-[88px]"
      style={{ background: "FAFAFA" }}
    >
      {!typeid && !numid && !numdes ? (
        ""
      ) : (
        <button
          className="absolute top-8 left-20 bg-red-600 rounded-full text-center font-sans font-bold text-white w-6 h-6 me-2 duration-500"
          onClick={() => borrar()}
        >
          X
        </button>
      )}
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pe-4 pointer-events-none">
          <i className="text-2xl text-red-600 fa-solid fa-chevron-down"></i>
        </div>
        <select
          id="typeid"
          name="typeid"
          className="block rounded-md h-[56px] px-4 pt-4 w-[176px] font-sans text-base text-black bg-white border-[1px] border-gray-300
             appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=" "
          value={typeid}
          onChange={handleFilterChange}
        >
          <option value=""></option>
          <option value="Tarjeta de id.">Tarjeta de id.</option>
          <option value="Cédula">C&eacute;dula</option>
        </select>
        <label
          htmlFor="typeid"
          className="absolute text-lg text-gray-300
             duration-300 font-sans transform -translate-y-2 scale-150 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
        >
          Tipo doc.
        </label>
      </div>
      <div className="relative">
        <input
          type="text"
          id="numid"
          name="numid"
          className="block rounded-md h-[56px] px-4 pt-4 w-[272px] font-sans text-base text-black bg-white border-[1px] border-gray-300
             appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=" "
          value={numid}
          onChange={handleFilterChange}
        />
        <label
          htmlFor="numid"
          className="absolute text-lg text-gray-300
             duration-300 font-sans transform -translate-y-2 scale-150 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
        >
          N&uacute;mero de documento
        </label>
      </div>
      <div className="relative">
        <input
          type="text"
          id="numdes"
          name="numdes"
          className="block rounded-md h-[56px] px-4 pt-4 w-[272px] font-sans text-base text-black bg-white border-[1px] border-gray-300
             appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=" "
          value={numdes}
          onChange={handleFilterChange}
        />
        <label
          htmlFor="numdes"
          className="absolute text-lg text-gray-300
             duration-300 font-sans transform -translate-y-2 scale-150 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
        >
          N&uacute;mero de desembolso
        </label>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pe-4 pointer-events-none">
          <i className="text-2xl text-red-600 fa-regular fa-calendar-days"></i>
        </div>
        <input
          type="text"
          id="start"
          className="block rounded-md h-[56px] px-4 pt-4 w-[176px] font-sans text-base text-black bg-white border-[1px] border-gray-300
             appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=" "
        />
        <label
          htmlFor="start"
          className="absolute text-lg text-gray-300
             duration-300 font-sans transform -translate-y-2 scale-150 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
        >
          Desde
        </label>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pe-4 pointer-events-none">
          <i className="text-2xl text-red-600 fa-regular fa-calendar-days"></i>
        </div>
        <input
          type="text"
          id="end"
          className="block rounded-md h-[56px] px-4 pt-4 w-[176px] font-sans text-base text-black bg-white border-[1px] border-gray-300
             appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=" "
        />
        <label
          htmlFor="end"
          className="absolute text-lg text-gray-300
             duration-300 font-sans transform -translate-y-2 scale-150 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
        >
          Hasta
        </label>
      </div>
    </div>
  );
};

export default Navfilter;
