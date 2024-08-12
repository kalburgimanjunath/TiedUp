import Banner from "./banner";
import Card from "./card";
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
const CompanyComponent = ({ company }) => {
  const links = ["home", "aboutus", "services", "products", "contact us"];
  const HeaderLinks = () => {
    return (
      <div className="flex justify-between">
        {links &&
          links.map((item) => {
            return (
              <div className="uppercase p-3 cursor-pointer hover:bg-pink-100">
                {item}
              </div>
            );
          })}
      </div>
    );
  };
  return (
    <>
      <div className="flex justify-between items-center border fixed bg-white w-full shadow-lg">
        <div className="font-bold text-3xl text-blue-300 p-1 uppercase">
          {company.title}
        </div>
        <HeaderLinks />
      </div>
      <div>
        <Banner image={company.banner} />
      </div>
      <div>Mode:{company.mode}</div>
      <div>
        Products:
        <Card products={company.products} />
      </div>
      <div>
        Services:
        <Card products={company.services} />
      </div>
      <div>
        Our Team:
        <Card products={company.team} />
      </div>
      <div>Address:{company.address}</div>
      <div>
        <iframe
          width="100%"
          height="300"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Google, manjunath nilaya,ravi nagar hubli &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
};
export default CompanyComponent;
