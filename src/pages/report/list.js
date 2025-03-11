import Link from 'next/link';

export default function Page() {

  return (
    <div>
      <h1 className="h3 mb-3">Available Reports</h1>
      
      <div className="container mt-4">
      <div class="mb-4">
            <input type="text" id="searchInput" class="form-control" placeholder="Search reports..." onkeyup="filterReports()" />
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-12">

                
                <div className="report-card mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold mb-1">Monthly User Activity</h5>
                        <span className="status-active">▶ Active</span>
                    </div>
                    <p className="text-muted small">Track user engagement and activity levels on a monthly basis</p>
                    <div className="d-flex text-muted small mb-2">
                        <span className="me-3">📅 Created 1/14/2024</span>
                        <span className="me-3">⏱️ Last run 2/29/2024</span>
                        <span>📆 Scheduled monthly at 09:00</span>
                    </div>
                    <div className="mb-3">
                        <span className="pill">name</span>
                        <span className="pill">email</span>
                        <span className="pill">isActive</span>
                        <span className="pill">joinDate</span>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary btn-sm me-2">Run Now</button>
                        <button className="btn btn-light-gray btn-sm">
                        <Link href="/report/example1">
                          View Details
                        </Link>
                        </button>
                    </div>
                </div>

                
                <div className="report-card mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold mb-1">New Users Report</h5>
                        <span className="status-active">▶ Active</span>
                    </div>
                    <p className="text-muted small">Daily report of new user registrations</p>
                    <div className="d-flex text-muted small mb-2">
                        <span className="me-3">📅 Created 1/31/2024</span>
                        <span className="me-3">⏱️ Last run 3/1/2024</span>
                        <span>📆 Scheduled daily at 08:00</span>
                    </div>
                    <div className="mb-3">
                        <span className="pill">name</span>
                        <span className="pill">email</span>
                        <span className="pill">joinDate</span>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary btn-sm me-2">Run Now</button>
                        <button className="btn btn-light-gray btn-sm">
                        <Link href="/report/example2">
                          View Details
                        </Link>
                        </button>
                    </div>
                </div>

                
                <div className="report-card">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold mb-1">Age Demographics</h5>
                        <span className="status-paused">⏸️ Paused</span>
                    </div>
                    <p className="text-muted small">Analysis of user age distribution</p>
                    <div className="d-flex text-muted small mb-2">
                        <span className="me-3">📅 Created 2/14/2024</span>
                        <span>⏱️ Last run 2/29/2024</span>
                    </div>
                    <div className="mb-3">
                        <span className="pill">name</span>
                        <span className="pill">age</span>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary btn-sm me-2">Run Now</button>
                        <button className="btn btn-light-gray btn-sm">
                        <Link href="/report/example3">
                          View Details
                        </Link>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
  );
}

