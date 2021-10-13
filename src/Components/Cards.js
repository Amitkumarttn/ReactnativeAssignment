import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

const Cards = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.new}>
          <Text style={styles.newTxt}>NEW</Text>
        </View>

        <View style={styles.heartIcon}>
          <Image
            style={styles.heartIconContainer}
            source={require("../Images/Icons/Heart.png")}
          />
        </View>
        <Image style={styles.img} source={props.img} />


        <View style={styles.details}>
          <Text style={styles.Prodname}>{props.name}</Text>
          <Text style={styles.desc}>{props.desc}</Text>
          <Text style={styles.price}>{props.price}</Text>
        </View>
      </View>

      
      
      
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  new: {
    position: "absolute",
    backgroundColor: "#228b22",
    padding: 8,
    // marginHorizontal: 5,
    // marginVertical: 5,
    zIndex: 2,
  },
  
  heartIcon: {
    position: "absolute",
    backgroundColor: "#fff",
    zIndex: 2,
    borderRadius: 50,
    marginVertical: 12,
    marginHorizontal: 130,
  },
  heartIconContainer: {
    width: 35,
    height: 35,
  },
  newTxt: {
    color: "#fff",
  },
  details: {
    padding: 10,
    marginBottom: -100,
    marginLeft: -8,

  },
  Prodname: {
    fontWeight: "800",
    fontSize: 15,
  },
  desc: {
    color: "#888",
    fontSize: 12,
    width: width - 200,
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    marginVertical: 2,
  },
  box: {
    marginBottom: 100,
    backgroundColor: 'red',
    width: width - 210,
    margin: 5
    
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
