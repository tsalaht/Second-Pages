import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Pressable,
    Dimensions,
    TextInput
  } from "react-native";
  import { SvgXml } from "react-native-svg";
import { svgs } from "../Views/svg";
import { icons } from "../Views/icons";
  import styles from "./Styles/Index";
  import Colors from "../Colors";
  import fonts from "../fonts";
  import React, { useState } from "react";
  import {
    ArrowRight2,SearchNormal1
  } from "iconsax-react-native";
  import { BlurView } from "expo-blur";

  export default function Banded() {

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
              <Text style={shadow.text}>اللاعبين المحظورين</Text>
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
  
        <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 8,
        flexDirection: "column",
        gap: 8,
      }}
    >
      <View style={styles.searchBox}>
        <View style={styles.searchInput}>
          <TextInput
            placeholder="بحث"
            style={{
              fontFamily: fonts.almaraiRegular,
              fontSize: 12,
              color: "white",
            }}
            placeholderTextColor={"#9C9FA6"}
          ></TextInput>
        </View>
        <View
          style={{
            backgroundColor: Colors.BACKGROUND_4,
            borderRadius: 4,
            width: 45,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SearchNormal1 size="18" color={Colors.PRIMARY_600} />
        </View>
      </View>
      <View style={styles.bigContainer}>
        <View style={styles.insideBigContainer2}>
        <View style={styles.zoneRow}>
      <View style={{flexDirection:'row',alignItems:'center',gap:8}}>
      <View style={{width:67,height:32,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:4,flexDirection:'row',gap:8}}>
      <Text style={{fontSize:10,fontFamily:fonts.almaraiBold,color:Colors.DANGER_600}}>
      إلغاء الحظر
      </Text>
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
    </View>

        </ImageBackground>
      </View>
    );
  }
  
  