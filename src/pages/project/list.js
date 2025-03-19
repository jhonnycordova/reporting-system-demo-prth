import Link from 'next/link';

export default function Page() {

  return (
    <div>
      <h1 className="h3 mb-3">Projects</h1>
      <div>

        <div className="card-custom mb-2">
            <div className="d-flex justify-content-between align-items-center">
            <div>
                <h4 className="fw-bold mb-1">Jewel Project</h4>
                <p className="text-muted">This project is for the Jewel group</p>
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
            <div className="col-md-2">
                <div className="border p-3 rounded bg-light">
                <small className="text-muted">⏱️ Reports</small>
                <h6 className="fw-normal mt-1">Jewel Report</h6>
                <h6 className="fw-normal mt-1">Obsidian Report</h6>
                </div>
            </div>
            <div className="col-md-6">
                <div className="border p-3 rounded bg-light">
                    <small className="text-muted"> Users</small>
                    <div className="card bg-light mb-3">
                        <div className="card-header">Bocelli Hu</div>
                        <div className="card-body">
                            <p className="card-text">Admin, Editor, Viewer</p>
                        </div>                            
                    </div>
                    <div className="card bg-light mb-3">
                        <div className="card-header">Sriram Krishnamurthy</div>
                        <div className="card-body">
                            <p className="card-text">Admin, Viewer</p>
                        </div>                            
                    </div>
                </div>
            </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-success btn-sm me-2">Update</button>
            <button className="btn btn-danger btn-sm">Delete</button>
            </div>
        </div>
        <div className="card-custom mb-2">
            <div className="d-flex justify-content-between align-items-center">
            <div>
                <h4 className="fw-bold mb-1">MXC Project</h4>
                <p className="text-muted">This project is for MXC</p>
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
            <div className="col-md-2">
                <div className="border p-3 rounded bg-light">
                <small className="text-muted">⏱️ Reports</small>
                <h6 className="fw-normal mt-1">MXC Report 1</h6>
                <h6 className="fw-normal mt-1">MXC Report 2</h6>
                </div>
            </div>
            <div className="col-md-6">
                <div className="border p-3 rounded bg-light">
                    <small className="text-muted"> Users</small>
                    <div className="card bg-light mb-3">
                        <div className="card-header">Kayode Mears</div>
                        <div className="card-body">
                            <p className="card-text">Admin, Editor, Viewer</p>
                        </div>                            
                    </div>
                    <div className="card bg-light mb-3">
                        <div className="card-header">Jhonny Cordova</div>
                        <div className="card-body">
                            <p className="card-text">Admin, Viewer</p>
                        </div>                            
                    </div>
                </div>
            </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-success btn-sm me-2">Update</button>
            <button className="btn btn-danger btn-sm">Delete</button>
            </div>
        </div>
      </div>
      <br />
    </div>
    
  );
}

