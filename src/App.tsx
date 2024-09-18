import React, { useState } from "react";
import QueryEditor from "./components/QueryEditor";
import ResultTable from "./components/ResultTable";
import { mockDatabase } from "./mockData/mockDatabase";
import { QueryResult} from "./types/QueryResult";
import Logging from "./components/RenderInfo";
import "./App.css";

const App: React.FC = () => {
  const [result, setResult] = useState<QueryResult>({ data: [] });
  const [queries, setQueries] = useState<string[]>([]);
  function reformatSQL(query: string) {
    return query.replace(/\s+/g, ' ').trim();
  }
  const processQuery = (query: string) => {
    const lowerQuery = reformatSQL(query.toLowerCase().trim());
    setQueries(prev => [...prev, lowerQuery]);
    try {
      if (lowerQuery === "select * from users") {
        setResult({ data: mockDatabase.users });
      } else if (lowerQuery === "select * from tickets") {
        setResult({ data: mockDatabase.tickets });
      } 
      else {
        throw new Error(
          "Invalid query format. Only SELECT * FROM users/tickets supported."
        );
      }
    } catch (error) {
      setResult({ data: [], error: (error as Error)?.message });
    }
  };

  return (
    <div className="head-section">
       <div className="content-center"><h4 className="m-0">JSON Data Query Editor</h4></div>
      <div className="main">
        <aside>
          <Logging queries={queries}/>
        </aside>
        <main className="submain">
          <QueryEditor onSubmit={processQuery} result={result}/>
          <ResultTable result={result} />
        </main>
      </div>
      </div>
  );
};

export default App;
