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
  import { icons } from "./icons";
  import {
    ArrowRight2,
  } from "iconsax-react-native";
  import { SvgXml } from "react-native-svg";
  import { BlurView } from "expo-blur";
  import Overview from "../Components/Overview";
  import Chat from "../Components/Chat";
  import Plan from "../Components/Plan";
  import Adds from "../Components/Adds";
  import SeeFriends from "../Components/SeeFriends";
  import Ranks from "../Components/Ranks";
  export default function Friends() {
    const [selectedTab, setSelectedTab] = useState<string>("adds"); 
    const getColoredIcon = (xmlString:any, color:any, isRankIcon = false) => {
      if (isRankIcon) {
        // For rank icon: change both stroke and fill
        return xmlString
          .replace(/stroke="[^"]*"/g, `stroke="${color}"`)
          .replace(/fill="[^"]*"/g, `fill="${color}"`);
      } else {
        // For other icons: change only the stroke color
        return xmlString.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
      }
    };
    const isSelected = (tab:any) => selectedTab === tab;

    const coloredAddIconXml = getColoredIcon(icons[0].addF, isSelected("adds") ? '#FFFFFF' : Colors.BACKGROUND_3);
    const coloredChatIconXml = getColoredIcon(icons[0].chatT, isSelected("chats") ? '#FFFFFF' : Colors.BACKGROUND_3);
    const coloredFriendsIconXml = getColoredIcon(icons[0].twof, isSelected("friends") ? '#FFFFFF' : Colors.BACKGROUND_3);
    const coloredRankIconXml = getColoredIcon(icons[0].rank, isSelected("leaders") ? '#FFFFFF' : Colors.BACKGROUND_3, true);
    
    const renderContent = () => {
      switch (selectedTab) {
        case "adds":
          return <Adds />;
        case "chats":
          return <Chat />;
        case "friends":
          return <SeeFriends />;
        case "leaders":
          return <Ranks />;
        default:
          return <Overview />;
      }
    };
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
                padding: 12,
                gap: 4,
              }}
            >
              <Text style={{ color: Colors.BACKGROUND_3, fontFamily: "Almarai_Regular" }}>
              الطلبات
              </Text>
           
            </View>
            <View style={shadow.container}>
              <Text style={shadow.text}>الأصدقاء</Text>
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
              <View style={{ width: "100%", padding: 8,backgroundColor:Colors.BACKGROUND_5,borderRadius:16,marginBottom:8 }}>
<View style={{ width: "100%", paddingVertical:12,backgroundColor:'white',borderRadius:12,flexDirection:'row',justifyContent:'center',alignItems:'center',gap:8}}>
<Text style={{fontFamily:fonts.almaraiBold,color:Colors.BACKGROUND_5,fontSize:10}}>
دعوة صديق
</Text>
<SvgXml xml={icons[0].upload} />
</View>
              </View>
              <View style={{
                backgroundColor: Colors.BACKGROUND_5,
                padding: 8,
                borderRadius: 16,
                width: "100%",
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
             
              }}>
                <Pressable onPress={() => setSelectedTab("adds")}>
                  <View style={{
                         width:80.75,
                         height:58,
                    backgroundColor: isSelected("adds") ? Colors.PRIMARY_600 : Colors.BACKGROUND_4,
                    borderRadius: 16,
                    flexDirection: 'column',
                    alignItems: 'center',
                           justifyContent:'center'
                  }}>
                  <SvgXml xml={coloredAddIconXml} />
                    <Text style={{
                      color: isSelected("adds") ? '#FFFFFF' : Colors.BACKGROUND_3,
                      fontSize: 14,
                      fontFamily: fonts.almaraiRegular,
                      marginTop: 4
                    }}>
                    الاضافات
                    </Text>
                  </View>
                </Pressable>
  
                <Pressable onPress={() => setSelectedTab("chats")}>
                  <View style={{
                        width:80.75,
                        height:58,
                    backgroundColor: isSelected("chats") ? Colors.PRIMARY_600 : Colors.BACKGROUND_4,
                    borderRadius: 16,
                    flexDirection: 'column',
                    alignItems: 'center',
                           justifyContent:'center'
                  }}>
        <SvgXml xml={coloredChatIconXml} />
                    <Text style={{
                      color: isSelected("chats") ? '#FFFFFF' : Colors.BACKGROUND_3,
                      fontSize: 14,
                      fontFamily: fonts.almaraiRegular,
                      marginTop: 4
                    }}>
                    المحادثات
                    </Text>
                  </View>
                </Pressable>
                <Pressable onPress={() => setSelectedTab("friends")}>
                  <View style={{
                    width:80.75,
                    height:58,
                    backgroundColor: isSelected("friends") ? Colors.PRIMARY_600 : Colors.BACKGROUND_4,
                    borderRadius: 16,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent:'center'
                  }}>
                           <SvgXml xml={coloredFriendsIconXml} />
                    <Text style={{
                      color: isSelected("friends") ? '#FFFFFF' : Colors.BACKGROUND_3,
                      fontSize: 14,
                      fontFamily: fonts.almaraiRegular,
                      marginTop: 4
                    }}>
                  الاصدقاء
                    </Text>
                  </View>
                </Pressable>
                <Pressable onPress={() => setSelectedTab("leaders")}>
                  <View style={{
                    width:80.75,
                    height:58,
                    backgroundColor: isSelected("leaders") ? Colors.PRIMARY_600 : Colors.BACKGROUND_4,
                    borderRadius: 16,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent:'center'
                  }}>
                
                      <SvgXml xml={coloredRankIconXml} />
                    <Text style={{
                      color: isSelected("leaders") ? '#FFFFFF' : Colors.BACKGROUND_3,
                      fontSize: 14,
                      fontFamily: fonts.almaraiRegular,
                      marginTop: 4
                    }}>
                    المتصدرون
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
  
  