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
      const check=localStorage.getItem("popular");
      if(check){
        setPopular(JSON.parse(check));
      }
      else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=2abde693ac6741348337ec26c771e216&number=10`,{
      method:"get",
      header:"content-type/application.json"
    });
    const data= await api.json();
    localStorage.setItem("popular",JSON.stringify(data.recipes));
    setPopular(data.recipes);
    console.log(data.recipes);
  }
  };
  
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
            <Gradient/>
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
  min-height:13rem;
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
    width:100%;
    bottom: 0%;
    transform:translate(-50%,0%);
    color:pink;
    text-align:center;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;
const Gradient=styled.div`
    z-index:3;
    position:absolute;
    width:100%;
    height:100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0.5));
`;
export default Popular