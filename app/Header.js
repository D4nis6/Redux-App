
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from "react-redux"

const Header = () => {
    const cartData = useSelector((state) => state.reducer);
    const [cartItems, setCartItems] = useState(0)
    useEffect(() => {
        setCartItems(cartData.length)
    }, [cartData])
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, color: 'white', paddingRight: 20 }}>{cartItems}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        height: 60,
        marginTop: 40,
        backgroundColor: "black",
        alignItems: "flex-end"
    }
})

export default Header;