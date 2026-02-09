import { motion } from "framer-motion";
import { useState } from "react";

export default function Insights(){

  const [showNotebook,setShowNotebook] = useState(false);

  return(
    <div style={styles.page}>

      {/* HEADER */}
      <motion.div
        initial={{opacity:0,y:-30}}
        animate={{opacity:1,y:0}}
        style={styles.hero}
      >
        <h1>📊 Project Insights</h1>

        <p>
          Key findings from data analysis and machine learning modeling
        </p>

        {/* NOTEBOOK BUTTON */}
        <motion.button
          whileHover={{scale:1.08}}
          onClick={()=>setShowNotebook(!showNotebook)}
          style={styles.btn}
        >
          📘 {showNotebook ? "Hide Notebook" : "View Research Notebook"}
        </motion.button>
      </motion.div>

      {/* NOTEBOOK EMBED */}
      {showNotebook && (
        <iframe
  src="https://nbviewer.org/github/Aravindbalaji-011/Bike1/blob/main/bike.ipynb
"
          width="100%"
          height="600px"
          style={{
            borderRadius:"12px",
            marginBottom:"40px",
            border:"none"
          }}
        />
      )}

      {/* MODEL PERFORMANCE */}
      <Section title="🤖 Model Performance">

        <Card>
          <h3>Best Model</h3>
          <p>Random Forest</p>
        </Card>

        <Card>
          <h3>R² Score</h3>
          <p>0.89</p>
        </Card>

        <Card>
          <h3>MAE</h3>
          <p>45 bikes</p>
        </Card>

      </Section>

      {/* KEY FINDINGS */}
      <Section title="🔍 Key Findings">

        <Insight
          title="Seasonal Demand"
          text="Demand peaks in Summer and Spring due to favorable weather."
        />

        <Insight
          title="Weather Impact"
          text="Clear weather boosts rentals, rain reduces demand."
        />

        <Insight
          title="Working Days"
          text="Higher rentals on working days due to commuting."
        />

        <Insight
          title="Temperature Effect"
          text="Moderate temperature encourages biking."
        />

      </Section>

    </div>
  );
}

/* COMPONENTS */

function Section({title,children}){
  return(
    <div style={{marginBottom:"50px"}}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.grid}>{children}</div>
    </div>
  );
}

function Insight({title,text}){
  return(
    <motion.div whileHover={{y:-6}} style={styles.card}>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

function Card({children}){
  return(
    <motion.div whileHover={{scale:1.05}} style={styles.kpi}>
      {children}
    </motion.div>
  );
}

const styles={

  page:{
    minHeight:"100vh",
    padding:"50px 30px",
    background:"linear-gradient(135deg,#e0f2fe,#fdf4ff)",
    fontFamily:"Inter, sans-serif",
    color:"#1f2937"
  },

  hero:{
    textAlign:"center",
    marginBottom:"40px"
  },

  btn:{
    marginTop:"20px",
    padding:"14px 28px",
    borderRadius:"12px",
    border:"none",
    background:"linear-gradient(90deg,#6366f1,#ec4899)",
    color:"white",
    fontWeight:"600",
    cursor:"pointer"
  },

  sectionTitle:{
    textAlign:"center",
    marginBottom:"25px"
  },

  grid:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
    gap:"20px",
    maxWidth:"900px",
    margin:"auto"
  },

  card:{
    background:"white",
    padding:"20px",
    borderRadius:"14px",
    boxShadow:"0 6px 20px rgba(0,0,0,0.08)"
  },

  kpi:{
    background:"linear-gradient(90deg,#6366f1,#ec4899)",
    color:"white",
    padding:"20px",
    borderRadius:"14px",
    textAlign:"center"
  }
};
