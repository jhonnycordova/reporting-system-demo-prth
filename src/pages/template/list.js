import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [creatorFilter, setCreatorFilter] = useState('');
  const [createdDateFilter, setCreatedDateFilter] = useState('');
  const [updatedDateFilter, setUpdatedDateFilter] = useState('');

  const reports = [
    {
      id: 1,
      name: 'Juul Template',
      description: 'Track user engagement and activity levels on a monthly basis',
      createdDate: '1/14/2024',
      updatedDate: '2/28/2024',
      lastRun: '2/29/2024',
      schedule: 'Scheduled monthly at 09:00',
      status: 'Active',
      creator: 'Alice',
      fields: ['name', 'email', 'isActive', 'joinDate'],
      link: '/template/example1',
    },
    {
      id: 2,
      name: 'Another report template',
      description: 'Daily report of new user registrations',
      createdDate: '1/31/2024',
      updatedDate: '2/15/2024',
      lastRun: '3/1/2024',
      schedule: 'Scheduled daily at 08:00',
      status: 'Active',
      creator: 'Bob',
      fields: ['name', 'email', 'joinDate'],
      link: '/template/example2',
    },
    {
      id: 3,
      name: 'Another report template for users',
      description: 'Analysis of user age distribution',
      createdDate: '2/14/2024',
      updatedDate: '2/20/2024',
      lastRun: '2/29/2024',
      schedule: null,
      status: 'Paused',
      creator: 'Charlie',
      fields: ['name', 'age'],
      link: '/template/example3',
    },
  ];

  // Utilidad para formatear input date (YYYY-MM-DD) a M/D/YYYY
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  const filteredReports = reports.filter((report) => {
    const matchesName = report.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCreator = report.creator?.toLowerCase().includes(creatorFilter.toLowerCase());
    const matchesCreatedDate = createdDateFilter
      ? report.createdDate === formatDate(createdDateFilter)
      : true;
    const matchesUpdatedDate = updatedDateFilter
      ? report.updatedDate === formatDate(updatedDateFilter)
      : true;

    return matchesName && matchesCreator && matchesCreatedDate && matchesUpdatedDate;
  });

  return (
    <div>
      <h1 className="h3 mb-3">Available Report Templates</h1>

      <div className="container mt-4">
        {/* Search & Filters */}
        <div className="mb-4">
          <div className="row g-3">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Filter by creator..."
                value={creatorFilter}
                onChange={(e) => setCreatorFilter(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="date"
                className="form-control"
                placeholder="Created date"
                value={createdDateFilter}
                onChange={(e) => setCreatedDateFilter(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="date"
                className="form-control"
                placeholder="Updated date"
                value={updatedDateFilter}
                onChange={(e) => setUpdatedDateFilter(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Report Cards */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            {filteredReports.map((report) => (
              <div className="report-card mb-4 border rounded p-3 bg-white shadow-sm" key={report.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="fw-bold mb-1">{report.name}</h5>
                </div>
                <p className="text-muted small mb-1">{report.description}</p>
                <div className="text-muted small mb-2">
                  <span className="me-3">📅 Created {report.createdDate}</span>
                  <span className="me-3">🛠️ Updated {report.updatedDate}</span>
                  {/* {report.lastRun && (
                    <span className="me-3">⏱️ Last run {report.lastRun}</span>
                  )} */}
                  <span className="me-3">👤 {report.creator}</span>
                </div>
                <div className="mb-3">
                  {report.fields.map((field, index) => (
                    <span className="badge bg-light text-dark me-2" key={index}>
                      {field}
                    </span>
                  ))}
                </div>
                <div className="d-flex justify-content-end">
                  <Link href={report.link} className="btn btn-outline-primary btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}