import { useEffect , useState } from "react";
import { styled } from "styled-components";


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
      {popular.map((recipe)=>{
        return(
          <Card>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
          </Card>
        );
      })}
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
`;
export default Popular