import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';




const Card =() => {
  return (
    <>
    <View style={styles.wrapper}>
        <View style={{width:80,height:80}}>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: 'http://lorempixel.com/80/80/food/',
                }}
            />
        </View>
        <View style={{flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",height:"100%",marginLeft:10}}>
            <Text style={{fontSize:22,fontWeight:"500",color:"#775feb",marginBottom:10}}>Nutrition</Text>
            <Text style={{}}>800 cal / 1200 cal</Text>
        </View>
        <View style={{alignItems:"flex-end",justifyContent:"flex-start",height:"100%",marginLeft:10,width:150}}>
            <View style={{borderRadius:20,backgroundColor:"#e2dcf7",padding:10}}>
                <Text style={{marginLeft:15,marginRight:15,color:"#9582ef"}}>On track</Text>
            </View>
        </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#ffffff",
        flexDirection:"row",
        padding: 13,
        alignItems:"center",
        borderRadius:10,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
        marginBottom:12,
        width:"100%"
    },
    tinyLogo: {
        width: "100%",
        height: "100%",
        borderRadius:10
    },
});

export default Card;
