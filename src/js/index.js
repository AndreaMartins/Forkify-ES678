import axios from 'axios';

async function getResults(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const key = '2794ebef5534dfba1643d8146616387f';
  try{
    const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error){
    alert(error);
  }
  ;
}

getResults('pizza');



//2794ebef5534dfba1643d8146616387f
// http://food2fork.com/api/search
