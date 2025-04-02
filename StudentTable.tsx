import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStudents, deleteStudent } from '../store/studentSlice';
import studentData from '../data/students_data.json'; // Adjust path as necessary
import '../index.css'; // Import the CSS file

const StudentTable: React.FC = () => {
  const dispatch = useDispatch();
  const students = useSelector((state: any) => state.students.students);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(5);

  useEffect(() => {
    // Any side effects or logic can go here
  }, [dispatch]);

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  return (
    <div>
      <div>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student: { name: string; age: number; id: number }, index: number) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <button onClick={() => dispatch(deleteStudent(student.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        </div>
      </div>
    );
  };

  export default StudentTable;