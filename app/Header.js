
import React from 'react';
import{View,Text,StyleSheet}from 'react-native'

const Header = ()=>{
    return(
        <View style={styles.container}>
            <Text style={{fontSize:30, color:'white',paddingRight:20}}>0</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        height:60,
        marginTop:40,
        backgroundColor:"black",
        alignItems:"flex-end"
    }
})

export default Header;