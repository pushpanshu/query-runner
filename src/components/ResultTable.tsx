import React from "react";
import { QueryResult } from "../types/QueryResult";

interface ResultTableProps {
  result: QueryResult;
}

const ResultTable: React.FC<ResultTableProps> = ({ result }) => {
  if (result.error) {
    return <div>{result.error}</div>;
  }

  if (!result.data.length) {
    return <div>No results found.</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(result.data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {result.data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((val, i) => (
              <td key={i}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
