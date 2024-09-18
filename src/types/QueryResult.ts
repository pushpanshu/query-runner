export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export interface Ticket {
    id: number;
    user_id: number;
    description: string;
  }
  
  export interface QueryResult {
    data: User[] | Ticket[];
    error?: string;
  }

  export interface LoggingProps {
    queries: string[];
  }
  