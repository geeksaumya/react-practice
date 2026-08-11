import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import employeesData from "../data/employees.json";
import EmployeeCard from "../components/EmployeeCard";

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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8"> Employee Manager </h1>

      {id && (
        <p className="text-center text-gray-600 mb-6">
          Employee ID : {id}
        </p>
      )}

    <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
      <input
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Enter Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <div className="flex justify-center">
        {editId === null ? (
        <button
          onClick={addEmployee}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add Employee
        </button>
      ) : (
        <button
          onClick={updateEmployee}
          className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Update Employee
        </button>
      )}
      </div>
    </div>
      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">Employee List</h2>

      <div className="space-y-4">{employeeList.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          editEmployee={editEmployee}
          deleteEmployee={deleteEmployee}
        />
      ))}
      </div>
    </div>
    </div>
  );
}

export default Employees;