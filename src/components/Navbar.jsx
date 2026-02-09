import { motion } from "framer-motion";

export default function Navbar({ setPage }) {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={styles.nav}
    >
      {/* LOGO */}
      <div style={styles.logo} onClick={()=>setPage("home")}>
        🚲 BikeAI
        <span style={styles.tag}>Forecast</span>
      </div>

      {/* LINKS */}
      <div style={styles.links}>
        <span onClick={()=>setPage("home")}>Home</span>
        <span onClick={()=>setPage("predict")}>Predict</span>
        <span onClick={()=>setPage("insights")}>Insights</span>
        <span>About</span>
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={()=>setPage("predict")}
        style={styles.cta}
      >
        Get Prediction
      </motion.button>

    </motion.nav>
  );
}

const styles = {

  nav:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"18px 60px",
    background:"rgba(255,255,255,0.75)",
    backdropFilter:"blur(12px)",
    boxShadow:"0 4px 20px rgba(0,0,0,0.06)",
    position:"sticky",
    top:0,
    zIndex:100
  },

  logo:{
    fontSize:"22px",
    fontWeight:"700",
    cursor:"pointer",
    color:"#111827"
  },

  tag:{
    marginLeft:"6px",
    fontSize:"12px",
    background:"#6366f1",
    color:"white",
    padding:"3px 8px",
    borderRadius:"8px"
  },

  links:{
    display:"flex",
    gap:"30px",
    fontSize:"15px",
    color:"#374151",
    cursor:"pointer"
  },

  cta:{
    padding:"10px 18px",
    borderRadius:"10px",
    border:"none",
    cursor:"pointer",
    background:"linear-gradient(90deg,#6366f1,#ec4899)",
    color:"white",
    fontWeight:"600"
  }
};
