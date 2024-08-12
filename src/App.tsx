import { Link, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
function App() {
  const companies = [
    {
      title: "abc",
      address: "",
      banner: "",
      mode: "edit",
      products: [{ id: 1, title: "product1" }],
      services: [{ id: 1, title: "service1" }],
    },
    {
      title: "xyz",
      address: "",
      banner: "",
      mode: "saved",
      products: [{ id: 1, title: "product1" }],
      services: [{ id: 1, title: "service1" }],
    },
  ];

  return (
    <div className="">
      {/* {companies &&
        companies.map((item) => {
          return <Link to={`/${item.title}`}>{item.title}</Link>;
        })} */}
      <Routes>
        <Route path={`/:id`} element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
