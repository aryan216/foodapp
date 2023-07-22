import {FaPizzaSlice,FaHamburger} from'react-icons/fa';
import {GiChopsticks,GiNoodles} from'react-icons/gi';
import React from 'react'

function Bc() {
  return (
    <div>
        <div>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </div>
        <div>
            <FaHamburger/>
            <h4>American</h4>
        </div>
        <div>
            <GiChopsticks/>
            <h4>Chinese</h4>
        </div>
        <div>
            <GiNoodles/>
            <h4>Thai</h4>
        </div>
    </div>
  )
}

export default Bc