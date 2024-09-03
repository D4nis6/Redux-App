// import { Text, View } from "react-native";

// export default function index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>ADD TO CART UI WITH REDUX</Text>
//     </View>
//   );
// }
import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native'
import Header from './Header';
import Product from './Product';



const index = () => {

  const products = [{
    name: "Samsung",
    color: "white",
    price: 30000,
    Image: require("../assets/images/samsung-galaxy-a04-1.jpg")
  },
  {
    name: "Iphone",
    color: "black",
    price: 450000,
    Image: require("../assets/images/apple-iphone-14-pro-max-1.jpg")

  },
  {
    name: "Oppo",
    color: "pink",
    price: 70000,
    Image: require("../assets/images/i (4).jpg")

  },
  ]
  return (
    <View >
      <Header />
     <ScrollView>
     {
        products.map((item) =><Product item={item}/> )

      }
     </ScrollView>
      
    </View>
  )
}
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent: "center",
//         alignItems: "center"
//     }
// })

export default index;
