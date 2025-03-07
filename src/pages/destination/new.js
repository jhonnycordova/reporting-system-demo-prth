import { useState } from 'react';

function MySQLForm () {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor={'host'} className="form-label">Host</label>
        <input type="text" className="form-control" name="host" id="host" />
      </div>
      <div className="mb-3">
        <label htmlFor={'port'} className="form-label">Port</label>
        <input type="text" className="form-control" name="port" id="port" />
      </div>
      <div className="mb-3">
        <label htmlFor={'database'} className="form-label">Database</label>
        <input type="text" className="form-control" name="database" id="database" />
      </div>
      <div className="mb-3">
        <label htmlFor={'username'} className="form-label">Username</label>
        <input type="text" className="form-control" name="username" id="username" />
      </div>
      <div className="mb-3">
        <label htmlFor={'password'} className="form-label">Password</label>
        <input type="password" className="form-control" name="password" id="password" />
      </div>
    </div>
  );

}

function ElasticSearchForm () {
  const [authenticationMethod, setAuthenticationMethod] = useState('None');
  const handleAuthenticationMethodChange = (e) => {
    setAuthenticationMethod(e.target.value);
  }
  return (
    <div>
      <div className="mb-3">
        <label htmlFor={'authenticationMethod'} className="form-label">Authentication Method</label>
        <select className="form-select" name="authenticationMethod" id="authenticationMethod" value={authenticationMethod} onChange={handleAuthenticationMethodChange}>
          <option key="1" value="None">None</option>
          <option key="2" value="key-secret">Api Key/Secret</option>
          <option key="3" value="username-password">Username/password</option>
        </select>
      </div>

      {authenticationMethod === 'key-secret' && (
        <div>
          <div className="mb-3">
            <label htmlFor={'apiKey'} className="form-label">API Key</label>
            <input type="text" className="form-control" name="api-key" id="api-key" />
          </div>
          <div className="mb-3">
            <label htmlFor={'apiSecret'} className="form-label">API Secret</label>
            <input type="text" className="form-control" name="api-secret" id="api-secret" />
          </div>
        </div>
      )}

      {authenticationMethod === 'username-password' && (
        <div>
          <div className="mb-3">
            <label htmlFor={'username'} className="form-label">Username</label>
            <input type="text" className="form-control" name="username" id="username" />
          </div>
          <div className="mb-3">
            <label htmlFor={'password'} className="form-label">Password</label>
            <input type="password" className="form-control" name="password" id="password" />
          </div>
        </div>
      )}

      <div className="mb-3">
        <label htmlFor={'serverEndpoint'} className="form-label">Server Endpoint</label>
        <input type="text" className="form-control" name="serverEndpoint" id="serverEndpoint" />
      </div>
    </div>
  );

}

function KafkaForm () {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor={'bootstrapServers'} className="form-label">Bootstrap Servers</label>
        <input type="text" className="form-control" name="bootstrapServers" id="bootstrapServers" />
      </div>
      <div className="mb-3">
        <label htmlFor={'topic'} className="form-label">Topic</label>
        <input type="text" className="form-control" name="topic" id="topic" />
      </div>
      <div className="mb-3">
        <label htmlFor={'messageFormat'} className="form-label">Message Format</label>
        <select className="form-select" name="messageFormat" id="messageFormat">
          <option key="1" value="JSON">JSON</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor={'protocol'} className="form-label">Protocol</label>
        <select className="form-select" name="protocol" id="protocol">
          <option key="1" value="JSON">PLAINTEXT</option>
        </select>
      </div>
    </div>
  );
}

function SnowflakeForm () {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor={'account'} className="form-label">Account</label>
        <input type="text" className="form-control" name="account" id="account" />
      </div>
      <div className="mb-3">
        <label htmlFor={'warehouse'} className="form-label">Warehouse</label>
        <input type="text" className="form-control" name="warehouse" id="warehouse" />
      </div>
      <div className="mb-3">
        <label htmlFor={'role'} className="form-label">Role</label>
        <input type="text" className="form-control" name="role" id="role" />
      </div>
      <div className="mb-3">
        <label htmlFor={'database'} className="form-label">Database</label>
        <input type="text" className="form-control" name="database" id="database" />
      </div>
      <div className="mb-3">
        <label htmlFor={'username'} className="form-label">Username</label>
        <input type="text" className="form-control" name="username" id="username" />
      </div>
      <div className="mb-3">
        <label htmlFor={'password'} className="form-label">Password</label>
        <input type="password" className="form-control" name="password" id="password" />
      </div>
    </div>
  );

}

function FilesForm () {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor={'datasetName'} className="form-label">DataSet name</label>
        <input type="text" className="form-control" name="datasetName" id="datasetName" />
      </div>
      <div className="mb-3">
        <label htmlFor={'format'} className="form-label">Format</label>
        <select className="form-select" name="format" id="format">
          <option key="1" value="CSV">CSV</option>
          <option key="2" value="JSON">JSON</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor={'url'} className="form-label">URL</label>
        <input type="text" className="form-control" name="url" id="url" />
      </div>
    </div>
  );
}

export default function Page() {
  const [type, setType] = useState('MYSQL');

  const handleTypeChange = (e) => {
    setType(e.target.value);
  }

  return (
    <div className="container">
      <h2 className="my-4">
        Create Destination
      </h2>
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={() => { }} noValidate>

            <div className="mb-3">
              <label htmlFor={'type'} className="form-label">Type</label>
              <select className="form-select" name="type" id="type" value={type} onChange={handleTypeChange}>
                <option key="1" value="MYSQL">MYSQL</option>
                <option key="2" value="MSSQL">MSSQL</option>
                <option key="3" value="ELASTICSEARCH">ELASTICSEARCH</option>
                <option key="4" value="KAFKA">KAFKA</option>
                <option key="5" value="SNOWFLAKE">SNOWFLAKE</option>
                <option key="6" value="Files">Files</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor={'name'} className="form-label">Source name</label>
              <input type="text" className="form-control" name="name" id="name" />
            </div>

            <p className="fw-bold">Connection details</p>
            <hr />
            {type === 'MYSQL' && <MySQLForm />}
            {type === 'MSSQL' && <MySQLForm />}
            {type === 'ELASTICSEARCH' && <ElasticSearchForm />}
            {type === 'KAFKA' && <KafkaForm />}
            {type === 'SNOWFLAKE' && <SnowflakeForm />}
            {type === 'Files' && <FilesForm />}


            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </form>
        </div>


      </div>
    </div>
  );
}

