import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import { FiberManualRecord } from "@mui/icons-material";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_articles">
      <div className="widgets_articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Vikash Pratap is back", "Top news - 9099 readers")}
      {newsArticle("Recession is Coming", "Economy news - 869 readers")}
      {newsArticle("New CDS of India", "Defence news - 642 readers")}
      {newsArticle("Coronavirus 4th wave is coming", "Top news - 749 readers")}
      {newsArticle("Mahindra is the road king", "Cars & auto - 1011 readers")}
      {newsArticle(
        "India tested new ICBM with range more then 7000km",
        "Defence news - 564 readers"
      )}
      {newsArticle(
        "TATA is back with a BANG at AUTO expo 2023",
        "Cars & auto news - 202 readers"
      )}
    </div>
  );
}

export default Widgets;
