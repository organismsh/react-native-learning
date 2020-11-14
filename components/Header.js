import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'




const Header =() => {
  return (
    <>
    <View style={styles.header}>
        <FontAwesomeIcon icon={faBars} size={ 23 } secondaryOpacity={ 0.4 } />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        padding: 20,
        justifyContent: 'space-between',
    },
});

export default Header;
