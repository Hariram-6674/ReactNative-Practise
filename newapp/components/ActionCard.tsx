import { Image, Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Adsad</Text>
      <View style={[styles.card,styles.elevateCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                wasdfasdfasdfasdfs
            </Text>
        </View>
        <Image source={{uri:'https://reactjs.org/logo-og.png'}} style={styles.cardimage}/>
        <View style={styles.bodyContainer}>
            <Text numberOfLines={2}>
                asfdasdfasdfasdfasdfasdfasdfasdfasdfasdf
                gdsfgsdfgsdfgsdfgdsfgsdfg
                sdfgsdfgsdfgsdfgsdfg
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://google.com')} style={styles.social}>
                <Text>Read More</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:350,
        height:340,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    elevateCard:{
        backgroundColor:'black',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'white',
        fontSize:15
    },
    cardimage:{
        height:100
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    social:{
        fontSize:16,
        color:'white',
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:6
    }
})