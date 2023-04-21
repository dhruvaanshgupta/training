import { getPokemonList,getPokemon } from "./src/getPokemon"; 

//for loop is compatible with async/await
(async function() {
 try{
    const list = await getPokemonList();
    for(const listItem of list.results){
        const pokemon = await getPokemon(listItem.url);
        console.log(pokemon.name);
    }
    }catch(e){
        console.error(e);
    }
})();

//for each loop
(async function() {
    try{
       const list = await getPokemonList();
       list.results.forEach(async (listItem)=>{
           const pokemon = await getPokemon(listItem.url);
           console.log(pokemon.name);
       })
       }catch(e){
           console.error(e);
       }
   })();


