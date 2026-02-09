import { motion } from "framer-motion";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function Home({ setPage }) {

  const seasonData = {
    labels:["Winter","Spring","Summer","Fall"],
    datasets:[{
      label:"Demand",
      data:[220,420,690,500],
      backgroundColor:"#6366f1"
    }]
  };

  const monthlyData = {
    labels:["Jan","Feb","Mar","Apr","May","Jun"],
    datasets:[{
      label:"Rentals",
      data:[120,190,300,450,520,680],
      borderColor:"#ec4899",
      fill:false
    }]
  };

  const weatherData = {
    labels:["Clear","Cloudy","Rainy"],
    datasets:[{
      data:[60,25,15],
      backgroundColor:["#34d399","#fbbf24","#f87171"]
    }]
  };

  return (
    <div style={styles.page}>

      {/* HERO */}
      <motion.div
        initial={{opacity:0,y:-30}}
        animate={{opacity:1,y:0}}
        style={styles.hero}
      >
        <h1 style={styles.title}>
          🚲 Smart Bike Forecast
        </h1>

        <p style={styles.subtitle}>
          Predict bike demand with AI insights
        </p>

        <motion.button
          whileHover={{scale:1.1}}
          onClick={()=>setPage("predict")}
          style={styles.btn}
        >
          Start Prediction
        </motion.button>
      </motion.div>

      {/* KPI */}
      <div style={styles.kpiRow}>
        <KPI title="Avg Rentals" value="540"/>
        <KPI title="Peak Season" value="Summer"/>
        <KPI title="Best Weather" value="Clear"/>
      </div>

      {/* DASHBOARD */}
      <div style={styles.grid}>

        <Card title="Seasonal Demand">
          <Bar data={seasonData}/>
        </Card>

        <Card title="Monthly Trend">
          <Line data={monthlyData}/>
        </Card>

        <Card title="Weather Impact">
          <Doughnut data={weatherData}/>
        </Card>

      </div>

    </div>
  );
}

/* KPI */
function KPI({title,value}){
  return(
    <motion.div whileHover={{scale:1.05}} style={styles.kpi}>
      <h2>{value}</h2>
      <p>{title}</p>
    </motion.div>
  );
}

/* Card */
function Card({title,children}){
  return(
    <motion.div whileHover={{y:-6}} style={styles.card}>
      <h3>{title}</h3>
      {children}
    </motion.div>
  );
}

const styles = {

  page:{
    minHeight:"100vh",
    padding:"50px 30px",
    background:"linear-gradient(135deg,#e0f2fe,#fdf4ff)",
    fontFamily:"Inter, sans-serif",
    color:"#1f2937"
  },

  hero:{
    textAlign:"center",
    marginBottom:"50px"
  },

  title:{
    fontSize:"42px",
    fontWeight:"700",
    color:"#111827"
  },

  subtitle:{
    opacity:0.7
  },

  btn:{
    marginTop:"20px",
    padding:"14px 28px",
    borderRadius:"12px",
    border:"none",
    cursor:"pointer",
    background:"linear-gradient(90deg,#6366f1,#ec4899)",
    color:"white",
    fontWeight:"600"
  },

  kpiRow:{
    display:"flex",
    justifyContent:"center",
    gap:"25px",
    marginBottom:"40px",
    flexWrap:"wrap"
  },

  kpi:{
    background:"rgba(255,255,255,0.8)",
    padding:"20px",
    borderRadius:"14px",
    textAlign:"center",
    width:"160px",
    boxShadow:"0 6px 20px rgba(0,0,0,0.08)"
  },

  grid:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
    gap:"30px",
    maxWidth:"1100px",
    margin:"auto"
  },

  card:{
    background:"rgba(255,255,255,0.9)",
    padding:"25px",
    borderRadius:"18px",
    boxShadow:"0 10px 30px rgba(0,0,0,0.08)"
  }
};
