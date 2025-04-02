import Link from 'next/link';

export default function Page() {

  return (
    <div>
      <h1 className="h3 mb-3">Users</h1>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th>Roles</th>
            <th>Email</th>
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
                    Bocelli Hu
                  </Link>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">Admin, Creator </p>
            </td>
            <td>
             bocelli.hu@prth.com
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
                  Sriram Krishnamurthy
                  </Link>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">Admin, Creator </p>
            </td>
            <td>
               sriram.krishnamurthy@prth.com
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
                    Jhonny Cordova
                  </Link>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">Admin, Creator</p>
            </td>
            <td>
                ctr.jhonny.cordova@prth.com
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
                    Kayode Mears
                  </Link>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">Creator</p>
            </td>
            <td>
            ctr.kayode.mears@prth.com
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

