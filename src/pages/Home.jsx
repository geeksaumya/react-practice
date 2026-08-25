import { Link } from "react-router-dom";




function Home() {
  
  return (
    <div style={{ padding: "20px" }}>
      <h1>Home</h1>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Home;