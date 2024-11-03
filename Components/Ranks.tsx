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
import RankRow2 from './RankRow2';
const Ranks = () => {
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
    <View style={styles.leaders}>
<Text style={{fontFamily:fonts.almaraiBold,color:'white',fontSize:12}}>
المتصدرون
</Text>
<View style={styles.mounthPoint}>
<Text style={{fontFamily:fonts.almaraiBold,color:Colors.BACKGROUND_5,fontSize:10}}>
نقاط الشهر
</Text>
</View>
    </View>
    <View style={styles.rankrowContainer}>
<View style={{width:'100%',justifyContent:'space-between',alignItems:'center',flexDirection:'row-reverse',paddingLeft:29}}>
<View style={{alignItems:'center', gap:42,flexDirection:'row-reverse'}}>
    <Text style={{fontFamily:fonts.almaraiRegular,color:'white',fontSize:10}}>
    الترتيب
    </Text>
    <Text style={{fontFamily:fonts.almaraiRegular,color:'white',fontSize:10}}>
    الاسم
    </Text>
</View>
<Text style={{fontFamily:fonts.almaraiRegular,color:'white',fontSize:10}}>
النقاط
</Text>
</View>
<View style={{width:'100%',height:1.5,backgroundColor:Colors.BACKGROUND_5,marginTop:4,marginBottom:8}}></View>
<View style={{width:'100%',flexDirection:'column',gap:8}}>
<RankRow2
        name="Saad14"
        rank="1"
        photoSvg={svgs[0].twoo}
      />
      <RankRow2
        name="Saad14"
        rank="2"
        photoSvg={svgs[0].twoo}
      />
      <RankRow2
        name="Saad14"
        rank="3"
        photoSvg={svgs[0].twoo}
      />
      <RankRow2
        name="Saad14"
        rank="4"
        photoSvg={svgs[0].twoo}
      />
</View>
    </View>
    </View>
  )
}
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

leaders:{
    width:'100%',
    flexDirection:'row-reverse',
    backgroundColor:Colors.BACKGROUND_5,
    justifyContent:'space-between',
    borderRadius:8,
    paddingHorizontal:16,
    paddingVertical:8,
    alignItems:'center'

},
mounthPoint:{
    width:72,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:4,
    backgroundColor:'white'
},
rankrowContainer:{
    width:'100%',
    backgroundColor:Colors.BACKGROUND_4,
    borderRadius:16,
    padding:8
}
      });
export default Ranks