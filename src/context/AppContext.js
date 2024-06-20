import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"

// Step 01 ContextCreation
export  const AppContext = createContext();

 export default function AppContextProvider({children}){
  const[loading,setLoading] = useState(false);
  const[post,setPost] = useState([]);
  const[page,setPage]= useState(1);
  const[totalPage,SetTotalPage] = useState(null);

  // Filling data

  async function fetchData(page=2){
    setLoading(true)
    let url =`${baseUrl}?page=${page}`;
  
    try{
      const result = await fetch(url);
      const data = await result.json();
      setPage(data.page);
      setPost(data.posts);
      SetTotalPage(data.totalPages);
      console.log(data);
      

    }
    
    catch(error){
      alert("Error while fetching data");
      setPage(1);
      setPost([]);
      SetTotalPage(null);

    }
    setLoading(false);
  }

  // handling page

  function PageHandler(page){
    setPage(page);
    fetchData(page);

  }

  const required_data= {

    post,
    setPost,
    page,
    setPage,
    loading,
    setLoading,
    totalPage,
    SetTotalPage,
    fetchData,
    PageHandler,
  
  }

  // Step 02 Context Provider

  return <AppContext.Provider value={required_data}>
    {children}
  </AppContext.Provider>

}
