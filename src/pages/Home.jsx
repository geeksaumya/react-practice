import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Home</h1>

      <button onClick={() => navigate("/employees")}>
        Go to Employees
      </button>
    </div>
  );
}

export default Home;