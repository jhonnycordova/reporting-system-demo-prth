import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [name, setName] = useState("Report 1");
  const [frequency, setFrequency] = useState("Monthly");
  const [templateUsed] = useState("TEMPLATE A");
  const [deliveryMethod, setDeliveryMethod] = useState("EMAIL");
  const [deliveryEmails, setDeliveryEmails] = useState([
    "marketing@company.com",
    "admin@company.com",
  ]);
  const [isActive, setIsActive] = useState(true);

  const customFields = ["Start Date", "End Date", "User Segment"];

  const reportHistory = [
    {
      date: "3/14/2024",
      status: "Sent",
      downloadLink: "/downloads/report1-mar2024.pdf",
      parameters: {
        merchantId: "TEST",
      },
    },
    {
      date: "2/14/2024",
      status: "Sent",
      downloadLink: "/downloads/report1-feb2024.pdf",
      parameters: {
        merchantId: "TEST2",
      },
    },
    {
      date: "1/14/2024",
      status: "Sent",
      downloadLink: "/downloads/report1-jan2024.pdf",
      parameters: {
        merchantId: "TEST3",
      },
    },
  ];

  const toggleActive = () => {
    setIsActive((prev) => !prev);
  };

  const addEmail = () => {
    setDeliveryEmails([...deliveryEmails, ""]);
  };

  const updateEmail = (index, value) => {
    const updated = [...deliveryEmails];
    updated[index] = value;
    setDeliveryEmails(updated);
  };

  const removeEmail = (index) => {
    const updated = [...deliveryEmails];
    updated.splice(index, 1);
    setDeliveryEmails(updated);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setShowEditModal(false);
  };

  return (
    <div className="container mt-4">
      <Link className="text-secondary mb-3 d-inline-block" href="/report/list">
        ← Back to Reports List
      </Link>

      <div className="card-custom mb-4">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h4 className="fw-bold mb-1">{name}</h4>
            <p className="text-muted">
              Track user engagement and activity levels on a monthly basis
            </p>
          </div>
          <div className="text-end">
          <button
              className="btn btn-outline-primary btn-sm me-2"
              onClick={() => setShowEditModal(true)}
            >
              Run
            </button>
            <button
              className="btn btn-outline-secondary btn-sm me-2"
              onClick={() => setShowEditModal(true)}
            >
              ✏️ Edit
            </button>
            <button
              className={`btn btn-sm ${isActive ? "btn-outline-danger" : "btn-outline-success"} me-2`}
              onClick={toggleActive}
            >
              {isActive ? "Deactivate" : "Activate"}
            </button>
            <span
              className={`badge rounded-pill ${
                isActive ? "bg-success" : "bg-secondary"
              }`}
            >
              {isActive ? "● Active" : "● Inactive"}
            </span>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4 mb-3">
            <div className="border p-3 rounded bg-light">
              <small className="text-muted">📅 Created</small>
              <h6 className="fw-normal mt-1">1/14/2024</h6>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="border p-3 rounded bg-light">
              <small className="text-muted">⏱️ Frequency</small>
              <h6 className="fw-normal mt-1">{frequency}</h6>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="border p-3 rounded bg-light">
              <small className="text-muted">📄 Template</small>
              <h6 className="fw-normal mt-1">{templateUsed}</h6>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="border p-3 rounded bg-light">
              <small className="text-muted">🧩 Custom Fields</small>
              <ul className="mb-0 mt-1 ps-3">
                {customFields.map((field, index) => (
                  <li key={index} className="fw-normal">
                    {field}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="border p-3 rounded bg-light">
              <small className="text-muted">📬 Delivery Method</small>
              <h6 className="fw-normal mt-1">{deliveryMethod}</h6>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="border p-3 rounded bg-light">
              <small className="text-muted">📧 Email Recipients</small>
              <ul className="mb-0 mt-1 ps-3">
                {deliveryEmails.map((email, index) => (
                  <li key={index} className="fw-normal">
                    {email}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card-custom">
        <h5 className="fw-bold mb-3">📊 Report Execution History </h5>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>Date</th>
                <th>Parameters</th>
                <th>Status</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {reportHistory.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>
                    <ul className="mb-0">
                      {Object.entries(entry.parameters).map(([key, value], idx) => (
                        <li key={idx} className="fw-normal">
                          {`${key}: ${value}`}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>{entry.status}</td>
                  <td>
                    <a
                      href={entry.downloadLink}
                      className="btn btn-sm btn-outline-secondary"
                      download
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <form onSubmit={handleSave}>
                <div className="modal-header">
                  <h5 className="modal-title">Edit Report</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowEditModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Report Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Merchant ID</label>
                    <input
                      type="text"
                      className="form-control"
                      value={''}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Frequency</label>
                    <select
                      className="form-select"
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                    >
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Delivery Method</label>
                    <select
                      className="form-select"
                      value={deliveryMethod}
                      onChange={(e) => setDeliveryMethod(e.target.value)}
                    >
                      <option value="EMAIL">Email</option>
                      <option value="SFTP">SFTP</option>
                      <option value="Slack">Slack</option>
                    </select>
                  </div>

                  {deliveryMethod === "EMAIL" && (
                    <div className="mb-3">
                      <label className="form-label">Email Recipients</label>
                      {deliveryEmails.map((email, index) => (
                        <div className="input-group mb-2" key={index}>
                          <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => updateEmail(index, e.target.value)}
                          />
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeEmail(index)}
                            disabled={deliveryEmails.length === 1}
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                      <button type="button" className="btn btn-sm btn-secondary" onClick={addEmail}>
                        + Add Email
                      </button>
                    </div>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowEditModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}