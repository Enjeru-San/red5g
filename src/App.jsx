import { Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
