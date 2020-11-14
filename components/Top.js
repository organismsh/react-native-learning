import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';




const Top =() => {
  return (
    <>
    <View style={styles.wrapper}>
        <Text style={styles.heading}>Good Morning, Ramesh</Text>
        <View style={{padding:20}}>
            <Text style={{fontSize:20,fontWeight:"500"}} >Eat the right amount of food and stay healthy.</Text>
        </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "column",
        justifyContent: 'space-between',
    },
    heading: {
        color: 'black',
        fontSize: 35,
        fontWeight:"800",
        maxWidth: "80%",
        padding: 20,
    },
});

export default Top;
