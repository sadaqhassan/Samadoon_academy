import React from 'react'
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getTeachersData ,deleteTeacher} from '../Store/TeacherSlice';
import { useState } from 'react';

function Teachers() {
  const {teachers} = useSelector((state)=>state.teachers);
  const [searched,setSearched] = useState([]);
  const dispatch = useDispatch()
  const getData = async () => {
    const res = await  fetch("http://localhost:2000/api/teacher/get",{
      method:"GET",
      credentials:"include"
    });
    const data = await res.json();

    if(!data.success){
      toast.error(data.message);
    }

    dispatch(getTeachersData(data.data));
    toast.success(data.message);

    console.log(data)
  }

  useEffect(()=>{
    getData()
  },[])

  const [searchQuery,setSearchQuery] = useState("");

  useEffect(()=>{
    if(searchQuery.length > 0){
      setSearched(teachers.filter((teacher)=>teacher.teachers_name.toLowerCase().startsWith(searchQuery.toLowerCase()))
    )
  }else{
    setSearched(teachers);
  }
},[searchQuery,teachers]);
  //delete teacher

  const handleDelete = async(id)=>{
    try {
      const res = await fetch(`http://localhost:2000/api/teacher/delete/${id}`,{
        method:"DELETE",
        credentials:"include"
      });
      const data = await res.json();
      if(!data.success){
        return toast.error(data.message);
      }
      dispatch(deleteTeacher(id));
      toast.success(data.message)
    } catch (error) {
      toast.error(error.message);
      console.log(error)
    }
  }


  return (
    <div className="mt-10 bg-white p-4 sm:p-6 rounded-2xl shadow-md">
  
  {/* Header */}
  <div className="flex flex-col sm:flex-row justify-between gap-3 sm:items-center mb-5">
    <h2 className="text-lg sm:text-xl font-semibold">Teachers</h2>

    <div className="flex gap-2 w-full sm:w-auto">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e)=>setSearchQuery(e.target.value)}
        className="border px-3 py-1 rounded-lg outline-none text-sm w-full sm:w-auto"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
        + Add
      </button>
    </div>
  </div>

  {/* Table */}
  <div className="overflow-x-auto">
    <table className="min-w-[700px] w-full text-sm text-left">
      
      {/* Desktop Header */}
      <thead className="bg-gray-100 text-gray-600 uppercase text-xs hidden sm:table-header-group">
        <tr>
          <th className="px-4 py-3">Id</th>
          <th className="px-4 py-3">Name</th>
          <th className="px-4 py-3">Email</th>
          <th className="px-4 py-3">Phone</th>
          <th className="px-4 py-3">Status</th>
          <th className="px-4 py-3 text-center">Actions</th>
        </tr>
      </thead>

      <tbody className="divide-y">
        {
          searched && searched.length > 0 ? 
          
          searched.map((item) => (
            <tr
              key={item._id}
              className="block sm:table-row border sm:border-0 mb-4 sm:mb-0 rounded-xl sm:rounded-none p-3 sm:p-0 shadow sm:shadow-none"
            >
              
              {/* ID */}
              <td className="px-2 py-2 sm:px-4 sm:py-3 flex justify-between sm:table-cell">
                <span className="sm:hidden font-medium">Id</span>
                {item.id}
              </td>

              {/* Name */}
              <td className="px-2 py-2 sm:px-4 sm:py-3 flex justify-between sm:table-cell">
                <span className="sm:hidden font-medium">Name</span>
                {item.teachers_name}
              </td>

              {/* Email */}
              <td className="px-2 py-2 sm:px-4 sm:py-3 flex justify-between sm:table-cell">
                <span className="sm:hidden font-medium">Email</span>
                {item.teachers_email}
              </td>

              {/* Phone */}
              <td className="px-2 py-2 sm:px-4 sm:py-3 flex justify-between sm:table-cell">
                <span className="sm:hidden font-medium">Phone</span>
                {item.phone_number}
              </td>

              {/* Status */}
              <td className="px-2 py-2 sm:px-4 sm:py-3 flex justify-between sm:table-cell">
                <span className="sm:hidden font-medium">Status</span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                  Active
                </span>
              </td>

              {/* Actions */}
              <td className="px-2 py-2 sm:px-4 sm:py-3 flex justify-between sm:table-cell">
                <span className="sm:hidden font-medium">Actions</span>

                <div className="flex gap-3">
                  <button className="text-blue-600 text-sm">Update</button>
                  <button className="text-red-500 text-sm" onClick={()=>handleDelete(item._id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))
        : (
          <tr>
            <td colSpan="6" className="text-center py-5 text-gray-500">
              No data available
            </td>
          </tr>
        )
        }
      </tbody>
    </table>
  </div>
</div>
  )
}

export default Teachers