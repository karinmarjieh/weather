import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainNavBar from "./Components/MainNavBar";
import Dashboard from "./Components/Dashboard";
import Favorites from "./Components/Favorites";
import Forecast from "./Components/Forecast";
import SignIn from "./Components/SignIn";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavBar />,
    children: [
      { path: "/", element: <Dashboard /> },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "forecast",
        element: <Forecast />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      // {
      //   path: "*",
      //   element: <NotFound />,
      // },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
}

export default App;