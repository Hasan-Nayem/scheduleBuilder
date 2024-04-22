import { Link, useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function EX_Manage() {
  const exams = useLoaderData();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const handleDelete = (id, name) => {
    console.log("delete id " + id);
    Swal.fire({
      title: `Deleting exam ${name}`,
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://127.0.0.1:8000/api/deleteExam/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(result => result.json())
        .then(response => {
          if(response.status === true){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            setInterval(() => {
              navigate(0);
            }, 1000);
          }
        })
        .catch(err => {
          toast.error(err);
        });
      }
    });
  }
  return (
    <div className="container">
      <h4 className="fw-bolder roboto-medium text-left">Manage Exam</h4>
      {exams.data.length === 0 ? (
        <div className="alert alert-danger" role="alert">
          No Exam found.{" "}
          <Link to={`/manage/ex-manage/create`} className="alert-link">
            Click here to add.
          </Link>
        </div>
      ) : (
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th>#SL</th>
              <th>Exam Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exams.data.map((exam, index) => (
              <tr key={exam.id}>
                <td>{index + 1}</td>
                <td>{exam.name}</td>
                <td>
                  {exam.status === 1 ? (
                    <p className="badge bg-success">Active</p>
                  ) : (
                    <p className="badge bg-danger">Inactive</p>
                  )}
                </td>
                <td>
                  <Link to={`/manage/ex-manage/update/${exam.id}`} className="btn btn-success text-white ms-1">
                    Update
                  </Link>
                  <button className="btn btn-danger text-white ms-1" onClick={()=> {handleDelete(exam.id, exam.name)}} >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
