import useForm from "./useForm";

const initialFilters = {
  typeid: "",
  numid: "",
  numdes: "",
};

const useFilter = () => {
  const { form: filters, handleChange: handleFilterChange } =
    useForm(initialFilters);

  const setterFilters = (data) => {
    let filterToArr = Object.entries(filters).filter((el) => el[1]);
    let numOfFilters = filterToArr.length;

    const filter = (data, key) => {
      if (filters[key]) {
        return data.filter((el) =>
          el[key].toLowerCase().includes(filters[key].toLowerCase())
        );
      } else {
        return data;
      }
    };

    switch (numOfFilters) {
      case 1:
        return filter(data, filterToArr[0][0]);
      case 2:
        return filter(filter(data, filterToArr[0][0]), filterToArr[1][0]);
      case 3:
        return filter(
          filter(filter(data, filterToArr[0][0]), filterToArr[1][0]),
          filterToArr[2][0]
        );
      default:
        return data;
    }
  };

  return { filters, handleFilterChange, setterFilters };
};

export default useFilter;
