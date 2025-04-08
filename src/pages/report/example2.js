import Link from "next/link";

export default function Page() {
  const frequency = "Monthly";
  const customFields = ["Start Date", "End Date", "User Segment"];
  const templateUsed = "TEMPLATE B";

  const deliveryMethod = "SFTP";
  const deliveryEmails = ["marketing@company.com", "admin@company.com"];

  const reportHistory = [
    {
      date: "3/14/2024",
      status: "Sent",
      downloadLink: "/downloads/report1-mar2024.pdf",
    },
    {
      date: "2/14/2024",
      status: "Sent",
      downloadLink: "/downloads/report1-feb2024.pdf",
    },
    {
      date: "1/14/2024",
      status: "Sent",
      downloadLink: "/downloads/report1-jan2024.pdf",
    },
  ];

  return (
    <div className="container mt-4">
      <Link className="text-secondary mb-3 d-inline-block" href="/report/list">
        ← Back to Reports List
      </Link>
      
      <div className="card-custom mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4 className="fw-bold mb-1">Report 2</h4>
            <p className="text-muted">Track user engagement and activity levels on a monthly basis</p>
          </div>
          <div>
            <span className="status-badge">▶ Active</span>
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
                  <li key={index} className="fw-normal">{field}</li>
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
                  <li key={index} className="fw-normal">{email}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card-custom">
        <h5 className="fw-bold mb-3">📊 Report History</h5>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>Date</th>
                <th>Status</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {reportHistory.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.status}</td>
                  <td>
                    <a href={entry.downloadLink} className="btn btn-sm btn-outline-secondary" download>
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}