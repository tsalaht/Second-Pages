import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import Colors from '../Colors'
import fonts from '../fonts'
import { SvgXml } from "react-native-svg";
import { svgs } from '../Views/svg';
import { icons } from '../Views/icons'
import {
    SearchNormal1,Trash,MessageMinus
  } from "iconsax-react-native"
const FreindOrders = () => {
  return (
    <View style={{flex:1,paddingHorizontal:16,marginTop:8,flexDirection:'column',gap:8}}>
    <View style={styles.searchBox}>
<View style={styles.searchInput}>
<TextInput placeholder='بحث' style={{fontFamily:fonts.almaraiRegular,fontSize:12,color:'white'}} placeholderTextColor={'#9C9FA6'}>

</TextInput>
</View>
<View style={{backgroundColor:Colors.BACKGROUND_4, borderRadius:4,width:45,alignItems:'center',justifyContent:'center'}}>
<SearchNormal1 size="18" color={Colors.PRIMARY_600}/>
</View>
    </View>
    <View style={styles.bigContainer}>
    <View style={styles.conected2}>
<Text style={{fontFamily:fonts.almaraiBold,fontSize:10,color:'white'}}>
طلبات الصداقة
</Text>
<View style={styles.line}>

</View>
<Text style={{fontFamily:fonts.almaraiBold,fontSize:10,color:'white'}}>
0
</Text>
    </View>
    <View style={styles.insideBigContainer}>
<Text style={{color:'#A6ABB3',fontSize:13,fontFamily:fonts.almaraiBold}}>
ليس هناك دعوات صداقة واردة!
</Text>
    </View>
    </View>
    </View>
  )
}

export default FreindOrders
const styles = StyleSheet.create({

    searchBox:{
        width:'100%',
        flexDirection:'row-reverse',
        gap:4
    },
    searchInput:{
        flex:1,
        backgroundColor:Colors.BACKGROUND_4,
        borderRadius:4,
        paddingHorizontal:16,
        paddingVertical:8
    },
    
    bigContainer:{
        width:'100%',
        borderRadius:16,
        backgroundColor:Colors.BACKGROUND_5,
        flex:0.98,paddingHorizontal:16,
        paddingVertical:8
    },
    insideBigContainer:{
        width:'100%',
flex:1,
alignItems:'center',
justifyContent:'center'
    },
    conected2:{
        width:'100%',
        flexDirection:'row-reverse',
        gap:4,
        alignItems:'center',
    
        
    },
    line:{
        flex:1,
        height:2,
        backgroundColor:'white',
        borderRadius:16,
    },
          });