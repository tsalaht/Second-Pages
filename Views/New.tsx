import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Pressable,
    Dimensions,
    TextInput
  } from "react-native";
  import styles from "./Styles/Index";
  import Colors from "../Colors";
  import fonts from "../fonts";
  import React, { useState } from "react";
  import {
    ArrowRight2,SearchNormal1
  } from "iconsax-react-native";
  import { BlurView } from "expo-blur";

  export default function New() {

    const shadow = StyleSheet.create({
      container: {
        padding: 16,
        backgroundColor: Colors.NEUTRALS,
        borderRadius: 8,
        shadowColor: "#0000004D",
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
        zIndex:999999
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
                backgroundColor: Colors.BACKGROUND_5,
                borderRadius: 16,
                alignItems: "center",
     
                gap: 4,
             
              }}
            >
   
           
            </View>
            <View style={shadow.container}>
              <Text style={shadow.text}>اضافة صديق</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                backgroundColor: Colors.BACKGROUND_5,
                borderRadius: 16,
                alignItems: "center",
                padding: 12,
                gap: 4,
                marginLeft:-20
              }}
            >
              <Text style={{ color: Colors.BACKGROUND_3, fontFamily: "Almarai_Regular" }}>
                عودة
              </Text>
              <ArrowRight2 size={16} color={Colors.BACKGROUND_3} />
            </View>
          </View>
        </BlurView>
  
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

    <View style={styles.insideBigContainer}>
<Text style={{color:'#A6ABB3',fontSize:13,fontFamily:fonts.almaraiBold}}>
ادخل بريد أو رمو الإضافة في مربع البحث
</Text>
    </View>
    </View>
    </View>

        </ImageBackground>
      </View>
    );
  }
  
  