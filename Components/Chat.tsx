import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Pressable,
    Dimensions,
  } from "react-native";
import styles from "../Views/Styles/Index";
  import Colors from "../Colors";
  import fonts from "../fonts";
  import React, { useState } from "react";
  import LinearButton2 from "../Components/linearButton2";
  import GradientText from "./GradientText ";
  import {

    ArrowRight2,
 User,
  } from "iconsax-react-native";
  import { SvgXml } from "react-native-svg";
import { svgs } from "../Views/svg";

  import { useDispatch } from "react-redux";
import { icons } from "../Views/icons";
  import { BlurView } from "expo-blur";
  import Mix from "../Components/Mix";
  
  export default function Chat() {
    const { width, height } = Dimensions.get("window");
    const dispatch = useDispatch();
  
    return (
      <View style={styles.viewContainer}>
          <View
            style={{
              paddingHorizontal: width * 0.04,
            
              flex: 1,
              overflow: "hidden",
            }}
          >
  
  <View style={styl.columContainer2}>
  <View style={styl.rowContainer3}>
            <SvgXml xml={svgs[0].trophySmall}/>
            <GradientText
  text="الأبطال"
  style={{
    fontSize: 15, 
    fontFamily: fonts.almaraiBold, 
  }}
/>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: fonts.almaraiRegular,
                    color: "white",
                  }}
                >
        
                </Text>
  <View style={styl.raduceContainer1}>
  <Text style={{color:'white',fontFamily:fonts.almaraiBold,fontSize:14}}>
  نشط الآن
  </Text>
  </View>
  </View>
  <View style={styl.complex_row_col}>
  <View style={{flexDirection:'row',gap:4,backgroundColor:Colors.BACKGROUND_3,padding:8, borderRadius:16,alignItems:'center',width:'100%',justifyContent:'space-between'}}>
  <View style={{flexDirection:'row',alignItems:'center',backgroundColor:Colors.BACKGROUND_4,paddingHorizontal:6,paddingVertical:2,borderRadius:14}}>
    <Text style={{color:'white',fontSize:10,fontFamily:fonts.almaraiBold}}>
    : 9 نقاط دوري
    </Text>
    <SvgXml xml={icons[0].bronze}/>
  </View>
  <View style={{flexDirection:'row',alignItems:'center',backgroundColor:Colors.BACKGROUND_4,paddingHorizontal:6,paddingVertical:2,borderRadius:14}}>
    <Text style={{color:'white',fontSize:10,fontFamily:fonts.almaraiBold}}>
    : 4 نقاط دوري
    </Text>
    <SvgXml xml={icons[0].silver}/>
  </View>
  <View style={{flexDirection:'row',alignItems:'center',backgroundColor:Colors.BACKGROUND_4,paddingHorizontal:6,paddingVertical:2,borderRadius:14}}>
    <Text style={{color:'white',fontSize:10,fontFamily:fonts.almaraiBold}}>
    : 2 نقاط دوري
    </Text>
    <SvgXml xml={icons[0].gold}/>
  </View>
            </View>
  </View>
  <View style={{...styl.rowContainer3,paddingHorizontal:20,paddingVertical:8,borderRadius:12}}>
  <View style={{...styl.textContainer,backgroundColor:Colors.SUCCESS_300}}>
  <Text style={{...styl.textColers,color:Colors.SUCCESS_600}}>
  جلسة ودية
  </Text>
  </View>
  <View style={{...styl.textContainer,backgroundColor:Colors.WARNING_300}}>
  <Text style={{...styl.textColers,color:Colors.WARNING_600}}>
  جلسة ثابتة
  </Text>
  </View>
  <View style={{...styl.textContainer,backgroundColor:Colors.SECONDARY_300}}>
  <Text style={{...styl.textColers,color:Colors.SECONDARY_600}}>
  جلسة سريعة جداً
  </Text>
  </View>
  <View style={{...styl.textContainer,backgroundColor:Colors.DANGER_300}}>
  <Text style={{...styl.textColers,color:Colors.DANGER_600}}>
  جلسة عامة
  </Text>
  </View>
  </View>
  
  <View style={{...styl.rowContainer2}}>
  <View style={{...styl.raduceContainer1,borderRadius:8,paddingHorizontal:10}}>
  <SvgXml xml={icons[0].chear}/>
  <Text style={{color:'white',fontFamily:fonts.almaraiRegular,fontSize:12}}>
  المقاعد:32
  </Text>
  </View>
  <View style={{...styl.raduceContainer1,borderRadius:8,paddingHorizontal:8,gap:1}}>
  <Text style={{color:'white',fontFamily:fonts.almaraiBold,fontSize:12}}>
  المطلوب:
  </Text>
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
  </View>
  <View style={{...styl.raduceContainer1, borderRadius:8, paddingHorizontal:10, alignItems: 'center'}}>
  <User size="16" color={`${Colors.SECONDARY_600}`}/>
    <Text
      style={{
        color: '#FFFF',
        fontFamily: fonts.almaraiRegular,
        fontSize: 12,
  
      }}
    >
   المسجلين:21
    </Text>
  </View>
  
  </View>
  <View style={{width:'100%',paddingVertical:12,alignItems:'center',justifyContent:'center',borderRadius:12,backgroundColor:Colors.BACKGROUND_3}}>
  <Text style={{color:'#939599',fontFamily:fonts.almaraiRegular,fontSize:8}}>
  انتهى التسجيل والدوري نشط الآن!
  </Text>
  <Text style={{color:'#939599',fontFamily:fonts.almaraiRegular,fontSize:8,marginTop:8}}>
  يمكنك متابعة تقدم الدوري في صفحة المخطط
  </Text>
  </View>
  
  
        </View>
        <View style={{marginTop:12,width:'100%',flexDirection:'row-reverse'}}>
         <Mix/>
        </View>
          </View>
   
      </View>
    );
  }
  
  const styl = StyleSheet.create({

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
        backgroundColor:Colors.BACKGROUND_3,
        justifyContent:'space-between',
        alignItems:'center'
      },
        rowContainer2:{
          flexDirection:'row-reverse',
          alignItems:'center',
          width: "100%",
          justifyContent:'space-between',
        paddingHorizontal:4
        },
  });
  