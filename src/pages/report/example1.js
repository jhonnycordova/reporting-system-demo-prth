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
          <button className="btn btn-primary btn-sm me-2">▶ Generate Report</button>
        </div>
      </div>

    </div>
  );
}