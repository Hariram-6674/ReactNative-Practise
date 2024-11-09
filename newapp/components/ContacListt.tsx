import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContacListt() {
    const contact = [
        {
            uid:1,
            name:'Sanket Singh',
            status:'Making ur Gpay smootjh',
            imageUrl:'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
            uid:2,
            name:'Sanket Singh',
            status:'Making ur Gpay smootjh',
            imageUrl:'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
            uid:3,
            name:'Sanket Singh',
            status:'Making ur Gpay smootjh',
            imageUrl:'https://avatars.githubusercontent.com/u/29747452?v=4',
        }
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContacListt</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
        {contact.map(({uid, name,status,imageUrl})=>(
                <View key={uid} style={styles.userCard}>
                    <Image style={styles.userimage} source={{uri:imageUrl}}/>
                    <View>
                        <Text style={styles.username}>{name}</Text>
                        <Text style={styles.userstatus}>{status}</Text>
                    </View>
                </View>
            ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'lightblue',
        padding:8,
        borderRadius:10,
    },
    userimage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:12
    },
    username:{
        fontSize:16,
        fontWeight:'600',
        color:'black'
    },
    userstatus:{
        fontSize:16,
        fontWeight:'600',
        color:'black'
    },
})