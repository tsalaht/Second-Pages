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
  import {
    ArrowRight2,
  } from "iconsax-react-native";
  import { SvgXml } from "react-native-svg";
  import { svgs } from "./svg";
  import { BlurView } from "expo-blur";
  import MyOredrs from "../Components/MyOredrs";
  import FreindOrders from "../Components/FreindOrders";
  export default function Orders() {
    const [selectedTab, setSelectedTab] = useState<string>("requests"); 
    const isSelected = (tab:any) => selectedTab === tab;
    const renderContent = () => {
      switch (selectedTab) {
        case "requests":
          return <FreindOrders />;
        case "myrequests":
          return <MyOredrs />;
        default:
          return <FreindOrders />;
      }
    };
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
              <Text style={shadow.text}>الطلبات</Text>
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
  
        
          {renderContent()}
  
          <BlurView intensity={5} tint="dark" style={{ ...shadow.blurContainer2 }}>
            <View style={{ width: "100%", padding: 12 }}>
              <View style={{
                backgroundColor: Colors.BACKGROUND_5,
                padding: 8,
                borderRadius: 16,
                width: "100%",
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Pressable onPress={() => setSelectedTab("myrequests")}>
                  <View style={{
                    // paddingHorizontal: 28,
                    paddingVertical: 8,
                    backgroundColor: isSelected("myrequests") ? Colors.PRIMARY_600 : Colors.BACKGROUND_4,
                    borderRadius: 16,
                    flexDirection: 'column',
                    alignItems: 'center',
                    width:163
                  }}>
                
                    <Text style={{
                      color: isSelected("myrequests") ? '#FFFFFF' : Colors.BACKGROUND_3,
                      fontSize: 14,
                      fontFamily: fonts.almaraiRegular,
                      marginTop: 4
                    }}>
                   طلباتي
                    </Text>
                  </View>
                </Pressable>
  
                <Pressable onPress={() => setSelectedTab("requests")}>
                  <View style={{
                                 width:163,
                    paddingVertical: 8,
                    backgroundColor: isSelected("requests") ? Colors.PRIMARY_600 : Colors.BACKGROUND_4,
                    borderRadius: 16,
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>

                    <Text style={{
                      color: isSelected("requests") ? '#FFFFFF' : Colors.BACKGROUND_3,
                      fontSize: 14,
                      fontFamily: fonts.almaraiRegular,
                      marginTop: 4
                    }}>
                  طلبات الصداقة
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
  
  