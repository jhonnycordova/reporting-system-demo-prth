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
      

      {/* Filtros adicionales (HTML visual, sin lógica) */}
      <div className="row g-3 mb-4">
      <div className="mb-3 col-md-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Filter by creator..." />
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option value="">Frequency</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="col-md-2">
          <input type="date" className="form-control" placeholder="Created date" />
        </div>
        <div className="col-md-2">
          <input type="date" className="form-control" placeholder="Updated date" />
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option value="">Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option value="">Delivery Method</option>
            <option value="email">Email</option>
            <option value="sftp">SFTP</option>
            <option value="slack">Slack</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select">
            <option value="">Template</option>
            <option value="template-a">TEMPLATE A</option>
            <option value="template-b">TEMPLATE B</option>
            <option value="template-c">TEMPLATE C</option>
          </select>
        </div>
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