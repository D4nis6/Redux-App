
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { addToCart,removeToCart } from "../components/redux/action"

const Product = (props) => {

    const item = props.item
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.reducer);
    const [isAdded, setIsAdded] = useState(false)
    const handleAddToCart = (item) => {
        dispatch(addToCart(item))

    }
    const handleRemoveCart = (item)=>{
        dispatch(removeToCart(item.name))

    }
    useEffect(() => {
      let result = cartItems.filter((element)=>{
        return element.name=== item.name
    });
    if(result.length){
        setIsAdded(true)
    }else{
        setIsAdded(false)
    }
}, [cartItems])
    return (
        <View style={{ alignItems: "center", borderWidth: 3, borderColor: "black" }}>
            <Text style={{ fontSize: 24, margin: 10, textAlign: "center", fontWeight: "700" }}>{item.name}</Text>
            <Image style={{ height: 250, width: 200 }} source={item.Image} />
            <Text style={{ fontSize: 24, margin: 20 }}>{item.price}</Text>
            <Text style={{ fontSize: 24, margin: 20 }}>{item.color}</Text>
            {
                isAdded ? <View style={{ width: 200, marginBottom: 100 }}><Button title='Remove To Cart' onPress={() => handleRemoveCart(item)}></Button></View>
                    : <View style={{ width: 200, marginBottom: 100 }}><Button title='Add To Cart' onPress={() => handleAddToCart(item)}></Button></View>
            }



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