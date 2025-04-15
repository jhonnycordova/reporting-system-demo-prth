import { useState } from "react";
import Link from "next/link";

export default function CreateUserPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState([]);
  const [status, setStatus] = useState("Active");

  const roleOptions = ["Admin", "Creator"];

  const handleRoleChange = (e) => {
    const value = e.target.value;
    setRoles((prev) =>
      prev.includes(value)
        ? prev.filter((r) => r !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, roles, status };
    console.log("Creating user:", newUser);
    // Aquí puedes hacer un fetch/post para guardar el nuevo usuario
  };

  return (
    <div className="container mt-4">
      <Link href="/user/list" className="text-secondary mb-3 d-inline-block">
        ← Back to Users List
      </Link>

      <div className="card-custom p-4">
        <h4 className="fw-bold mb-4">Create New User</h4>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">Name</label>
            <input
              type="text"
              id="userName"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">Email</label>
            <input
              type="email"
              id="userEmail"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Roles */}
          <div className="mb-3">
            <label className="form-label">Roles</label>
            <div>
              {roleOptions.map((role) => (
                <div className="form-check form-check-inline" key={role}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`role-${role}`}
                    value={role}
                    checked={roles.includes(role)}
                    onChange={handleRoleChange}
                  />
                  <label className="form-check-label" htmlFor={`role-${role}`}>
                    {role}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="mb-4">
            <label htmlFor="userStatus" className="form-label">Status</label>
            <select
              className="form-select"
              id="userStatus"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-end">
            <Link href="/user/list" className="btn btn-secondary me-2">
              Cancel
            </Link>
            <button type="submit" className="btn btn-primary">Create User</button>
          </div>
        </form>
      </div>
    </div>
  );
}