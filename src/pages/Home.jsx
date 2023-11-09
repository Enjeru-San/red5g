import data from "../assets/data.json";
import Navfilter from "../components/Navfilter";
import useFilter from "../hooks/useFilter";
import Table from "../components/Table";

const Home = () => {
  let { filters, handleFilterChange, setterFilters } = useFilter();
  let results = setterFilters(data);
  return (
    <div>
      <div className="grid grid-cols-4 place-items-center py-5 overflow-x-hidden">
        <span className="font-sans text-2xl font-bold col-start-1 col-span-1">
          Mis desembolsos
        </span>
        <button className="bg-red-600 text-white rounded-full font-sans font-bold h-12 py-[14px] pe-6 col-start-4 col-span-1">
          <i className="fa-solid fa-download px-3"></i>Descargar
        </button>
      </div>
      <Navfilter filters={filters} handleFilterChange={handleFilterChange} />
      <Table data={results} />
    </div>
  );
};

export default Home;
