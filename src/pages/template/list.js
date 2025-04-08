import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');

  const reports = [
    {
      id: 1,
      name: 'Juul Report',
      description: 'Track user engagement and activity levels on a monthly basis',
      createdDate: '1/14/2024',
      lastRun: '2/29/2024',
      schedule: 'Scheduled monthly at 09:00',
      status: 'Active',
      fields: ['name', 'email', 'isActive', 'joinDate'],
      link: '/template/example1',
    },
    {
      id: 2,
      name: 'Another report template',
      description: 'Daily report of new user registrations',
      createdDate: '1/31/2024',
      lastRun: '3/1/2024',
      schedule: 'Scheduled daily at 08:00',
      status: 'Active',
      fields: ['name', 'email', 'joinDate'],
      link: '/template/example2',
    },
    {
      id: 3,
      name: 'Another report template for users',
      description: 'Analysis of user age distribution',
      createdDate: '2/14/2024',
      lastRun: '2/29/2024',
      schedule: null,
      status: 'Paused',
      fields: ['name', 'age'],
      link: '/template/example3',
    },
  ];

  const filteredReports = reports.filter((report) =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="h3 mb-3">Available Report Templates</h1>

      <div className="container mt-4">
        <div className="mb-4">
          <input
            type="text"
            id="searchInput"
            className="form-control"
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            {filteredReports.map((report) => (
              <div className="report-card mb-4" key={report.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="fw-bold mb-1">{report.name}</h5>
                  <span className={`status-${report.status.toLowerCase()}`}>
                    {report.status === 'Active' ? '▶ Active' : '⏸️ Paused'}
                  </span>
                </div>
                <p className="text-muted small">{report.description}</p>
                <div className="d-flex text-muted small mb-2">
                  <span className="me-3">📅 Created {report.createdDate}</span>
                  {report.lastRun && (
                    <span className="me-3">⏱️ Last run {report.lastRun}</span>
                  )}
                  {report.schedule && <span>📆 {report.schedule}</span>}
                </div>
                <div className="mb-3">
                  {report.fields.map((field, index) => (
                    <span className="pill" key={index}>
                      {field}
                    </span>
                  ))}
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-light-gray btn-sm">
                    <Link href={report.link}>View Details</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}