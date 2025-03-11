import Link from "next/link";

export default function Page() {
  return (
    <div className="container mt-4">
      <Link className="text-secondary mb-3 d-inline-block" href="/report/list">
      ← Back to Reports List
      </Link>
      <div className="card-custom mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4 className="fw-bold mb-1">Age Demographics</h4>
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
          <div className="col-md-4">
            <div className="border p-3 rounded bg-light">
              <small className="text-muted">🔁 Schedule</small>
              <h6 className="fw-normal mt-1">Monthly At 09:00</h6>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-primary btn-sm me-2">▶ Run Now</button>
          <button className="btn btn-light-gray btn-sm">⚙️ Configure</button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card-custom mb-3">
            <h6 className="fw-bold mb-2">📋 Selected Fields</h6>
            <div>
              <span className="pill">name</span>
              <span className="pill">email</span>
              <span className="pill">isActive</span>
              <span className="pill">joinDate</span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-custom mb-3">
            <h6 className="fw-bold mb-2">📊 Filters</h6>
            <div className="text-muted">isActive <strong className="text-dark">equals</strong> true</div>
          </div>
        </div>
      </div>

      <div className="card-custom">
        <h6 className="fw-bold mb-3">🔄 Report History</h6>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Run Date</th>
              <th>Status</th>
              <th>Duration</th>
              <th>Size</th>
              <th>Format</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3/1/2024, 9:00:00 AM</td>
              <td><span className="badge-completed">✔️ completed</span></td>
              <td>2m 15s</td>
              <td>1.2MB</td>
              <td>CSV</td>
              <td><a href="#" className="text-primary">⬇ Download</a></td>
            </tr>
            <tr>
              <td>2/1/2024, 9:00:00 AM</td>
              <td><span className="badge-completed">✔️ completed</span></td>
              <td>2m 30s</td>
              <td>1.1MB</td>
              <td>CSV</td>
              <td><a href="#" className="text-primary">⬇ Download</a></td>
            </tr>
            <tr>
              <td>1/1/2024, 9:00:00 AM</td>
              <td><span className="badge-completed">✔️ completed</span></td>
              <td>2m 10s</td>
              <td>1.0MB</td>
              <td>CSV</td>
              <td><a href="#" className="text-primary">⬇ Download</a></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}