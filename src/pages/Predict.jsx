import { useState } from "react";

export default function Predict(){

  const [form,setForm]=useState({
    season:1,
    yr:1,
    mnth:1,
    holiday:0,
    weekday:1,
    workingday:1,
    weathersit:1,
    temp:0.5,
    atemp:0.5,
    hum:0.5,
    windspeed:0.2
  });

  const [prediction,setPrediction]=useState(null);
  const [loading,setLoading]=useState(false);

  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:parseFloat(e.target.value)
    });
  };

  const predict=async()=>{
    setLoading(true);

    const res=await fetch("http://127.0.0.1:5000/predict",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(form)
    });

    const data=await res.json();
    setPrediction(data.prediction);
    setLoading(false);
  };

  return(
    <div style={styles.container}>

      <h2>🚲 Bike Rental Prediction</h2>

      <div style={styles.grid}>

        {Object.keys(form).map(key=>(
          <div key={key}>
            <label>{key}</label>
            <input
              name={key}
              type="number"
              step="0.1"
              value={form[key]}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        ))}

      </div>

      <button onClick={predict} style={styles.btn}>
        {loading ? "Predicting..." : "Predict"}
      </button>

      {prediction && (
        <h3 style={styles.result}>
          Predicted Rentals: {prediction}
        </h3>
      )}

    </div>
  );
}

const styles={

  container:{
    textAlign:"center",
    padding:"40px"
  },

  grid:{
    display:"grid",
    gridTemplateColumns:"repeat(3,1fr)",
    gap:"15px",
    maxWidth:"600px",
    margin:"auto"
  },

  input:{
    padding:"8px",
    width:"100%",
    borderRadius:"6px",
    border:"1px solid #ccc"
  },

  btn:{
    marginTop:"20px",
    padding:"12px 24px",
    background:"#6366f1",
    color:"white",
    border:"none",
    borderRadius:"8px",
    cursor:"pointer"
  },

  result:{
    marginTop:"20px",
    color:"green"
  }
};
