import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>flatCard</Text>
      <View>
        <View style={styles.container}>
          <Text style={[styles.card,styles.cardOne]}>Red</Text>
          <Text style={[styles.card,styles.cardTwo]}>Green</Text>
          <Text style={[styles.card,styles.cardThree]}>Blue</Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'bold'
  },
  container:{
    flex:1,
    flexDirection:'row',
    padding:8

  },
  card:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:100,
    width:100,
    borderRadius:4,
    margin:8
  },
  cardOne:{
    backgroundColor:'red'
  },
  cardTwo:{
    backgroundColor:'lightgreen'
  },
  cardThree:{
    backgroundColor:'lightblue'
  }
});