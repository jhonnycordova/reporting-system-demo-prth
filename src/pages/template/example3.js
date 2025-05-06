import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [deliveryMethod, setDeliveryMethod] = useState("EMAIL");
  const [emails, setEmails] = useState([""]);

  const addEmail = () => {
    setEmails([...emails, ""]);
  };

  const removeEmail = (index) => {
    const updated = [...emails];
    updated.splice(index, 1);
    setEmails(updated);
  };

  const updateEmail = (index, value) => {
    const updated = [...emails];
    updated[index] = value;
    setEmails(updated);
  };

  // Simulación de reports generados con este template
  const generatedReports = [
    {
      id: 101,
      name: "Juul Report - March",
      createdAt: "3/01/2024",
      status: "Completed",
      downloadLink: "#",
    },
    {
      id: 102,
      name: "Juul Report - February",
      createdAt: "2/01/2024",
      status: "Completed",
      downloadLink: "#",
    },
    {
      id: 103,
      name: "Juul Report - January",
      createdAt: "1/01/2024",
      status: "Failed",
      downloadLink: null,
    },
  ];

  return (
    <div className="container mt-4">
      <Link className="text-secondary mb-3 d-inline-block" href="/template/list">
        ← Back to Reports List
      </Link>

      <div className="card-custom mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4 className="fw-bold mb-1">Juul Report</h4>
            <p className="text-muted">Track user engagement and activity levels on a monthly basis</p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4">
            <div className="border p-3 rounded bg-light">
              <small className="text-muted">📅 Created At</small>
              <h6 className="fw-normal mt-1">1/14/2024</h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border p-3 rounded bg-light">
              <small className="text-muted">📅 Updated</small>
              <h6 className="fw-normal mt-1">1/14/2024</h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border p-3 rounded bg-light">
              <small className="text-muted">👤  Created By</small>
              <h6 className="fw-normal mt-1">Alice</h6>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-3">
          <button
            type="button"
            className="btn btn-primary btn-sm me-2"
            data-bs-toggle="modal"
            data-bs-target="#generateReportModal"
          >
            Generate Report
          </button>
        </div>

        {/* MODAL */}
        <div
          className="modal fade"
          id="generateReportModal"
          tabIndex="-1"
          aria-labelledby="generateReportModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="generateReportModalLabel">
                  Generate Report
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <form id="reportForm">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" name="name" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="merchantId" className="form-label">
                      Merchant ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="merchantId"
                      name="merchantId"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="deliveryMethod" className="form-label">
                      Delivery Method
                    </label>
                    <select
                      className="form-select"
                      id="deliveryMethod"
                      value={deliveryMethod}
                      onChange={(e) => setDeliveryMethod(e.target.value)}
                    >
                      <option value="EMAIL">Email</option>
                      {/* Agrega más métodos aquí si es necesario */}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="frecuency" className="form-label">
                      Frecuency
                    </label>
                    <select
                      className="form-select"
                      id="frecuency"
                    >
                      <option value="DAILY">Daily</option>
                      <option value="WEEKLY">Weekly</option>
                      <option value="MONTHLY">Monthly</option>
                    </select>
                  </div>

                  <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked />
                  <label className="form-check-label" for="switchCheckChecked">Active?</label>
                </div>

                  {deliveryMethod === "EMAIL" && (
                    <div className="mb-3">
                      <label className="form-label">Destination Emails</label>
                      <div id="emailList">
                        {emails.map((email, index) => (
                          <div className="input-group mb-2" key={index}>
                            <input
                              type="email"
                              className="form-control"
                              value={email}
                              onChange={(e) => updateEmail(index, e.target.value)}
                              required
                            />
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                              onClick={() => removeEmail(index)}
                              disabled={emails.length === 1}
                            >
                              &times;
                            </button>
                          </div>
                        ))}
                      </div>
                      <button type="button" className="btn btn-sm btn-secondary" onClick={addEmail}>
                        + Add Email
                      </button>
                    </div>
                  )}
                </form>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" form="reportForm" className="btn btn-primary">
                  Generate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* LISTA DE REPORTS GENERADOS */}
        <div className="mt-4">
          <h5 className="fw-bold mb-3">Generated Reports</h5>
          {generatedReports.length === 0 ? (
            <p className="text-muted">No reports generated yet.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Created At</th>
                    <th>Status</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {generatedReports.map((report) => (
                    <tr key={report.id}>
                      <td>{report.name}</td>
                      <td>{report.createdAt}</td>
                      <td>
                        <span
                          className={`badge bg-${report.status === "Completed" ? "success" : "danger"}`}
                        >
                          {report.status}
                        </span>
                      </td>
                      <td>
                        {report.downloadLink ? (
                          <a href={report.downloadLink} className="btn btn-sm btn-outline-primary">
                            Download
                          </a>
                        ) : (
                          <span className="text-muted">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}