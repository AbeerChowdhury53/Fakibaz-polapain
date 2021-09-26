import React, { useEffect, useState } from 'react';
import Student from './Student';

import './Studentdata.css';
import TotalFine from './TotalFine';

const Studentdata = () => {
const [students, setStudents]= useState([]);
const [studentdtl , setStudentdtl] = useState([])
// console.log(studentdtl)
useEffect(()=>{
    fetch('./student.JSON')
    .then(res => res.json())
    .then(data => setStudents(data))
},[])

const addFine = (student) =>{
    // console.log(student.fine)
    // return 5
 const newFine = [...studentdtl, student]
 setStudentdtl(newFine);

}




    return (
        <div className="container">
            <div className='student-cart'>
            {/* <h2>Test data {students.length} </h2> */}
            {
               students.map(student => <Student 
                key={student.id}
                student={student}
                addFine={addFine} ></Student>) 
               
            }
            </div>
            
            <div className="fineBox">
                <TotalFine studentdtl={studentdtl} ></TotalFine>
            </div>
            
        </div>
        
    );
};

export default Studentdata;