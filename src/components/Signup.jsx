import React, { useState } from "react";

function Signup() {
    const [formData, setFormData] = 
        useState({
        name: "",
        phone: "",
        email: "",
        password: ""
        })
    ;
    const [error, setError] = useState("")
    function submitButton() {
        if (formData.name === "") {
            setError("Name is required")
        } else if (formData.phone === "") {
            setError("Phone number is required")
        } else if (formData.email === "") {
            setError("Email is required")
        } else if (formData.password === "") {
            setError("Password is required")
        } else {
            setError("")
            console.log(formData)
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
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            name: e.target.value
                        })
                    }
                />
            </div>

            <div className="form-group">
                <label>Phone Number</label>
                <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            phone: e.target.value
                        })
                    }
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            email: e.target.value
                        })
                    }
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            password: e.target.value
                        })
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
