/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './components/Header'
import Top from './components/Top'
import Card from './components/Card'



const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView>
          <Header/>
          <View style={{flexDirection:"column"}}>
            <Top/>
            <View style={{padding:8,flexDirection:"column"}}>
              <Text style={{fontSize:20,fontWeight:"500",color:"#775feb",padding:10}} >More details</Text>
              <Card/>
              <Card/>
              <Card/>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f3f6fb',
      height: "100%",
  },
});

export default App;
