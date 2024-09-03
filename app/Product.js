
import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import{useDispatch} from "react-redux"
import { addToCart } from "../components/redux/Action"

const Product = (props) => {

    const item = props.item
    const dispatch = useDispatch()
    const handleAddToCart = (item) => {
        dispatch(addToCart(item))

    }
    return (
        <View style={{ alignItems: "center", borderWidth: 3, borderColor: "black" }}>
            <Text style={{ fontSize: 24, margin: 10, textAlign: "center", fontWeight: "700" }}>{item.name}</Text>
            <Image style={{ height: 250, width: 200 }} source={item.Image} />
            <Text style={{ fontSize: 24, margin: 20 }}>{item.price}</Text>
            <Text style={{ fontSize: 24, margin: 20 }}>{item.color}</Text>
            <View style={{ width: 200, marginBottom: 100 }}><Button title='Add To Cart' onPress={() => handleAddToCart(item)}></Button></View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        height: 60,
        margin: 20,
    }
})

export default Product;