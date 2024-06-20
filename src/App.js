import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
export default function App() {

    const { fetchData } = useContext(AppContext);
  
    useEffect(() => {
     
      fetchData();
    },[]);

  


  return (
    <div className="w-full h-full flex flex-col gap-3 justify-center ">
      <Header />

      <Blogs />

      <Footer />
    </div>

    
  );
}
