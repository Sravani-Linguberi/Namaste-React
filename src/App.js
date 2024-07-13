import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Search from './components/Search';
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";


const AppLoader = () => {
  return (
    <div>
      <Header />
      {/* <Search  /> */}
      <Body />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <AppLoader />,
    errorElement : <ErrorPage/>
  },{
    path : '/about',
    element : <About />
  },{
    path : '/contact',
    element : <Contact />
  }
])
const myRoot = ReactDOM.createRoot(document.getElementById("root"));
myRoot.render(<RouterProvider router={appRouter}/>);
