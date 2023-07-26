import React from 'react'
import { styled } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
function Search() {
  return (
    <Formstyle>
        <div>
    <FaSearch></FaSearch>
    <input type="text" placeholder='Search...' /></div>
    </Formstyle>
  )
}
const Formstyle=styled.form`
    margin:0rem 16rem;
    div{
        position:relative;
        width:100%;
        margin:1rem;

    }
    input{
        border:none;
        background:linear-gradient(35deg,#494949,#313131);
        font-size: 1.5rem;
        color:white;
        height: 3rem;
        padding:1rem 3rem;
        border:none;
        border-radius: 1rem;
        outline:none;
        
    }
    svg{
        position: absolute;
        top:50%;
        left:0%;
        transform:translate(100%,-50%);
        color:white;
    }
`
export default Search