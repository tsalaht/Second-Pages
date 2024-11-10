import { View, Text,StyleSheet,Pressable,Alert  } from 'react-native'
import React ,{useState}from 'react'
import Colors from '../Colors'
import fonts from '../fonts'
import Mix from './Mix'
import { SvgXml } from "react-native-svg";
import { icons } from '../Views/icons';
import * as Clipboard from 'expo-clipboard';
const Adds = () => {
  const [copyText, setCopyText] = useState<string>('SV4A8X');
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const handleCopyToClipboard = async () => {
    await Clipboard.setStringAsync(copyText);
    setShowCopiedMessage(true);
    setTimeout(() => setShowCopiedMessage(false), 2000); // Hide message after 2 seconds
  };
  return (
    <View style={{flex:1,paddingHorizontal:16,marginTop:8,flexDirection:'column',gap:8}}>
      {showCopiedMessage && (
        <View style={styles.copiedMessage}>
          <Text style={styles.copiedText}>تم النسخ</Text>
        </View>
      )}
      <View style={styles.firstPart}>
<Mix/>
<View style={styles.insideContainer}>
<Text style={{color:'white',fontSize:14,fontFamily:fonts.almaraiRegular}}>
الكود الخاص بي
</Text>
<Pressable onPress={handleCopyToClipboard}>
<View style={styles.copyContainer}>
<View style={{borderRadius:9999999999999,backgroundColor:'white',padding:4}}>
<SvgXml xml={icons[0].copy} />
</View>
<Text style={{color:'white',fontSize:14,fontFamily:fonts.almaraiBold}}>
{copyText}
</Text>
</View>
</Pressable>

</View>
      </View>
      <View style={styles.secondPart}>
      <SvgXml xml={icons[0].left} />
<View style={{flexDirection:'row',alignItems:'center',gap:16}}>
<Text style={{color:Colors.PRIMARY_600,fontSize:14,fontFamily:fonts.almaraiBold}}>
إضافة صديق
</Text>
<SvgXml xml={icons[0].addf} />
</View>

      </View>
      <View style={styles.therdPart}>
  <Text style={{color:'white',fontFamily:fonts.almaraiBold,fontSize:14}}>
  هل تريد إضافة لاعبين من آخر صكة؟
  </Text>
<View style={styles.addZone} >
  <View style={styles.zoneRow}>
      <View style={{flexDirection:'row',alignItems:'center',gap:8,paddingHorizontal:12,paddingVertical:8,backgroundColor:'white',borderRadius:11.73}}>
<Text style={{color:'black',fontFamily:fonts.almaraiRegular,fontSize:12}}>
إضافة
</Text>
<SvgXml xml={icons[0].add2} />
</View>
  <View style={{flexDirection:'row',alignItems:'center',gap:16}}>
<Text style={{color:'white',fontFamily:fonts.almaraiBold,fontSize:14}}>
Saad14
</Text>
<SvgXml xml={icons[0].eagle2} />
</View>

  </View>
  <View style={styles.zoneRow}>
      <View style={{flexDirection:'row',alignItems:'center',gap:8,paddingHorizontal:12,paddingVertical:8,backgroundColor:'white',borderRadius:11.73}}>
<Text style={{color:'black',fontFamily:fonts.almaraiRegular,fontSize:12}}>
إضافة
</Text>
<SvgXml xml={icons[0].add2} />
</View>
  <View style={{flexDirection:'row',alignItems:'center',gap:16}}>
<Text style={{color:'white',fontFamily:fonts.almaraiBold,fontSize:14}}>
Saad14
</Text>
<SvgXml xml={icons[0].eagle2} />
</View>

  </View>
</View>
<View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<SvgXml xml={icons[0].left} />
<Text style={{color:Colors.PRIMARY_600,fontSize:14,fontFamily:fonts.almaraiBold}}>
المزيد من آخر صكة
</Text>

</View>
</View>
<View style={styles.secondPart}>
      <SvgXml xml={icons[0].left} />
<View style={{flexDirection:'row',alignItems:'center',gap:16}}>
<Text style={{color:Colors.PRIMARY_600,fontSize:14,fontFamily:fonts.almaraiBold}}>
اللاعبين المحظورين
</Text>
<SvgXml xml={icons[0].removeF} />
</View>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  copiedMessage: {
    position: 'absolute',
    top: 20,
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
  },
  copiedText: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 14,
  },
container:{
    width:'100%',
    flexDirection:'column',
    gap:8,zIndex:444444444444
},
firstPart:{
    width:'100%',
    flexDirection:'column',
    alignItems:'center',
    gap:16,
    paddingVertical:24,
    borderRadius:16,
    backgroundColor:Colors.BACKGROUND_5
},
copyContainer:{
    paddingRight:16,
    paddingVertical:2,
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:Colors.BACKGROUND_4,
    borderRadius:39,
    gap:31,
    paddingLeft:2
},
insideContainer:{
    width:'100%',
    flexDirection:'column',
    alignItems:'center',
    gap:8,
},
secondPart:{
  width:'100%', 
  paddingHorizontal:12,
  paddingVertical:8,
  alignItems:'center',
  flexDirection:'row',
  backgroundColor:Colors.BACKGROUND_5,
  borderRadius:8,
  justifyContent:'space-between'
},
therdPart:{
  width:'100%',
  flexDirection:'column',
  alignItems:'center',
  gap:16,
  paddingVertical:24,
  borderRadius:16,
  backgroundColor:Colors.BACKGROUND_5,
  paddingHorizontal:12
},
addZone:{
  width:'100%',
  flexDirection:'column',
  alignItems:'center',
  backgroundColor:Colors.BACKGROUND_4,
  paddingVertical:4,
  borderRadius:8,
},
zoneRow:{
  padding:8,
  width:'100%',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between'
}
  });
export default Adds