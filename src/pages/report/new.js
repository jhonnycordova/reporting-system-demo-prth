
export default function Page() {
  return (
    <div className="container mt-4">
        <div className="card-custom">
            <h4 className="fw-bold mb-3">📋 Report Builder</h4>

            <input type="text" className="form-control mb-3" placeholder="Report Name" />
            <textarea className="form-control mb-3" placeholder="Report Description"></textarea>
            <textarea className="form-control mb-3" placeholder="SQL Code" rows="4"></textarea>

            <ul className="nav nav-tabs" id="reportTabs">
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#fieldsTab">Fields</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#filtersTab">Filters</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#scheduleTab">Schedule</a>
                </li>
            </ul>

            <div className="tab-content mt-3">
  
                <div className="tab-pane fade show active" id="fieldsTab">
                    <h6 className="fw-bold mb-2">Select Fields</h6>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="fieldName" />
                                <label className="form-check-label" for="fieldName">Name</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="fieldAge" />
                                <label className="form-check-label" for="fieldAge">Age</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="fieldIsActive" />
                                <label className="form-check-label" for="fieldIsActive">Is Active</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="fieldEmail" />
                                <label className="form-check-label" for="fieldEmail">Email</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="fieldJoinDate" />
                                <label className="form-check-label" for="fieldJoinDate">Join Date</label>
                            </div>
                        </div>
                    </div>
                </div>

  
                <div className="tab-pane fade" id="filtersTab">
                    <h6 className="fw-bold mb-2">Add Filters</h6>
                    <div className="row">
                        <div className="col-md-4">
                            <select className="form-select">
                                <option selected>Select Field</option>
                                <option>Name</option>
                                <option>Age</option>
                                <option>Is Active</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select className="form-select">
                                <option selected>Select Condition</option>
                                <option>Equals</option>
                                <option>Not Equals</option>
                                <option>Greater Than</option>
                                <option>Less Than</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Enter value" />
                        </div>
                    </div>
                </div>

  
                <div className="tab-pane fade" id="scheduleTab">
                    <h6 className="fw-bold mb-2">Schedule Report</h6>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="form-label">Frequency</label>
                            <select className="form-select">
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Time</label>
                            <input type="time" className="form-control" />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Recipients</label>
                        <input type="text" className="form-control" placeholder="Enter email addresses separated by commas" />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
                <button className="btn btn-light-gray btn-sm me-2">💾 Save Configuration</button>
                <button className="btn btn-primary btn-sm">▶ Generate Report</button>
            </div>
        </div>
    </div>
  );
}