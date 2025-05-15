import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [deliveryMethod, setDeliveryMethod] = useState("EMAIL");
  const [emails, setEmails] = useState([""]);
  const [merchantMapping, setMerchantMapping] = useState("");

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

  const generatedReports = [
    {
      id: 101,
      name: "Report 1",
      deliveryMethod: "EMAIL",
      status: "Active",
      downloadLink: "#",
    },
    {
      id: 102,
      name: "Report 4",
      deliveryMethod: "EMAIL",
      status: "Active",
      downloadLink: "#",
    }
  ];

  return (
    <div className="container mt-4">
      <Link className="text-secondary mb-3 d-inline-block" href="/template/list">
        ← Back to Reports List
      </Link>

      <div className="card-custom mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4 className="fw-bold mb-1">Juul Template</h4>
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
              <small className="text-muted">👤 Created By</small>
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
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="date" className="form-control" id="date" name="date" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="merchantId" className="form-label">Merchant ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="merchantId"
                      name="merchantId"
                      required
                    />
                  </div>

                  {/* 🆕 Merchant ID Mapping Field */}
                  <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="merchantMapping" className="form-label me-3 mb-0">
                      Merchant ID Mapping
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="merchantMapping"
                      name="merchantMapping"
                      value={merchantMapping}
                      onChange={(e) => setMerchantMapping(e.target.value)}
                      placeholder="e.g. merchant_internal_id"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="deliveryMethod" className="form-label">Delivery Method</label>
                    <select
                      className="form-select"
                      id="deliveryMethod"
                      value={deliveryMethod}
                      onChange={(e) => setDeliveryMethod(e.target.value)}
                    >
                      <option value="EMAIL">Email</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="frequency" className="form-label">Frequency</label>
                    <select className="form-select" id="frequency">
                      <option value="DAILY">Daily</option>
                      <option value="WEEKLY">Weekly</option>
                      <option value="MONTHLY">Monthly</option>
                    </select>
                  </div>

                  <div className="form-check form-switch mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switchCheckChecked"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="switchCheckChecked">
                      Active?
                    </label>
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
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        onClick={addEmail}
                      >
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
                    <th>Delivery Method</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {generatedReports.map((report) => (
                    <tr key={report.id}>
                      <td>
                        <Link href={`/report/example1`} className="link-dark">
                          {report.name}
                        </Link>
                      </td>
                      <td>{report.deliveryMethod}</td>
                      <td>
                        <span
                          className={`badge bg-${report.status === "Active" ? "success" : "danger"}`}
                        >
                          {report.status}
                        </span>
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