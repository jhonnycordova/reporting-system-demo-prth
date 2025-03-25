import Link from "next/link";
import { useState } from "react";

export default function Page() {

  const [emails, setEmails] = useState(['']);
  const addEmail = () => {
    setEmails([...emails, '']);
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


  return (
    <div className="container mt-4">
      <Link className="text-secondary mb-3 d-inline-block" href="/report/list">
        ← Back to Reports List
      </Link>
      <div className="card-custom mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4 className="fw-bold mb-1">Juul Report</h4>
            <p className="text-muted">Track user engagement and activity levels on a monthly basis</p>
          </div>
          <div>
            <span className="status-badge">▶ Active</span>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4">
            <div className="border p-3 rounded bg-light">
              <small className="text-muted">📅 Created</small>
              <h6 className="fw-normal mt-1">1/14/2024</h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border p-3 rounded bg-light">
              <small className="text-muted">⏱️ Last Run</small>
              <h6 className="fw-normal mt-1">2/29/2024</h6>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-3">
          {/* <button className="btn btn-primary btn-sm me-2">▶ Generate Report</button> */}
          <button type="button" className="btn btn-primary btn-sm me-2" data-bs-toggle="modal" data-bs-target="#generateReportModal">
            Generate Report
          </button>
        </div>

        <div className="modal fade" id="generateReportModal" tabindex="-1" aria-labelledby="generateReportModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title" id="generateReportModalLabel">Generate Report</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
                <form id="reportForm">

                  <div className="mb-3">
                    <label for="dateFrom" className="form-label">Date From</label>
                    <input type="date" className="form-control" id="dateFrom" name="dateFrom" required />
                  </div>


                  <div className="mb-3">
                    <label for="dateTo" className="form-label">Date To</label>
                    <input type="date" className="form-control" id="dateTo" name="dateTo" required />
                  </div>


                  <div className="mb-3">
                    <label for="merchantId" className="form-label">Merchant ID</label>
                    <input type="text" className="form-control" id="merchantId" name="merchantId" required />
                  </div>


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
                </form>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" form="reportForm" className="btn btn-primary">Generate</button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}