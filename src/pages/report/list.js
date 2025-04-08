import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');

  const reports = [
    {
      name: 'Report 1',
      template: 'TEMPLATE A',
      deliveryMethod: 'Email',
      updatedAt: '2021-08-31 12:00:00',
      status: 'Active',
      link: '/report/example1',
    },
    {
      name: 'Report 2',
      template: 'TEMPLATE B',
      deliveryMethod: 'SFTP',
      updatedAt: '2021-09-01 14:30:00',
      status: 'Inactive',
      link: '/report/example2',
    },
    {
      name: 'Report 3',
      template: 'TEMPLATE C',
      deliveryMethod: 'Slack',
      updatedAt: '2021-09-02 10:15:00',
      status: 'Active',
      link: '/report/example3',
    },
  ];

  const filteredReports = reports.filter((report) =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="h3 mb-3">Report List</h1>

      {/* Search Input */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Reports Table */}
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th>Template</th>
            <th>Delivery Method</th>
            <th>Updated At</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredReports.map((report, index) => (
            <tr key={index}>
              <td>
                <div className="d-flex align-items-center">
                  <div>
                    <Link href={report.link} className="link-dark rounded">
                      {report.name}
                    </Link>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{report.template}</p>
              </td>
              <td>{report.deliveryMethod}</td>
              <td>{report.updatedAt}</td>
              <td>{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}