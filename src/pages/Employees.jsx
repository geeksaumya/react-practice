import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import employeesData from "../data/employees.json";

function Employees() {
  const { id } = useParams();

  const [employeeList, setEmployeeList] = useState(employeesData);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [editId, setEditId] = useState(null);

  // Runs only once when page loads
  useEffect(() => {
    console.log("Employees page loaded");
    document.title = "Employee Manager";
  }, []);

  // Runs whenever employeeList changes
  useEffect(() => {
    console.log("Employee list updated:");
    console.log(employeeList);
  }, [employeeList]);

  // CREATE
  function addEmployee() {
    if (!name || !role) return;

    const newEmployee = {
      id: Date.now(),
      name,
      role,
    };

    setEmployeeList([...employeeList, newEmployee]);

    setName("");
    setRole("");
  }

  // DELETE
  function deleteEmployee(id) {
    const updatedList = employeeList.filter(
      (employee) => employee.id !== id
    );

    setEmployeeList(updatedList);
  }

  // EDIT
  function editEmployee(employee) {
    setName(employee.name);
    setRole(employee.role);
    setEditId(employee.id);
  }

  // UPDATE
  function updateEmployee() {
    const updatedList = employeeList.map((employee) => {
      if (employee.id === editId) {
        return {
          ...employee,
          name,
          role,
        };
      }

      return employee;
    });

    setEmployeeList(updatedList);

    setName("");
    setRole("");
    setEditId(null);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Manager</h1>

      {id && <h3>Employee ID from URL: {id}</h3>}

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <br />
      <br />

      {editId === null ? (
        <button onClick={addEmployee}>Add Employee</button>
      ) : (
        <button onClick={updateEmployee}>Update Employee</button>
      )}

      <hr />

      <h2>Employee List</h2>

      {employeeList.map((employee) => (
        <div
          key={employee.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{employee.name}</h3>

          <p>{employee.role}</p>

          <button onClick={() => editEmployee(employee)}>
            Edit
          </button>

          <button
            onClick={() => deleteEmployee(employee.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Employees;