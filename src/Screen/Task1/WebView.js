// Implement WebView, show Activity indicator when WebView is loading

import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview';


const WebViewTask = () => {

    const [showIndicator, SetIndicator] = useState(false)

    return (
         <SafeAreaView style={styles.container}>
         <WebView style={styles.web}
         onLoadStart={() => SetIndicator(true)}
         onLoadEnd={() => SetIndicator(false)}
         source={{ uri: 'https://google.com' }} 
         />
         { showIndicator ? (
            <ActivityIndicator style={styles.activity} size={'large'} color={'red'}/>
         ) : null}
         </SafeAreaView>
    )
}

export default WebViewTask

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    web: {
        flex: 1
    },
    activity: {
        position: 'absolute',
        alignSelf: 'center',
    }
});
