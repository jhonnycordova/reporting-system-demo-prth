import Link from 'next/link';

export default function Page() {

  return (
    <div>
      <h1 className="h3 mb-3">ETL processes</h1>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th>Source Name</th>
            <th>Destination Name</th>
            <th>Frecuency</th>
            <th>Last Sync</th>
            <th>Enabled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div>
                  <Link href={'/etl/example1'} className="link-dark rounded">
                  MySQL Server to PRTH MySQL (Process 1)
                  </Link>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">MySQL Server</p>
            </td>
            <td>
                PRTH MySQL
            </td>
            <td>
              8 hours
            </td>
            <td>
                2021-08-31 12:00:00
            </td>
            <td>
              Yes
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div>
                  <Link href={'/etl/example2'} className="link-dark rounded">
                  MSSQL to SNOWFLAKE (Syncing Payment Data)
                  </Link>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">MSSQL</p>
            </td>
            <td>
            SNOWFLAKE PRTH (PRD)
            </td>
            <td>
              24 hours
            </td>
            <td>
                2021-08-31 12:00:00
            </td>
            <td>
              Yes
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
}

