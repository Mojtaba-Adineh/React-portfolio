import { ImportExport } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioListItem from "./portfolioListItem/PortfolioListItem";
import {
  featuredPortfolio,
  webPortfolio,
  contentPortfolio,
  mobilePortfolio,
  designPortfolio,
} from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const portfolioListItems = [
    { name: "Featured", id: "featured" },
    { name: "Web App", id: "webApp" },
    { name: "Mobile App", id: "mobileApp" },
    { name: "Design", id: "design" },
    { name: "Content", id: "content" },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "webApp":
        setData(webPortfolio);
        break;
      case "mobileApp":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {portfolioListItems.map((item) => (
          <PortfolioListItem
            key={item.id}
            title={item.name}
            id={item.id}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div className="item">
            <img src={item.img} alt="" />
            <h3>{item.title }</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
