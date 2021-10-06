import React from "react";
import { Text, View, Scroll, ScrollView } from "react-native";

//Importing Components

import Header from '../components/Header';
import ProductDetails from '../components/ProductDetails';
import Venue from "../components/Venue";
import About from '../components/About';
import Screenshots from "../components/Screenshots";
import ActionBtn from "../components/ActionBtn";

export default class Home extends React.Component{
    render(){
        return(
            <>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header />
                    <ProductDetails />
                    <Venue />
                    <About />
                    <Screenshots />
                    <ActionBtn />
                </ScrollView>
            </>
        )
    }
} 