import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Search from './components/Search';
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import ResMenu from './components/ResMenu';


const AppLoader = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLoader />,
    children : [
      {
        path: '/',
        element : <Body/>,
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : '/contact',
        element: <Contact /> 
      },{
        path : '/city/:city/:resId',
        element : <ResMenu />
      }
    ],
    errorElement : <ErrorPage/>
  },
])
const myRoot = ReactDOM.createRoot(document.getElementById("root"));
myRoot.render(<RouterProvider router={appRouter}/>);
