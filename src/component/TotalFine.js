import React from 'react';

const TotalFine = (props) => {
     console.log(props.studentdtl.length)
    const {studentdtl}=props 
    // Total Fine add     
     let total= 0;
     let name=[]
     for(const student of studentdtl){
        total= total+ student.fine
        name.push(student.name+ ' ')
        }
    
    return (
        <div>
            {/* total add to cart */}
            <h2> Total No of Student: {props.studentdtl.length}</h2>
         <p> Total Fine: {total} BDT</p>
         <p>Students Name:
             {name.toString()}
        </p>
        </div>
    );
};

export default TotalFine;