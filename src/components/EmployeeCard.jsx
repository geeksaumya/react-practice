function EmployeeCard({
  employee,
  editEmployee,
  deleteEmployee,
}) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 mb-5">
      <h3 className="text-xl font-semibold text-gray-800">{employee.name}</h3>

      <p className="text-gray-500 mb-4">{employee.role}</p>

      <div className="flex gap-3">

      <button
        onClick={() => editEmployee(employee)}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"

      >
        Edit
      </button>

      <button
        onClick={() => deleteEmployee(employee.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"

      >
        Delete
      </button>
    </div>
    </div>
  );
}

export default EmployeeCard;