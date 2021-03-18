import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn news</h2>
        <InfoIcon />
      </div>

      {newsArticle("Tesla hits new highs", "Cars & auto - 3000 readers")}
      {newsArticle(
        "Bitcoin Consolidation Looking to Break 40k",
        "Crypto news - 26,000 readers"
      )}
      {newsArticle("Is Redux too good?", "Code - 123 readers")}
      {newsArticle(
        "Innovation and Collaboration Fuel Linkedin Marketing Partner Awards",
        "Newsletter - 10,650 readers"
      )}
      {newsArticle(
        "Staying connected and productive with virtual events",
        "Top news - 1,650 readers"
      )}
    </div>
  );
}

export default Widgets;
