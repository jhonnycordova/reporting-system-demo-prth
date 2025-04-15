import Link from 'next/link';

export default function Page() {

  return (
    <div>
      <h1 className="h3 mb-3">Projects</h1>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Name</th>
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
                    Project 1
                  </Link>
                </div>
              </div>
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
                  Project 2
                  </Link>
                </div>
              </div>
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
                    Project 3
                  </Link>
                </div>
              </div>
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

