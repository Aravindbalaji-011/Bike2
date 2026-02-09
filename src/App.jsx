import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Predict from "./pages/Predict";
import Insights from "./pages/Insights";


export default function App(){

  const [page,setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage}/>

      {page==="home" && <Home setPage={setPage}/>}
      {page==="predict" && <Predict/>}
      {page==="insights" && <Insights/>}

    </>
  );
}
