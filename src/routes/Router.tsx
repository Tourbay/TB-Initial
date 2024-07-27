import App from "@/App";
import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);
