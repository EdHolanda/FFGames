import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import FF_DATA from '../../mocks/FF_Data'

export default function Details({route}: any) {

    const { gameId } = route.params;
    const item = FF_DATA.find((data) => data.gameId === gameId);
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.divider}/>
            <View style={styles.headerWrapper}>
                <Text style={styles.header}>{item?.title}</Text>
            </View>
            <View style={styles.divider}/> 
            <View style={styles.headerWrapper}>
                <Image source={{uri: item?.picture}} style={styles.image}/>
            </View>
            <ScrollView>
                <Text style={styles.description}>{item?.description}</Text>
            </ScrollView>          
        </SafeAreaView> 
      );
    }
    
    const styles = StyleSheet.create({
      safeArea: {
        flex: 1,
        backgroundColor: 'transparent'
      },
      header: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
      },
      image: {
        height: 100,
        alignItems: 'center',
        marginBottom: 20
    },
    description: {   
        fontSize: 16,
        color: 'black',
        textAlign: 'justify',
        marginHorizontal: 5
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

