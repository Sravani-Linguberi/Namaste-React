import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Search from './components/Search';
import Footer from "./components/Footer";


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

const myRoot = ReactDOM.createRoot(document.getElementById("root"));
myRoot.render(<AppLoader />);
