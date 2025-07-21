import React from "react";
import ReactDOM from 'react-dom/client';

const root=ReactDOM.createRoot(document.getElementById("root"));


const JsxElement=()=>{
  return (
    <h1>Namaste India</h1>
  )
}
const val=<h1>hello</h1>;

const Header=()=>{
    return(
        <>
        <div className="header">
            <div className="Logo">
                <img src="https://tse1.mm.bing.net/th/id/OIP.CwyDxZDqeYvOvUzWddB3FAHaFj?pid=Api&P=0&h=220"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
        </>
    )
}

const Restro=()=>{
    return (
        <div className="res-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1662123565/mznbawvblih2sum2rxvf.webp"></img>
            <h3>Sagar Gaire</h3>
            <div style={{display:"flex", justifyContent:"space-around", alignContent:"center"
            }}>
                <h4>Magaritta Pizza</h4>
            <h5>4.7 ⭐</h5>
            </div>
            <h5> Take 24 min to deliver</h5>
            <h5>40% off on your first order</h5>
            
        </div>
    )
}
const Body=()=>{
    return(
        <div className="body">
            <div className="search">

            </div>
            <div className="restroCard">
                {/* //Restraunt card component we will create */}
                <Restro/> <Restro/> <Restro/> <Restro/> <Restro/> <Restro/> <Restro/> <Restro/> <Restro/> <Restro/>
            </div>
        </div>
    )
}

const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Body/>
        </>
        
    )
}


root.render(<AppLayout/>);