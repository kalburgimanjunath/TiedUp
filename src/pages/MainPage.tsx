import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import COMPANY from "../data/COMPANY";
import CompanyComponent from "../components/CompanyComponent";
const MainPage = () => {
  const { id } = useParams();
  const [company, setCompany] = useState([]);
  const filterCompany = COMPANY.filter((item) => {
    return item.title == id;
  });
  useEffect(() => {
    if (id) {
      setCompany(filterCompany[0]);
    }
  }, []);
  if (company && company.mode == "edit") {
    return (
      <>
        <div>display templates</div>
        <div>themes</div>
        <div>Preview</div>
        <div>sidebar/menu to update the content properties</div>
      </>
    );
  } else {
    return <CompanyComponent company={company} />;
  }
};

export default MainPage;
