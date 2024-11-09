import React from 'react';
import {View, SafeAreaView, Text,StyleSheet,useColorScheme, ScrollView} from 'react-native';
import FlatCard from "./components/flatCard";
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContacListt from './components/ContacListt';
function APPPro() {
    //const useDark = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
        <ScrollView>
            <FlatCard/>
            <ElevatedCards/>
            <FancyCard/>
            <ActionCard/>
            <ContacListt/>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    whiteTExt:{
        color:'#FFFFFF'
    },
    blackText:{
        color:'#000000'
    }
})

export default APPPro;
