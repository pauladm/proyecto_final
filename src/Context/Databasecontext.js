import { createContext, useContext, useState, useEffect } from "react";

const DatabaseContext = createContext({
  usuarios: [],
  setUsuarios: () => {},
  register: () => {},
});

export const useDatabaseContext = () => {
  return useContext(DatabaseContext);
};

export default function DatabaseContextProvider({ children }) {
  const [usuarios, setUsuarios] = useState(null);
  useEffect(function () {
    function callUsuarios() {
      let http = new XMLHttpRequest();
      http.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          setUsuarios(JSON.parse(this.responseText));
        }
      };
      http.open("GET", "http://localhost:8080/usuarios", true);
      http.send();
    }
    callUsuarios();
  }, []);

  function register(user) {
    console.log(user);
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
      }
    };
    http.open("POST", "http://localhost:8080/insertusuarios", true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify(user));
  }

  const value = {
    usuarios,
    setUsuarios,
    register,
  };
  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}
