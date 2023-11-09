import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Table = ({ data }) => {
  const datos = [...data];
  const [pagActual, setPagActual] = useState(1);
  const [regPorPagina, setRegPorPagina] = useState(5);

  const iLastRegistro = pagActual * regPorPagina;
  const iFirstRegistro = iLastRegistro - regPorPagina;
  const datosActuales = datos.slice(iFirstRegistro, iLastRegistro);

  const aumentar = () => {
    if (pagActual < Math.ceil(datos.length / regPorPagina)) {
      setPagActual(pagActual + 1);
    }
  };

  const disminuir = () => {
    if (pagActual > 1) {
      setPagActual(pagActual - 1);
    }
  };

  const rowdat = datosActuales.map((dato, index) => (
    <tr
      className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"} text-black`}
      key={index}
    >
      <td className="px-6 py-4">
        {dato.start} {dato.hora}
      </td>
      <td className="px-6 py-4">{dato.numdes}</td>
      <td className="px-6 py-4">{dato.typeid}</td>
      <td className="px-6 py-4">{dato.numid}</td>
      <td className="px-6 py-4">${dato.mount}</td>
    </tr>
  ));

  return (
    <>
      <div className="relative overflow-x-auto h-[370px] mb-20">
        <table className="w-full text-sm text-left font-sans text-black">
          <thead
            className="font-bold sticky top-0"
            style={{ backgroundColor: "#F1F6FB" }}
          >
            <tr>
              <th scope="col" className="px-6 py-3">
                Fecha y hora
              </th>
              <th scope="col" className="px-6 py-3">
                N&uacute;mero de desembolso
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo de documento
              </th>
              <th scope="col" className="px-6 py-3">
                N&uacute;mero de documento
              </th>
              <th scope="col" className="px-6 py-3">
                Monto
              </th>
            </tr>
          </thead>
          <tbody>{rowdat}</tbody>
        </table>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-evenly items-center fixed bottom-0 h-20 w-[508px] bg-white rounded-t-3xl z-0 shadow-[0px_3px_16px_rgba(170,170,170,0.3)]">
          <div>
            <button onClick={disminuir}>
              <i className="ms-6 text-2xl text-red-600 fa-solid fa-chevron-left"></i>
            </button>
            <input
              type="text"
              className="rounded-md h-12 w-12 text-center pt-0 ms-4 me-2 font-sans text-base text-black bg-white border-[1px] border-gray-300
             appearance-none focus:outline-none focus:ring-0 peer"
              value={pagActual}
              onChange={(e) => setPagActual(parseInt(e.target.value))}
            />
            <span>de {Math.ceil(datos.length / regPorPagina)}</span>
            <button onClick={aumentar}>
              <i className="text-2xl text-red-600 ms-4 fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pe-4 pointer-events-none">
              <i className="text-2xl text-red-600 fa-solid fa-chevron-down"></i>
            </div>
            <select
              id="typeid"
              className="block rounded-md h-[56px] px-4 pt-4 w-[268px] font-sans text-base text-black bg-white border-[1px] border-gray-300
             appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              value={regPorPagina}
              onChange={(e) => setRegPorPagina(parseInt(e.target.value))}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            <label
              htmlFor="typeid"
              className="absolute text-lg text-gray-300
             duration-300 font-sans transform -translate-y-2 scale-150 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
            >
              Registros por p&aacute;gina
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

/* Dios, antes habia hecho paginacion pero sencilla, ya esta me dio trabajo jahsdjhahsda, por cierto no he podido hacer lo del filtro desde y hasta:c no encontre una forma de hacerlo pues reutilice el hook de filtros que hice cuando estaba trabajando de paracticas con react y eso y pues es con el que me siento familiarizado y no supe como implementar esos filtros:c lo siento en esa parte. */

export default Table;
