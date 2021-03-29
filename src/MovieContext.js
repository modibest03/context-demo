import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export function MovieProvider(props) {
  const [movies, setMovies] = useState([
    {
      name: "robaroba",
      price: "$10",
      id: "23124",
    },
    {
      name: "spider man",
      price: "$10",
      id: "23124",
    },
    {
      name: "superman",
      price: "$10",
      id: "23124",
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}
