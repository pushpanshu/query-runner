import React from "react";
import { QueryResult } from "../types/QueryResult";

interface ResultTableProps {
  result: QueryResult;
}

const ResultTable: React.FC<ResultTableProps> = ({ result }) => {
  if (!result.data.length) {
    return (
      <table>
        <thead>
          <tr> </tr>
        </thead>
        <tbody className="table-text-middle">No data</tbody>
      </table>
    );
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
