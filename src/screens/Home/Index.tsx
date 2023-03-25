import React, { useMemo, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import ListItem from '../../components/ListItem';
import FF_DATA from '../../mocks/FF_Data'


const Home = () : JSX.Element => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.divider}/>
    <View style={styles.headerWrapper}>
        <Text style={styles.header}>Final Fantasy Games</Text>
        <StatusBar style="auto" />
    </View>
    <View style={styles.divider}/>
    <ImageBackground source={require('../../../assets/bg.png')} resizeMode="cover" style={styles.bgImage}>
        <FlatList
        data={FF_DATA}
        keyExtractor={(item) => item.gameId}
        renderItem={({item}) => (
            <ListItem
                gameId={item.gameId}  
                title={item.title}  
                release={item.releaseDate}  
                platform={item.platform}  
                picture={item.picture}           
            />
            )
        }
        style={styles.flatList}/>       
    </ImageBackground>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.6,
  },
  flatList: {
    backgroundColor: 'white'
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerWrapper: {
    marginTop: 20,
    paddingHorizontal: 16
  },
  divider: {
    height: 1,
    backgroundColor: 'grey',
    marginHorizontal: 16,
    marginTop: 16,
   
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Home;
