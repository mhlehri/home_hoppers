import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [isChanged, setIsChanged] = useState(false);
  useEffect(() => {
    const observeLocalServer = () => {
      if (localStorage.getItem("user")) {
        const user = localStorage.getItem("user");
        const data = JSON.parse(user);
        console.log("Auth", data);
        setUser(data);
      } else {
        setUser(undefined);
      }
    };
    console.log(isChanged);
    return () => {
      return observeLocalServer();
    };
  }, [isChanged]);

  const authInfo = {
    user,
    setIsChanged,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
