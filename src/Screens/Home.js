import React from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("screen");

import Items from "../Components/Items";
import Cards from "../Components/Cards";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.ActivityContainer}>
        <View style={styles.InputArea}>
          <TextInput placeholder="195 items" />
        </View>

        <TouchableOpacity style={styles.options}>
          <Image
            style={styles.icon}
            source={require("../Images/Icons/sort.png")}
          />
          <Text>Sort</Text>
        </TouchableOpacity>

        <View style={styles.verticleLine}></View>

        <TouchableOpacity style={styles.options}>
          <Image
            style={styles.iconFilter}
            source={require("../Images/Icons/filter.png")}
          />
          <Text>Filter</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ padding: 12 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Items name="Polo Shirts" />
        <Items name="Dress Shirts" />
        <Items name="Shorts" />
        <Items name="T-Shirts" />
        <Items name="Sweat Shirts" />
        <Items name="Shorts & Pants" />
        <Items name="Ties & Bow Ties" />
        <Items name="Coats & Jackets" />
      </ScrollView>

      <View style={styles.container}>
        <Cards
          name="Tommy Hilfiger"
          desc={`Men's Morrison Stripe Polo, Limelight Combo`}
          price="USD 23"
          img={require("../Images/Img/img1.jpeg")}
        />
      
        <Cards
          name="Tommy Hilfiger"
          desc={`Men's Morrison Stripe Polo, Limelight Combo`}
          price="USD 23"
          img={require("../Images/Img/img2.jpeg")}
        />

        <Cards
          name="Tommy Hilfiger"
          desc={`Men's Morrison Stripe Polo, Limelight Combo`}
          price="USD 23"
          img={require("../Images/Img/img3.png")}
        />

        <Cards
          name="Tommy Hilfiger"
          desc={`Men's Morrison Stripe Polo, Limelight Combo`}
          price="USD 23"
          img={require("../Images/Img/img4.jpeg")}
        />

      </View>

      <View style={styles.bottom} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  ActivityContainer: {
    height: 50,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#C0C0C0",
  },
  InputArea: {
    width: "50%",
    justifyContent: "center",
    paddingLeft: 20,
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  verticleLine: {
    height: "70%",
    alignSelf: "center",
    width: 1,
    backgroundColor: "#000",
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  iconFilter: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  container: {
    width: 500,
    height: 380,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: 'center'
  },
  bottom: {
    marginTop: "200%",
  },
});
