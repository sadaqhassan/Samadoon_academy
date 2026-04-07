import React from 'react'
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getTeachersData } from '../Store/TeacherSlice';

function Teachers() {
  const {teachers} = useSelector((state)=>state.teachers);
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

  
  return (
    <div className=' max-w-6xl'>
      <table  border="1" cellPadding="10"  cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead className='bg-gray-100 border-b gap-10 px-5 '>
          <tr className=' max-w-6xl'>
            <th className='px-4 py-2 text-start'>ID</th>
            <th className='px-4 py-2 text-start'>Name</th>
            <th className='px-4 py-2 text-start'>Email</th>
            <th className='px-4 py-2 text-start'>Phone</th>
          </tr>
        </thead>
        <tbody className='bg-gray-100 border-b gap-10 px-5  max-w-6xl'>
          {teachers ? 
          teachers.map((item) => (
            <tr key={item.id} className=''>
              <td  className='px-4 py-2 text-start border-b'>{item.id}</td>
              <td  className='px-4 py-2 text-start border-b'>{item.teachers_name}</td>
              <td  className='px-4 py-2 text-start border-b'>{item.teachers_email}</td>
              <td  className='px-4 py-2 text-start border-b'>{item.phone_number}</td>
            </tr>
          ))
          :
        <h1>Sorry no data is ready</h1>
        }
        </tbody>
      </table>
    </div>
  )
}

export default Teachers