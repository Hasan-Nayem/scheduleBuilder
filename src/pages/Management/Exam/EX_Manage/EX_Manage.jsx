import React from 'react'
import { Link } from 'react-router-dom'

export default function EX_Manage() {
  return (
    <div className='container'>
      <h4 className='fw-bolder roboto-medium text-left'>Manage Exam</h4>
      <table className='table table-responsive table-success text-center'>
        <thead>
          <tr>
            <th>#SL</th>
            <th>Exam Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>FCPS (FINAL)</td>
            <td>
              <p className='badge bg-success'>Active</p>
            </td>
            <td>
              <Link className='btn btn-warning text-white ms-1'>Update</Link>
              <Link className='btn btn-danger text-white ms-1'>Delete</Link>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Preliminary FCPS </td>
            <td>
              <p className='badge bg-success'>Active</p>
            </td>
            <td>
              <Link className='btn btn-warning text-white ms-1'>Update</Link>
              <Link className='btn btn-danger text-white ms-1'>Delete</Link>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td> MCPS </td>
            <td>
              <p className='badge bg-success'>Active</p>
            </td>
            <td>
              <Link className='btn btn-warning text-white ms-1'>Update</Link>
              <Link className='btn btn-danger text-white ms-1'>Delete</Link>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>FCPS Part-I</td>
            <td>
              <p className='badge bg-success'>Active</p>
            </td>
            <td>
              <Link className='btn btn-warning text-white ms-1'>Update</Link>
              <Link className='btn btn-danger text-white ms-1'>Delete</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
