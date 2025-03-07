import Link from 'next/link';

export default function Page() {

  return (
    <div>
      <h1 className="h3 mb-3">Destinations</h1>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div>
                  <Link href={'/source/list'} className="link-dark rounded">
                    Cosmos MySQL DB
                  </Link>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">MYSQL</p>
            </td>
            <td>
              2021-08-31 12:00:00
            </td>
            <td>
              2021-08-31 12:00:00
            </td>
            <td>
              Active
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div>
                  <Link href={'/source/list'} className="link-dark rounded">
                    PRTH MySQL
                  </Link>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">MYSQL</p>
            </td>
            <td>
              2021-08-31 12:00:00
            </td>
            <td>
              2021-08-31 12:00:00
            </td>
            <td>
              Active
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div>
                  <Link href={'/source/list'} className="link-dark rounded">
                    SNOWFLAKE PRTH (PRD)
                  </Link>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">SNOWFLAKE</p>
            </td>
            <td>
              2021-08-31 12:00:00
            </td>
            <td>
              2021-08-31 12:00:00
            </td>
            <td>
              Active
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
}

