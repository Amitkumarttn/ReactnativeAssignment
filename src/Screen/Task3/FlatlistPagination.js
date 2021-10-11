import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList, RefreshControl, Image } from 'react-native'

const FlatlistPagination = () => {
    const [data, setData] = useState({pageNo: 1, listData: []});
    const [refreshing, Setrefreshing] = useState(false)

    const listItem = ({item}) => {
        return (
            <SafeAreaView style={styles.container}>
            <View style={styles.cardContainer}>
                <Image style={styles.avatar}source={{uri: item.avatar}}/>
                <Text style={styles.name}>{item.first_name}{item.last_name}</Text>
            </View>
                <Text style={styles.email}>{item.email}</Text>
            </SafeAreaView>
        )
    }

    const getData = (pageNo = 1, refreshing = false) => {
        Setrefreshing(refreshing)
        fetch(`https://reqres.in/api/users?page=${pageNo}`, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then(result => {
            setTimeout(() => {
                Setrefreshing(false)
            }, 10000)
            
            setData({pageNo, listData: pageNo === 1 ? result.data : [...data.listData, ...result.data]})
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList 
            style={styles.card}
            keyExtractor={(item, index) => index.toString()}
            data={data.listData} 
            renderItem={listItem}
            refreshing={refreshing}
            onRefresh={() => getData(1, true)}
            onEndReached={() => {
                getData(data.pageNo + 1)
            }}
            />
        </SafeAreaView>

        )
}



export default FlatlistPagination

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 80,
        borderWidth: 20,
        borderColor: '#fff',
        borderRadius: 30,
        backgroundColor: '#FFA07A'
    },
    cardContainer: {
        flexDirection: 'row'
    },
    card: {
        backgroundColor: '#fff'
    },
    avatar: {
        width: 100, 
        height: 100, 
        borderRadius: 50, 
        marginLeft: -50
    },
    name: {
        fontSize: 20, 
        color: '#FFFFFF', 
        paddingHorizontal: 50
    },
    email: { 
        color: '#000', 
        marginLeft: 90, 
        width: '100%', 
        marginTop: -50, 
        fontSize: 14
    }
})
