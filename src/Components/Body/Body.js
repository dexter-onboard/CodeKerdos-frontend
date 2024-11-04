import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Login/Login";
import App from "src/App";
import Classroom from "../Classroom/Classroom";
import { createContext, useState } from "react";
export const UserContext = createContext();

const Body = () => {
  const [isUser, setIsUser] = useState(false);
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/classroom",
      element: <Classroom />,
    },
  ]);
  return (
    <div>
      <UserContext.Provider value={[isUser, setIsUser]}>
        <RouterProvider router={appRouter} />
      </UserContext.Provider>
    </div>
  );
};

export default Body;
