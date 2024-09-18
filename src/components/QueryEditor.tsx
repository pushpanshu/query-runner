import React, { useState } from "react";
import { QueryResult } from "../types/QueryResult";

interface QueryEditorProps {
  onSubmit: (query: string) => void;
  result: QueryResult;
}

const QueryEditor: React.FC<QueryEditorProps> = ({ onSubmit, result }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSubmit(query);
    }
  };

  return (
    <div>
   
    <form onSubmit={handleSubmit}>
      <div className="pb-1">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your SQL query here (e.g., SELECT * FROM users)"
          rows={5}
          cols={50}
        />
      </div>
      {result?.error&&<p className="pb-1 error">{result?.error}</p>}
      <button type="submit">Run Query</button>
    </form>
    
    </div>
  );
};

export default QueryEditor;
