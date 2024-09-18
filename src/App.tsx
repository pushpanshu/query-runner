import React, { Profiler, useState } from "react";
import QueryEditor from "./components/QueryEditor";
import ResultTable from "./components/ResultTable";
import { mockDatabase } from "./mockData/mockDatabase";
import { QueryResult, User, Ticket } from "./types/QueryResult";
import './App.css';

const App: React.FC = () => {
  const [result, setResult] = useState<QueryResult>({ data: [] });

  const processQuery = (query: string) => {
    const lowerQuery = query.toLowerCase().trim();

    try {
      if (lowerQuery.startsWith("select * from users")) {
        setResult({ data: mockDatabase.users });
      } else if (lowerQuery.startsWith("select * from tickets")) {
        setResult({ data: mockDatabase.tickets });
      } else {
        throw new Error("Invalid query format. Only SELECT * FROM users/tickets supported.");
      }
    } catch (error) {
      setResult({ data: [], error: error?.message });
    }
  };

  function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    console.log({id, phase, actualDuration, baseDuration, startTime, commitTime});
    
  }

  return (
    <Profiler id="App" onRender={onRender}>
    <div>
      <h3>Data Query Editor</h3>
      <QueryEditor onSubmit={processQuery} />
      <ResultTable result={result} />
    </div>
    </Profiler>
  );
};

export default App;
