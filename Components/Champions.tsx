import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text, ScrollView } from 'react-native';
import Colors from "../Colors";
import fonts from "../fonts";
import { SvgXml } from "react-native-svg";
import { svgs } from '../Views/svg';
import { icons } from '../Views/icons';
import LinearButton2 from './linearButton2';
import LinearButton from './linearButton';
import GradientText from './GradientText ';

const Champions = () => {
  const [type, setType] = useState("البلاتينية");

  return (
    <ScrollView style={{...styles.viewContainer,marginBottom:10}}>
    <View style={styles.viewContainer}>
      <View style={styles.tabContainer}>
      <Text style={styles.dateText}>تبدأ البطولات بتاريخ 28/9/2024</Text>
        <SvgXml xml={icons[0].date}/>
      </View>
      <View style={styles.champions}>
        <View style={styles.championRow}> 
        <GradientText
  text="الأبطال"
  style={{
    fontSize: 15, 
    fontFamily: fonts.almaraiBold, 
  }}
/>
          <Text style={styles.championsTextN}>45</Text>
          <SvgXml xml={svgs[0].trophySmall}/>
        </View>

        <View style={styles.rowContainer}>
<View>
<Text style={{color:'#D4D5D6',fontSize:12,fontFamily:fonts.almaraiRegular}}>
الجوائز
</Text>
<SvgXml xml={icons[0].start}/>
</View>
          <View style={{flexDirection:'column-reverse',gap:4,backgroundColor:Colors.BACKGROUND_3,padding:8, borderRadius:16}}>
<View style={{flexDirection:'row',}}>
  <Text style={{color:'white',fontSize:10,fontFamily:fonts.almaraiBold}}>
  : 9 نقاط دوري
  </Text>
  <SvgXml xml={icons[0].bronze}/>
</View>
<View style={{flexDirection:'row',}}>
  <Text style={{color:'white',fontSize:10,fontFamily:fonts.almaraiBold}}>
  : 4 نقاط دوري
  </Text>
  <SvgXml xml={icons[0].silver}/>
</View>
<View style={{flexDirection:'row',}}>
  <Text style={{color:'white',fontSize:10,fontFamily:fonts.almaraiBold}}>
  : 2 نقاط دوري
  </Text>
  <SvgXml xml={icons[0].gold}/>
</View>
          </View>


        </View>
        <View style={{...styles.rowContainer,marginTop:4}}>
        <Text style={{color:'#D4D5D6',fontSize:12,fontFamily:fonts.almaraiRegular}}>
        الموعد
</Text>
<View style={{flexDirection:'row-reverse',backgroundColor:Colors.BACKGROUND_3,padding:8,gap:8,alignItems:'center', borderRadius:16}}>
<SvgXml xml={icons[0].clock}/>
<Text style={{color:'white',fontSize:14,fontFamily:fonts.almaraiBold}}>
00:06:14
  </Text>
</View>
        </View>
        <View style={{...styles.rowContainer2,marginTop:4}}>
        <LinearButton2
                    text="متقدم"
                    textStyles={{fontSize:13,fontFamily:fonts.almaraiBold,color:Colors.BACKGROUND_3}}
                    onPress={() => {}}
                    containerStyle={{
                      width: 50,
                      height: 26,
                    }}
                    linearStyle={{
                      width: 55,
                      height: 26,
                      paddingVertical:0
                    }}
                  />
                  <View style={styles.iconsContainer}>
                  <SvgXml xml={icons[0].diampond}/>
                  <Text style={{color:'white',fontSize:12,fontFamily:fonts.almaraiBold}}>
                  200
                  </Text>
                  </View>
                  <View style={styles.iconsContainer}>
                  <SvgXml xml={icons[0].chear}/>
                  <Text style={{color:'white',fontSize:12,fontFamily:fonts.almaraiBold}}>
                  200
                  </Text>
                  </View>
        </View>
      </View>
      <View style={styles.tabContainer2}>
      <Text style={styles.dateText}>الدوريات النشطة (1)</Text>
      </View>
      <View style={styles.columContainer2}>
<View style={styles.rowContainer3}>
<View style={styles.raduceContainer1}>
<SvgXml xml={icons[0].chear}/>
<Text style={{color:'white',fontFamily:fonts.almaraiBold,fontSize:14}}>
  32
</Text>
</View>
          <SvgXml xml={svgs[0].trophySmall}/>
          <Text style={styles.championsTextN}>45</Text>
          <GradientText
  text="الأبطال"
  style={{
    fontSize: 15, 
    fontFamily: fonts.almaraiBold, 
  }}
/>
<View style={styles.raduceContainer1}>
<Text style={{color:'white',fontFamily:fonts.almaraiBold,fontSize:14}}>
نقطة تجمع
</Text>
</View>
</View>
<View style={{...styles.rowContainer3,backgroundColor:Colors.BACKGROUND_3,paddingHorizontal:20,paddingVertical:8,borderRadius:12}}>
<View style={{...styles.textContainer,backgroundColor:Colors.SUCCESS_400}}>
<Text style={{...styles.textColers,color:Colors.SUCCESS_600}}>
جلسة ودية
</Text>
</View>
<View style={{...styles.textContainer,backgroundColor:Colors.WARNING_400}}>
<Text style={{...styles.textColers,color:Colors.WARNING_600}}>
جلسة ثابتة
</Text>
</View>
<View style={{...styles.textContainer,backgroundColor:Colors.SECONDARY_400}}>
<Text style={{...styles.textColers,color:Colors.SECONDARY_600}}>
جلسة سريعة جداً
</Text>
</View>
<View style={{...styles.textContainer,backgroundColor:Colors.DANGER_400}}>
<Text style={{...styles.textColers,color:Colors.DANGER_600}}>
جلسة عامة
</Text>
</View>
</View>
<View style={styles.complex_row_col}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Text style={{color:'#D4D5D6',fontSize:12,fontFamily:fonts.almaraiRegular}}>
الجوائز
</Text>
<SvgXml xml={icons[0].start}/>
</View>
<View style={{flexDirection:'row',gap:4,backgroundColor:Colors.BACKGROUND_3,padding:8, borderRadius:16,alignItems:'center'}}>
<View style={{flexDirection:'row',alignItems:'center'}}>
  <Text style={{color:'white',fontSize:10,fontFamily:fonts.almaraiBold}}>
  : 9 نقاط دوري
  </Text>
  <SvgXml xml={icons[0].bronze}/>
</View>
<View style={{flexDirection:'row',alignItems:'center'}}>
  <Text style={{color:'white',fontSize:10,fontFamily:fonts.almaraiBold}}>
  : 4 نقاط دوري
  </Text>
  <SvgXml xml={icons[0].silver}/>
</View>
<View style={{flexDirection:'row',alignItems:'center'}}>
  <Text style={{color:'white',fontSize:10,fontFamily:fonts.almaraiBold}}>
  : 2 نقاط دوري
  </Text>
  <SvgXml xml={icons[0].gold}/>
</View>
          </View>
</View>
<View style={styles.rowContainer2}>
<View style={{...styles.raduceContainer1,borderRadius:8,paddingHorizontal:22}}>
<Text style={{color:'white',fontFamily:fonts.almaraiRegular,fontSize:12}}>
الدوريات:1
</Text>
</View>
<View style={{...styles.raduceContainer1,borderRadius:8,paddingHorizontal:22}}>
<Text style={{color:Colors.SUCCESS_700,fontFamily:fonts.almaraiBold,fontSize:12}}>
نشط الأن
</Text>
</View>
<View style={{...styles.raduceContainer1, borderRadius:8, paddingHorizontal:12, alignItems: 'center'}}>
  <LinearButton2
    text="متقدم"
    textStyles={{
      fontSize: 12,
      fontFamily: fonts.almaraiBold,
      color: Colors.BACKGROUND_3,
    }}
    onPress={() => {}}
    containerStyle={{
      width: 60,
      height: 0,
      marginTop:4


    }}
    linearStyle={{
      width: 60,
      height: 24,
      paddingVertical: 0,
      borderRadius: 8,
      marginTop:6
    }}
  />
  <Text
    style={{
      color: '#D4D5D6',
      fontFamily: fonts.almaraiRegular,
      fontSize: 12,
      marginTop: 4,
    }}
  >
    غير مؤهل
  </Text>
</View>

</View>
<Pressable>
<View style={{width:'100%',paddingVertical:12,alignItems:'center',justifyContent:'center',borderRadius:12,backgroundColor:Colors.PRIMARY_600}}>
<Text style={{color:'white',fontFamily:fonts.almaraiRegular,fontSize:14}}>
دخول
</Text>
</View>
</Pressable>

      </View>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,

  },
  dateText: {
    color:'white',
    fontSize:12,
    fontFamily:fonts.almaraiBold,
    margin:8,
  },
  tabContainer: {
    width: "100%",
    backgroundColor: Colors.BACKGROUND_3,
    paddingHorizontal:16,
    paddingVertical:8,
    zIndex: 8,
    marginTop: 8,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  tabContainer2: {
    width: "100%",
    backgroundColor: Colors.BACKGROUND_3,
paddingVertical:8,
    zIndex: 8,
    marginTop: 8,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
champions: {
  backgroundColor: Colors.BACKGROUND_4,
  alignSelf:"flex-end",
  marginBottom: 8,
  marginTop: 8,
  gap:4,
  borderRadius:16,
  padding:8,
  position:'relative',
  width: "52%",
},
championRow: {
  flexDirection: 'row',
  alignItems: 'center',

  justifyContent: 'space-between',
},
championsTextN: {
  fontSize:20,
  fontFamily: fonts.almaraiRegular,
  color:"white"
},
championsText: {
  fontSize: 15,
  fontFamily: fonts.almaraiBold,
  color: Colors.PRIMARY_700,
},
rowContainer:{
  flexDirection: 'row-reverse',
  alignItems: 'center',
  gap: 12,

  justifyContent:'space-between'
},
columContainer:{
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
  width: "100%",
  backgroundColor:Colors.BACKGROUND_3
},
iconsContainer:{
  flexDirection:'row-reverse',
  gap:4,
  alignItems:'center'
},
rowContainer2:{
  flexDirection:'row-reverse',

  alignItems:'center',
  width: "100%",
  justifyContent:'space-between',
paddingHorizontal:4
},
columContainer2:{
padding:8,
gap:4,
width: "100%",
flexDirection:'column',
backgroundColor:Colors.BACKGROUND_4,
borderRadius:16,
marginTop:8

},
raduceContainer1:{
  borderRadius:16,
  backgroundColor:Colors.BACKGROUND_3,
  padding:8,
  flexDirection:'row-reverse',
  alignItems:'center',
  gap:8,

},
rowContainer3:{
  width:'100%',
  justifyContent:'space-between',
  flexDirection:'row-reverse',
  alignItems:'center'
},
textContainer:{
  paddingHorizontal:8,
  paddingVertical:4,
  borderRadius:4
},
textColers:{
  fontFamily:fonts.almaraiBold,
  fontSize:8
},
complex_row_col:{
  paddingHorizontal:8,
  paddingVertical:4,
  borderRadius:12,
  flexDirection:'column',
  gap:8,
  backgroundColor:Colors.BACKGROUND_3,
  justifyContent:'center',
  alignItems:'center'
}

});

export default Champions;
