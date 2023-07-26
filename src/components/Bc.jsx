import {FaPizzaSlice,FaHamburger} from'react-icons/fa';
import {BiSolidBowlRice} from'react-icons/bi';

import {GiChopsticks,GiNoodles} from'react-icons/gi';
import {styled} from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react'

function Bc() {
  return (
    <List>
        <Slink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </Slink>
        <Slink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </Slink>
        <Slink to={'/cuisine/Chinese'}>
            <GiChopsticks/>
            <h4>Chinese</h4>
        </Slink>
        <Slink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </Slink>
        <Slink to={'/cuisine/Indian'}>
            <BiSolidBowlRice/>
            <h4>Indian</h4>
        </Slink>
    </List>
  )
}
const List=styled.div`
    display:flex;
    justify-content:center;
    margin: 2rem 0rem;
   
`
const Slink=styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    text-decoration:none;
    background:linear-gradient(35deg,#494949,#313131);
    width:6rem;
    height:6rem;
    cursor:pointer;
    transform:scale(0.8);
    h4{
        color:white;
    }
    svg{
        color:white;
    }
    &.active{
        background:linear-gradient(to right , #f27121 ,#e94057);
        svg{
          color:white;
        }
        h4{
          color:white;
        }
      }    
`;
export default Bc