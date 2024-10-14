import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import ResMenu from './components/ResMenu';
import UserContext from "./utils/UserContext";
// import Search from './components/Search';
// import Contact from "./components/Contact";
// import About from "./components/About";


const AppLoader = () => {
  const {loggedInUser} = useContext(UserContext)
const [userName, setUserName] = useState(loggedInUser);

useEffect(()=>{

  setTimeout(()=>{
    setUserName("Sravani Linguberi")
  }, 3000);

},[])

  return (
    <div>
      <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
      <Header />
      <Outlet />
      <Footer />
      </UserContext.Provider>
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
