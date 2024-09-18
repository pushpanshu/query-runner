import React, { useState } from "react";

interface QueryEditorProps {
  onSubmit: (query: string) => void;
}

const QueryEditor: React.FC<QueryEditorProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSubmit(query);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your SQL query here (e.g., SELECT * FROM users)"
        rows={5}
        cols={50}
      />
      <button type="submit">Run Query</button>
    </form>
  );
};

export default QueryEditor;
