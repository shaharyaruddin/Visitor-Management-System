import React from 'react';

function MainScreen() {
  return (
    <div className="container">
      <div className="my-4">
        <h3 className="mb-3">Your Visits</h3>
        <p>View or edit details of the visitors you're hosting.</p>
        <div className="d-flex align-items-center my-3">
          <input type="text" className="form-control me-3" placeholder="Enter visitor name" />
          <button className="btn btn-primary ">Create Request</button>
          <button className="ms-3 btn btn-warning ">Request Visit</button>
        </div>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Visitor name</th>
              <th>Arrival time</th>
              <th>Purpose</th>
              <th>Action</th>
              <th>Details</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default MainScreen;
