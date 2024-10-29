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
  import {

    ArrowRight2,
 User,
  } from "iconsax-react-native";
  import { SvgXml } from "react-native-svg";
import { svgs } from "../Views/svg";

  import { useDispatch } from "react-redux";
import { icons } from "../Views/icons";
  import { BlurView } from "expo-blur";
  
  export default function Plan() {
    const { width, height } = Dimensions.get("window");
    const dispatch = useDispatch();
    const [type, setType] = useState("النهائي");
    return (
      <View style={{...styles.viewContainer}}>
        <View style={{  paddingHorizontal:10}}>
        <View
            style={{
              width: "100%",
              backgroundColor: Colors.BACKGROUND_5,
              padding: 8,
              zIndex: 8,
              marginTop: 8,
              borderRadius: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            
            }}
          >
            <Pressable onPress={() => setType("ربع النهائي")}>
              <View
                style={[styl.tab, type === "ربع النهائي" && styl.selectedTab]}
              >
                <Text
                  style={[
                    styl.tabText,
                    type === "ربع النهائي" && styl.selectedTabText,
                  ]}
                >
        ربع النهائي
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setType("نصف النهائي")}>
              <View style={[styl.tab, type === "نصف النهائي" && styl.selectedTab]}>
                <Text
                  style={[
                    styl.tabText,
                    type === "نصف النهائي" && styl.selectedTabText,
                  ]}
                >
               نصف النهائي
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setType("النهائي")}>
              <View
                style={[styl.tab, type === "النهائي" && styl.selectedTab]}
              >
                <Text
                  style={[
                    styl.tabText,
                    type === "النهائي" && styl.selectedTabText,
                  ]}
                >
                النهائي
                </Text>
              </View>
            </Pressable>
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
        selectedTab: {
          backgroundColor: Colors.PRIMARY_600,
        },
        tabText: {
          color: "white",
          fontFamily: "Almarai_Regular",
        },
        selectedTabText: {
          color:Colors.DEFAULT_WHITE,
        },
     

 
   
    
  });
  