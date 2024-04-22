import { Link, useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function SP_Manage() {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const data = useLoaderData();
  const handleDelete = (id, name) => {
    console.log("delete id " + id);
    Swal.fire({
      title: `Deleting specialty ${name}`,
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://127.0.0.1:8000/api/deleteSpecialty/${id}`, {
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
  if (navigation.state === "loading") {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-success " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="">
    <h4 className="text-center mb-2 roboto-medium">All Specialties</h4>
    {
      data.data.length === 0?
      <div className="alert alert-danger roboto-regular" role="alert">
        No Specialty found. <Link to={`/manage/sp-manage/create`} className="alert-link">Click here to add.</Link>
      </div>: 
      <table className="table table-striped text-center roboto-regular">
        <thead>
          <tr>
            <th>#Sl</th>
            <th>Specialty Name</th>
            <th>Specialty Code</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((sp, index) => (
            <tr key={sp.id}>
              <td>{index + 1}</td>
              <td>{sp.sp_name}</td>
              <td>{sp.sp_code}</td>
              <td>
                {sp.status === 1 ? (
                  <span className="badge bg-success">Active</span>
                ) : (
                  <span className="badge bg-danger">Inactive</span>
                )}
              </td>
              <td>
                <Link to={`/manage/sp-manage/update/${sp.id}`} className="btn btn-success mx-2">Update</Link>
                <button onClick={ () => { handleDelete(sp.id, sp.sp_name) }} className="btn btn-danger mx-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    }
      
      
    </div>
  );
}
