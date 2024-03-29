import React, { useState, useEffect } from "react";
import ApiData from "./ApiData";
import "./commodities.styles.css";

export default function Commodities() {
  const dataAPIKey = "579b464db66ec23bdd00000150b9879b6b7e424152ff785940115f29";
  const [data, setData] = useState<FoodItem[] | null>(null);
  const [filters, setFilters] = useState<{
    name: string | null;
    limit: number;
  }>({
    name: null,
    limit: 20,
  });

  useEffect(() => {
    fetch(
      `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${dataAPIKey}&offset=10&limit=1000&format=json&offset=10&filters=fruits%2C%20vegetables`
    )
      .then((res) => res.json())
      .then((items) => setData(items.records));
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilters((prev) => {
      if (event.target.name === "name")
        return {
          name: event.target.value,
          limit: prev.limit,
        };
      else
        return {
          name: prev.name,
          limit: parseInt(event.target.value),
        };
    });
  }

  return (
    <div id="commodities">
      <div id="commodities-head">
        <div id="commodities-back" />
        <h1>Commodities Prices by APMC</h1>
      </div>
      <div id="commodities-info">
        <h1>Table with the current prices for fruits and vegetables</h1>
        <div id="filters">
          <div className="filter">
            <label>Name of commodities</label>
            <input
              name="name"
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Item Name"
            />
          </div>
          <div className="filter">
            <label>No. of commodities</label>
            <input
              name="limit"
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="No of Commodities"
            />
          </div>
        </div>
        <div className="table">
          <div className="table-head">
            <h2
              style={{
                width: "30%",
              }}
            >
              Commodity Name
            </h2>
            <h2>District || State</h2>
            <h2>Min Price (kg/quintal)</h2>
            <h2>Max Price (kg/quintal)</h2>
            <h2>Modal Price (kg/quintal)</h2>
          </div>
          <div className="table-body">
            <ApiData
              data={data!}
              filterName={filters.name!}
              limit={filters.limit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
