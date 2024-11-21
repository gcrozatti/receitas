import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getFavorites(key) {
    const favorites = await AsyncStorage.getItem(key)
    return JSON.parse(favorites) || [];
}

export async function saveFavorite(key, newItem) {
    let myFavorites = await getFavorites(key);

    let hasItem = myFavorites.some( (item) => item.id === newItem.id )
    
    if (hasItem) {
        console.log("Este item já esta salvo em sua lista");
        return;
    }

    myFavorites.push(newItem);

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
    console.log("SALVO COM SUCESSO!")
}

export async function removeItem(id) {
    let recipes = await getFavorites("@appreceitas")

    let myFavorites = recipes.filter( (item) => {
        return (
            item.id !== id
        );
    });

    await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites));
    console.log("ITEM DELETADO!")
    return myFavorites;
}

export async function isFavorite(recipe) {
    let myRecipes = await getFavorites("@appreceitas")
    const favorite = myRecipes.find( item => item.id === recipe.id )

    if(favorite) {
        return true;
    }
    return false;
}