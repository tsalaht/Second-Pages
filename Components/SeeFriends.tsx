import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import Colors from '../Colors'
import fonts from '../fonts'
import { SvgXml } from "react-native-svg";
import { icons } from '../Views/icons'
import {
    SearchNormal1,Trash,MessageMinus
  } from "iconsax-react-native"
const SeeFriends = () => {
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
    <View style={styles.conected}>
<Text style={{fontFamily:fonts.almaraiBold,fontSize:10,color:'white'}}>
متصل
</Text>
<View style={styles.line}>

</View>
<Text style={{fontFamily:fonts.almaraiBold,fontSize:10,color:'white'}}>
    0
</Text>
    </View>
    <View style={styles.disconected}>
    <View style={styles.conected2}>
<Text style={{fontFamily:fonts.almaraiBold,fontSize:10,color:'white'}}>
غير متصل
</Text>
<View style={styles.line}>

</View>
<Text style={{fontFamily:fonts.almaraiBold,fontSize:10,color:'white'}}>
2
</Text>
    </View>
    <View style={styles.zoneRow}>
      <View style={{flexDirection:'row',alignItems:'center',gap:8}}>
      <View style={{width:32,height:32,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:4}}>
<Trash size="16" color={ Colors.DANGER_600}/>
</View>
<View style={{width:32,height:32,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:4}}>
<MessageMinus size="16" color={ Colors.SECONDARY_600}/>
</View>

</View>
  <View style={{flexDirection:'row',alignItems:'center',gap:16}}>
<Text style={{color:'white',fontFamily:fonts.almaraiBold,fontSize:14}}>
Saad14
</Text>
<SvgXml xml={icons[0].eagle2} />
</View>

  </View>
    <View style={styles.zoneRow}>
      <View style={{flexDirection:'row',alignItems:'center',gap:8}}>
      <View style={{width:32,height:32,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:4}}>
<Trash size="16" color={ Colors.DANGER_600}/>
</View>
<View style={{width:32,height:32,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:4}}>
<MessageMinus size="16" color={ Colors.SECONDARY_600}/>
</View>

</View>
  <View style={{flexDirection:'row',alignItems:'center',gap:16}}>
<Text style={{color:'white',fontFamily:fonts.almaraiBold,fontSize:14}}>
Saad14
</Text>
<SvgXml xml={icons[0].eagle2} />
</View>

  </View>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'column',
        gap:8,
        zIndex:444444444444
    },
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
conected:{
    width:'100%',
    flexDirection:'row-reverse',
    gap:4,
    borderRadius:16,
    paddingHorizontal:16,
    paddingVertical:8,
    backgroundColor:Colors.BACKGROUND_5,
    alignItems:'center',

    
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
disconected:{
    width:'100%',
    flexDirection:'column',
    gap:16,
    borderRadius:16,
    paddingHorizontal:16,
    paddingVertical:18,
    backgroundColor:Colors.BACKGROUND_5,
    alignItems:'center',
},
zoneRow:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }

      });

export default SeeFriends