import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card]}>
        <View style={[styles.cardbody,styles.cardElevated]}>
            <Image source={{uri:'https://reactjs.org/logo-og.png'}} style={styles.cardimage}/>
            <View style={styles.cardbody} >
                <Text style={styles.cardtitle}>Hava mahal</Text>
                <Text style={styles.cardlabel}>Hava mahal</Text>
                <Text style={styles.carddescription}>Hava mahal</Text>
                <Text style={styles.cardfooter}>Hava mahal</Text>
            </View>
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
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    cardElevated:{
        backgroundColor:'black',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardimage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    cardbody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardtitle:{
        color:'white',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6
    },
    cardlabel:{
        color:'white',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6
    },
    carddescription:{
        color:'white',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6
    },
    cardfooter:{
        color:'white',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6
    },
})