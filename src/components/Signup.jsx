import { useState } from "react";

function Signup() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("")
    function submitButton() {


        if (name === "") {
            setError("Name is required")
        } else if (phone === "") {
            setError("Phone number is required")
        } else if (email === "") {
            setError("Email is required")
        } else if (password === "") {
            setError("Password is required")
        } else {
            setError("")
            const newUser = {
                name: name,
                phone: phone,
                email: email,
                password: password
            }

            fetch("http://localhost:5001/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Saved:", data);

                setName("");
                setPhone("");
                setEmail("");
                setPassword("");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
            
            setName("")
            setPhone("")
            setEmail("")
            setPassword("")
            
            console.log(newUser)
        }
        
    }
        return (
        <div className="signup-container">

            <h1>Sign Up</h1>

            {error && <p className="error">{error}</p>}

            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />
            </div>

            <div className="form-group">
                <label>Phone Number</label>
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) =>
                        setPhone(e.target.value)
                    }
                />
            </div>

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
                Submit
            </button>

        </div>
    )
}    
export default Signup
