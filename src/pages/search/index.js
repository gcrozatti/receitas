import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import api from '../../services/api'
import { FoodList } from '../../components/foodlist'

export function Search() {
    const route = useRoute();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function fetchRecipes() {
            const response = await api.get(`/foods?name_like=${route.params?.name}`);
            setRecipes(response.data)
        }
        fetchRecipes();
    }, [route.params?.name])

    return (
        <View style ={styles.container}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={recipes}
                keyExtractor={ (item) => String(item.id) }
                renderItem={ ({item}) => <FoodList data={item} /> }
                ListEmptyComponent={ () => <Text style={styles.text}>Não encontramos! Tente novamente.</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: "#f3f9ff",
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14,
    },
    text:{
        fontSize: 16,
    }
})