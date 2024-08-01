import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import ResMenu from './components/ResMenu';
// import Search from './components/Search';
// import Contact from "./components/Contact";
// import About from "./components/About";


const AppLoader = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

// lazy loading way - 1
const Contact = lazy(() =>  import("./components/Contact")) ;

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
        lazy :  async () => {  // lazy loading way - 2
          let  About  = await import('./components/About')
          return { Component: About.default }}, 
      },
      {
        path : '/contact',
        element: <Suspense fallback={<h2>Loading Screen</h2>}> <Contact /> </Suspense> 
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
