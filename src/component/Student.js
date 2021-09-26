import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowCircleDown  } from '@fortawesome/free-solid-svg-icons'
import './Student.css'


// Student Cart data 

const Student = (props) => {
    const element = <FontAwesomeIcon icon={faArrowCircleDown} />
   const {name,age,home,pic,father,mother,fine} = props.student
    return (
        <div className="student-container">
            <img className='student-img' src={pic} alt="" />
            <p>Name: {name}</p>
            <p>Father Name:{father}</p>
            <p>Mother Name:{mother}</p>
            <p>Home:{home}</p>
            <p>Fine Amount: { fine}</p>
            <button onClick={()=> props.addFine(props.student)} className='student-btn'> {element}Add Fine</button>
            {/* <p className=''></p> */}
             <br />
             <p class="fab fa-facebook"></p>
            <i  id='fbicon'></i>
            <i class="fab fa-facebook-messenger"></i>


        </div>
    );
};

export default Student;