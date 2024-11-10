import { View, Text,StyleSheet } from 'react-native'
import Colors from '../Colors'
import fonts from '../fonts'
import React from 'react'
import { SvgXml } from "react-native-svg";
import { icons } from './icons';

const Frame2 = () => {
  return (
    <View style={{flex:1,backgroundColor:Colors.BACKGROUND_5,paddingTop:50,paddingHorizontal:16}}>
    <View style={styles.container}>
<View style={{flexDirection:'column',gap:4,  alignItems:'center',justifyContent:'center',}}>
<SvgXml xml={icons[0].mix2} />
<Text style={{color:'white',fontFamily:fonts.almaraiBold,fontSize:13.76}}>
Saad14
</Text>
</View>
<View style={styles.insideContainer}>

<Text style={{color:'white',fontFamily:fonts.almaraiBold,fontSize:14,marginBottom:16}}>
هدية للمتواجدين
</Text>
<Text style={{color:'#939599',fontFamily:fonts.almaraiRegular,fontSize:12}}>
بكرة يخلص
</Text>

</View>
    </View>
    <View style={styles.realtiveContainer}>
<View style={{position:'absolute',top:30,left:45}}>
<SvgXml xml={icons[0].long} />
</View>
<View style={{position:'absolute',top:36,left:40}}>
<SvgXml xml={icons[0].longorange} />
</View>
<View style={{position:'absolute',left:160,top:30}}>
<View style={{width:36,height:36,flexDirection:'column', alignItems:'center',justifyContent:'center',borderRadius:999999,borderWidth:2,borderColor:Colors.PRIMARY_700,backgroundColor:Colors.BACKGROUND_3}}>
<SvgXml xml={icons[0].orangeGift} />
<Text style={{color:Colors.PRIMARY_600,fontFamily:fonts.almaraiBold,fontSize:10,marginTop:-8}}>
20
</Text>
</View>
</View>
<View style={{position:'absolute',left:265,top:20}}>
<View style={{width:36,height:36,flexDirection:'column', alignItems:'center',justifyContent:'center',borderRadius:999999,backgroundColor:Colors.BACKGROUND_3}}>
<SvgXml xml={icons[0].normalGift} />
</View>
</View>
    </View>
    <View style={styles.button}>
    <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
  <Text style={{color: 'white', fontFamily: fonts.almaraiRegular, fontSize: 8, marginRight: 8}}>
    مستلمة
  </Text>
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <SvgXml xml={icons[0].redGift} />
    <Text style={{color: 'white', fontFamily: fonts.almaraiBold, fontSize: 14, marginLeft: 4}}>
      15
    </Text>
  </View>
</View>


  <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
    <SvgXml xml={icons[0].daimodnW} />
    <Text style={{color: 'white', fontFamily: fonts.almaraiBold, fontSize: 14, marginLeft: 4}}>
    400
    </Text>

</View>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
   container:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row-reverse',
        gap:8
    },
insideContainer:{
flex:1,
borderRadius:10,
backgroundColor:Colors.BACKGROUND_4,
paddingHorizontal:16,
paddingVertical:11.57,
alignItems:'flex-end'
},
realtiveContainer:{
borderRadius:10,
backgroundColor:Colors.BACKGROUND_4,
width:'100%',
height:160,
marginTop:8,
position:'relative'
},
button:{
borderRadius:12,
backgroundColor:Colors.BACKGROUND_4,
width:'100%',
marginTop:8,
alignItems:'center',
justifyContent:'center',
flexDirection:'row-reverse',
gap:16,
paddingVertical:14.5

},
    
    });
export default Frame2