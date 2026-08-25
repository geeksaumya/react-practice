import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("")
    const navigate = useNavigate();
    function submitButton() {
        
        if (email === "") {
            setError("Email is required")
        } else if (password === "") {
            setError("Password is required")
        } else {
            setError("")

            fetch("http://localhost:5001/employees")
                .then((response) => response.json())
                .then((data) => {

                    const user = data.find((employee) =>
                        employee.email === email &&
                        employee.password === password
                    );

                    if (user) {
                        console.log("Login successful:", user);
                        navigate("/");
                    } else {
                        setError("User not found. Please create user first.");
                    }

                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }

        return (
        <div className="login-container">

            <h1>Login Page</h1>

            {error && <p className="error">{error}</p>}

            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />
            </div>

            <button onClick={submitButton}>
                Login
            </button>
            {error && <Link to="/signup">Sign Up</Link>}
        </div>
    )
}    

export default Login