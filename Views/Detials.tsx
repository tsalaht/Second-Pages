import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import styles from "./Styles/Index";
import Colors from "../Colors";
import fonts from "../fonts";
import React, { useState } from "react";
import LinearButton2 from "../Components/linearButton2";
import {
  Profile2User,
  ArrowRight2,
  SearchNormal1,
  Message2,User,Data
} from "iconsax-react-native";
import { SvgXml } from "react-native-svg";
import Users from "../Components/Users";
import { svgs } from "./svg";
import Champions from "../Components/Champions";
import Leaderboard from "../Components/Leaderboard";
import { setActiveComponent } from "../Store/navigationSlice";
import { useDispatch } from "react-redux";
import { icons } from "./icons";
import { BlurView } from "expo-blur";
import Mix from "../Components/Mix";

export default function Detials() {
  const { width, height } = Dimensions.get("window");
  const dispatch = useDispatch();

  const shadow = StyleSheet.create({
    // inside shadow
    container: {
      padding: 16,
      backgroundColor: Colors.NEUTRALS,
      borderRadius: 8,
      shadowColor: "#0000004D",
      // marginLeft: 45,
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 6.8,
      elevation: 10,
    },
    text: {
      color: Colors.PRIMARY_600,
      fontFamily: fonts.almaraiRegular,
    },
    blurContainer: {
      width: "100%",
      overflow: "hidden",
      backgroundColor: Colors.BACKGROUND_3,
      alignItems: "center",
      justifyContent: "center",
      borderBottomEndRadius: 24,
      borderBottomStartRadius: 24,
    },
    blurContainer2: {
      width: "100%",
      overflow: "hidden",
      backgroundColor: Colors.BACKGROUND_3,
      alignItems: "center",
      justifyContent: "center",
      borderTopEndRadius: 24,
      borderTopStartRadius: 24,
    },
  });

  return (
    <View style={styles.viewContainer}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/plagin.png")}
        resizeMode="cover"
        imageStyle={{
          opacity: 0.1,
        }}
      >
        <BlurView intensity={5} tint="dark" style={shadow.blurContainer}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              paddingVertical: 20,
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 32,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                borderRadius: 16,
                alignItems: "center",
                padding: 12,
                gap: 21.25,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: fonts.almaraiBold,
                  color: Colors.PRIMARY_700,
                }}
              >
                الأبطال
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: fonts.almaraiRegular,
                  color: "white",
                }}
              >
                45
              </Text>
              <SvgXml xml={svgs[0].trophySmall} />
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: Colors.BACKGROUND_5,
                borderRadius: 16,
                alignItems: "center",
                padding: 12,
                gap: 4,
              }}
            >
              <Text
                style={{
                  color: Colors.BACKGROUND_3,
                  fontFamily: "Almarai_Regular",
                }}
              >
                عودة
              </Text>
              <ArrowRight2 size={16} color={Colors.BACKGROUND_3} />
            </View>
          </View>
        </BlurView>

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
          <Text
                style={{
                  fontSize: 15,
                  fontFamily: fonts.almaraiBold,
                  color: Colors.PRIMARY_700,
                }}
              >
                الأبطال
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: fonts.almaraiRegular,
                  color: "white",
                }}
              >
                45
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
<View style={{...styl.textContainer,backgroundColor:Colors.SUCCESS_400}}>
<Text style={{...styl.textColers,color:Colors.SUCCESS_600}}>
جلسة ودية
</Text>
</View>
<View style={{...styl.textContainer,backgroundColor:Colors.WARNING_400}}>
<Text style={{...styl.textColers,color:Colors.WARNING_600}}>
جلسة ثابتة
</Text>
</View>
<View style={{...styl.textContainer,backgroundColor:Colors.SECONDARY_400}}>
<Text style={{...styl.textColers,color:Colors.SECONDARY_600}}>
جلسة سريعة جداً
</Text>
</View>
<View style={{...styl.textContainer,backgroundColor:Colors.DANGER_400}}>
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
<Pressable>
<View style={{width:'100%',paddingVertical:12,alignItems:'center',justifyContent:'center',borderRadius:12,backgroundColor:Colors.BACKGROUND_3}}>
<Text style={{color:'#939599',fontFamily:fonts.almaraiRegular,fontSize:8}}>
انتهى التسجيل والدوري نشط الآن!
</Text>
<Text style={{color:'#939599',fontFamily:fonts.almaraiRegular,fontSize:8,marginTop:8}}>
يمكنك متابعة تقدم الدوري في صفحة المخطط
</Text>
</View>
</Pressable>

      </View>
      <View style={{marginTop:12,width:'100%',flexDirection:'row-reverse'}}>
       <Mix/>
      </View>
        </View>
        <BlurView
          intensity={5}
          tint="dark"
          style={{ ...shadow.blurContainer2 }}
        >
          <View style={{ width: "100%", padding: 12 }}>

            <View style={{backgroundColor:Colors.BACKGROUND_5,padding:8,borderRadius:16, width: "100%",justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
              <Pressable>
              <View style={{paddingHorizontal:28,paddingVertical:8,backgroundColor:Colors.BACKGROUND_4,borderRadius:16,flexDirection:'column',alignItems:'center'}}>

<Data size="24" color={`${Colors.BACKGROUND_3}`} style={{ transform: [{ rotate: '90deg' }] }}/>
<Text style={{color:Colors.BACKGROUND_3,fontSize:14,fontFamily:fonts.almaraiRegular,marginTop:4}}>
المخطط
</Text>
</View>
              </Pressable>
              <Pressable>
              <View style={{paddingHorizontal:28,paddingVertical:8,backgroundColor:Colors.PRIMARY_600,borderRadius:16,flexDirection:'column',alignItems:'center'}}>

<SearchNormal1 size="24" color='#ffff' />
<Text style={{color:'white',fontSize:14,fontFamily:fonts.almaraiRegular,marginTop:4}}>
نظرة عامة
</Text>
</View>
              </Pressable>
              <Pressable>
              <View style={{paddingHorizontal:28,paddingVertical:8,backgroundColor:Colors.BACKGROUND_4,borderRadius:16,flexDirection:'column',alignItems:'center'}}>

<Message2 size="24" color={`${Colors.BACKGROUND_3}`} />
<Text style={{color:Colors.BACKGROUND_3,fontSize:14,fontFamily:fonts.almaraiRegular,marginTop:4}}>
دردشة
</Text>
</View>
              </Pressable>

            </View>
          </View>
        </BlurView>
      </ImageBackground>
    </View>
  );
}

const styl = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  tab: {
    borderWidth: 1,
    borderColor: "transparent",
    paddingVertical: 8,
    width: 104,
    backgroundColor: Colors.BACKGROUND_4,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },

  selectedTabText: {
    color: Colors.DEFAULT_WHITE,
  },
  bottmRaduse: {
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
  },

  iconsContainer: {
    padding: 12,
    backgroundColor: Colors.BACKGROUND_5,
    borderRadius: 16,
  },
  tab2: {
    borderWidth: 1,
    borderColor: "transparent",
    paddingVertical: 8,
    width: 159.5,
    backgroundColor: Colors.BACKGROUND_4,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
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
