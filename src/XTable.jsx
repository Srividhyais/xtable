import React, { useState } from "react";

const XTable = () => {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);

  const sortByDate = () => {
    const sorted = [...data].sort((a, b) => {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      return b.views - a.views;
    });
    setData(sorted);
  };

  const sortByViews = () => {
    const sorted = [...data].sort((a, b) => {
      if (a.views !== b.views) return b.views - a.views;
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      return 0;
    });
    setData(sorted);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Date and Views Table</h1>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={sortByDate} style={{ marginRight: "10px" }}>
          Sort by Date
        </button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>

   <table>
        <thead>
          <tr>
            <th style={headerStyle}>Date</th>
            <th style={headerStyle}>Views</th>
            <th style={headerStyle}>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td style={cellStyle}>{row.date}</td>
              <td style={cellStyle}>{row.views}</td>
              <td style={cellStyle}>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const headerStyle = {
  textAlign: "left",
  padding: "4px"
};

const cellStyle = {
  padding: "4px"
};

export default XTable;