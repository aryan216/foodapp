import { useEffect , useState } from "react";
import { styled } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function Popular() {
  const [popular,setPopular]=useState([]);
  useEffect(()=>{
    getPopular();
  },[])
  const getPopular = async()=> {
      //console.log(process.env.REACT_APP_API);
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=07e18fb92d9e48d58e7b42e0d35e2178&number=10`,{
      method:"get",
      header:"content-type/application.json"
    });
    const data= await api.json();
    setPopular(data.recipes);
  }
  
  return (
    <Wrapper>
      <h3>Popular picks</h3>
      <Splide options={{
        perPage: 4,
        arrows: false,
        pagination:false,
        drag:"free",
        gap:"5rem",
      }}>
      {popular.map((recipe)=>{
        return(
          <SplideSlide key={recipe.id}>
          <Card>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
          </Card>
          </SplideSlide>
        );
      })}
      </Splide>
    </Wrapper> 
  )
}

 const Wrapper=styled.div`
  margin: 4rem 0rem;
`;

const Card=styled.div`
  min-height:25rem;
  border-radius:2rem;
  overflow:hidden;
  position:relative;

  img{
    border-radius: 2rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
  }
  p{
    position:absolute;
    left:50%;
    z-index:10;
    width;100%;
    bottom:0%;
    transform:translate(-50%,0%);
    color:white;
    text-align:center;
    height:40%;
    display:flex;
    justify-content:center;
    align-items-center;
  }
`;
const Gradient=styled.div`
    z-index;3;
    position:absolute;
    width:100%;
    height:100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0.5));
`;
export default Popular