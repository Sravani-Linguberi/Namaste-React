import React from "react";
import ReactDOM from "react-dom/client";
import '/index.css'

const Header = () => {
  return (<div className="header-container">
    <img className="app-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGiUbMhaXl73QmffRRNIg3NhkMNuEL4ie6ag&s"/>
    <div className="nav-container">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>contact us</li>
        <li>cart</li>
      </ul>
    </div>
  </div>)
}

const Body = () => {
  return (<div className="card-container">
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
  </div>)
}

const RestaurantCard = () => {
  return (
    <div className="restCard">
      <img className="restImg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/c75ff48c-b373-4733-8126-e3180cbb0fa0_344287.jpg" alt="Restaurant card" />
      <h3 className="res-name">vara lakshmi</h3>
      <h4> 4.5rating . 45 mins </h4>
      <h4>South Indian</h4>
      <h5>Filmnagar</h5>
    </div>
  )
}

const Search = () => {
  return (
    <div className="search">
      <input />
      search
    </div>
  )
}

const Footer = () => {
  return (<div className="footer">
    <div>copy right</div>
    <div>about</div>
    <div>contact us</div>
    <div>address</div>
  </div>)
}

const AppLoader = () => {
  return (
    <div > 
      <Header />
      <Search />
      <Body />  
      <Footer />
    </div>
  )
}




const myRoot = ReactDOM.createRoot(document.getElementById("root"));
myRoot.render(<AppLoader/>);
