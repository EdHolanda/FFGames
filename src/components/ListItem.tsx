import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type GameProps = {
    readonly gameId: string;
    readonly title: string;
    readonly release: string;
    readonly platform: string;
    readonly picture: string;    
}

const ListItem: React.FC<GameProps> = ({gameId, title, release, platform, picture}) => {
    
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const handlePress = () => {
        navigation.navigate('Details', { gameId });
      };
    
    return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
        <View style={styles.itemWrapper}>
            <View style={styles.leftWrapper}>
                <Image source={{uri: picture}} style={styles.image}/>
                <View style={styles.data}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.release}>{release}</Text>
                </View>
            </View>
            <View style={styles.rightWrapper}>            
                <Text style={styles.title}>{platform}</Text>            
            </View>            
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent'
    },
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 14
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightWrapper: {
        alignItems: 'flex-end'
    },
    image: {
        height: 20,
        width: 65
    },
    data: {
        marginLeft: 8,
    },
    title: {   
        fontSize: 18,
        color: 'black'          
    },
    release: {
        fontSize: 14,
        color: 'green'
    },

})

export default ListItem