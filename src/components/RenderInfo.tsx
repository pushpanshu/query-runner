import React from "react";
import { LoggingProps } from "../types/QueryResult";

const Logging: React.FC<LoggingProps> = ({ queries }) => {
  return (
    <div className="render-info" style={{ paddingLeft: "2px" }}>
      
      <ul className="tree-view boxshadow-0">
        <li>Recent Query Executed</li>
        <li>
          <ul>
            {queries.map((query) => (
              <li>{query}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Logging;
