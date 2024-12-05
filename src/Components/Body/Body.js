import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Login/Login";
import App from "src/App";
import Classroom from "../Classroom/Classroom";
import { createContext, useState } from "react";
import Signup from "../SignUp/Signup";
import PrivacyPolicy from "../Policy/Privacy";
import TermsOfUse from "../Policy/TermsOfUse";
export const UserContext = createContext();

const Body = () => {
  const [isUser, setIsUser] = useState(false);
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/classroom",
      element: <Classroom />,
    },

    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },

    {
      path: "/terms-of-use",
      element: <TermsOfUse />,
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
