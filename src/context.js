import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [mentors, setMentors] = useState([]);
  const setMentorData = (data) => {
    setMentors(data);
  };

  

  

  return (
    <DataContext.Provider
      value={{
        mentors,
        setMentorData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};