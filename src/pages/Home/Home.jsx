import { useLoaderData, useNavigate } from "react-router-dom";
import "./Home.css";
import { convertMonthInputToReadableFormat } from "../../utils/utils";
import { toast } from "react-toastify";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const sessions = useLoaderData();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const session = form.session.value;
    const status = form.status.value;
    const data = {
      session: convertMonthInputToReadableFormat(session),
      status: status,
    };
    fetch(`http://127.0.0.1:8000/api/addSession`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) =>
      response.json().then((result) => {
        if (result.status === true) {
          toast.success(result.message);
          navigate("/");
          setLoading(false);
          // console.log("success result ", result);
        } else if (result.status === false) {
          setLoading(false);
          toast.error(result.message);
          // console.log("error result ", result);
        }
      })
    );
  };
  const handleInactive = (id, name) => {
    Swal.fire({
      title: `Inactivating Session ${name}`,
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, inactive it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://127.0.0.1:8000/api/updateSession/${id}`, {
          method: "POST",
        })
        .then(response => response.json())
        .then(data => {
          Swal.fire({
            title: "Inactivated!",
            text: data.message,
            icon: "success"
          });
        })
        .catch(error => {
          toast.error(error);
        });
      }
    });
  }
  if (sessions.data.length === 0) {
    return (
      <>
        <div className="container">
          <h3 className="roboto-heavy">Exam Sessions</h3>
          <div className="alert alert-danger roboto-regular" role="alert">
            No Sessions found.
            {/* <Link to={`/manage/sp-manage/create`} className="alert-link">Click here to add.</Link> */}
            <button
              type="button"
              className="alert-link fw-bolder"
              data-toggle="modal"
              data-target="#exampleModal"
              data-whatever="@mdo"
            >
              Click here to add.
            </button>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  New session
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Session:
                    </label>
                    <input
                      type="month"
                      className="form-control"
                      id="recipient-name"
                      name="session"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      Status:
                    </label>
                    <select name="status" id="" className="form-control">
                      <option value="1">Active</option>
                      <option value="0">Inactive</option>
                    </select>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      {loading ? "Adding..." : "Add"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <h4 className="roboto-medium text-center my-2">Exam Sessions</h4>
        <div className="alert alert-warning roboto-regular" role="alert">
          {/* <Link to={`/manage/sp-manage/create`} className="alert-link">Click here to add.</Link> */}
          <button
            type="button"
            className="alert-link fw-bolder"
            data-toggle="modal"
            data-target="#exampleModal"
            data-whatever="@mdo"
          >
            Click here to add new session.
          </button>
        </div>
        <table className="table text-center table-striped">
          <thead>
            <tr>
              <th>#SL</th>
              <th>Session</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sessions.data.map((session, index) => (
              <tr key={session.id}>
                <td>{index + 1}</td>
                <td>{session.session}</td>
                <td>
                  {session.status ? (
                    <p className="badge bg-success">Current Session</p>
                  ) : (
                    <p className="badge bg-danger">Expired Session</p>
                  )}
                </td>
                <td>
                  <button className="btn btn-warning text-white mx-1">View</button>
                  {session.status === 1 ? (
                    
                    <button className="btn btn-danger text-white mx-1" onClick={() => { handleInactive(session.id, session.session) }}>Make inactive</button>
                  ) : (
                    <p className="badge bg-success"></p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New session
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Session:
                  </label>
                  <input
                    type="month"
                    className="form-control"
                    id="recipient-name"
                    name="session"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Status:
                  </label>
                  <select name="status" id="" className="form-control">
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {loading ? "Adding..." : "Add"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
