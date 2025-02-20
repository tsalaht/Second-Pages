import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Pressable,
    Dimensions,
    TouchableWithoutFeedback 
  } from "react-native";
  import styles from "./Styles/Index";
  import Colors from "../Colors";
  import fonts from "../fonts";
  import React, { useRef, useState, useCallback } from "react";
  import { icons } from "./icons";
import BottomSheet from "@gorhom/bottom-sheet";
  import {
    ArrowRight2,
    Profile2User,
    Message2,UserAdd,Rank
  } from "iconsax-react-native";
  import { SvgXml } from "react-native-svg";
  import { svgs } from "./svg";
  import { useDispatch } from "react-redux";
  import { BlurView } from "expo-blur";

  export default function Profile() {
    const bottomSheetRef = useRef<any>(null);
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [selectedTab, setSelectedTab] = useState<string>("adds"); 
    const isSelected = (tab:any) => selectedTab === tab;
    const [type, setType] = useState("نبذة");
    const openBottomSheet = useCallback(() => {
      setBottomSheetVisible(true);
      bottomSheetRef.current?.expand();
    }, []);
  
    // Function to close the bottom sheet
    const closeBottomSheet = useCallback(() => {
      setBottomSheetVisible(false);
      bottomSheetRef.current?.close();
    }, []);
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
        backgroundColor: '#1b1e2188',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,

        zIndex:0
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
              خيارات
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
  <View style={{paddingHorizontal:16,marginTop:16,flexDirection:'column',gap:8,flex:0.98}}>
  <BlurView intensity={2} tint="dark" style={shadow.blurContainer2}>
          <View
            style={{
              width: "100%",
     paddingHorizontal:19.5,
     paddingBottom:30
            }}
          >
       <View style={{   width: "100%",alignItems:'center',justifyContent:'center'}}>
<View style={{paddingHorizontal:24,paddingVertical:6,    borderBottomEndRadius: 8, borderBottomStartRadius: 8,backgroundColor:Colors.BACKGROUND_3}}>
<Text style={{fontFamily:fonts.almaraiBold,color:'white',fontSize:8}}>
Saad14
</Text>
</View>
       </View>
       <View style={{flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center',marginTop:14}}>
<View style={{flexDirection:'column',alignItems:'center',gap:8}}>
<View style={{paddingLeft:39,flexDirection:'row-reverse',backgroundColor:Colors.BACKGROUND_5,borderRadius:12,gap:4,alignItems:'center',paddingVertical:4,paddingRight:10
}}>
    <SvgXml xml={icons[0].whiteSTART} />
<Text style={{fontFamily:fonts.almaraiRegular,color:'white',fontSize:10,marginBottom:1}}>
    2
</Text>

</View>
<View style={{paddingLeft:39,flexDirection:'row-reverse',backgroundColor:Colors.BACKGROUND_5,borderRadius:12,gap:4,alignItems:'center',paddingVertical:4,paddingRight:10
}}>
    <SvgXml xml={icons[0].orngeStart} />
<Text style={{fontFamily:fonts.almaraiRegular,color:'white',fontSize:10,marginBottom:1}}>
23
</Text>

</View>
</View>
<View style={{position:'relative',bottom:-20}}>
<SvgXml xml={icons[0].eagle3} />
<View style={{width:100,height:21.46,alignItems:'center',justifyContent:'center',backgroundColor:Colors.BACKGROUND_4,borderRadius:5.72,top:-10}}>
<Text style={{fontFamily:fonts.almaraiBold,color:'white',fontSize:8}}>
مبتدئ
</Text>
</View>
</View>
<View style={{flexDirection:'column',alignItems:'center',gap:8}}>
<View style={{paddingLeft:39,flexDirection:'row-reverse',backgroundColor:Colors.BACKGROUND_5,borderRadius:12,gap:4,alignItems:'center',paddingVertical:4,paddingRight:10
}}>
    <SvgXml xml={icons[0].emptyh} />
<Text style={{fontFamily:fonts.almaraiRegular,color:'white',fontSize:10,marginBottom:1}}>
    2
</Text>

</View>
<View style={{paddingLeft:39,flexDirection:'row-reverse',backgroundColor:Colors.BACKGROUND_5,borderRadius:12,gap:4,alignItems:'center',paddingVertical:4,paddingRight:10
}}>
    <SvgXml xml={icons[0].class} />
<Text style={{fontFamily:fonts.almaraiRegular,color:'white',fontSize:10,marginBottom:1}}>
23
</Text>

</View>
</View>
       </View>
          </View>
        </BlurView>
        <View
            style={{
              width: "100%",
              backgroundColor: Colors.BACKGROUND_5,
              padding: 8,
              zIndex: 0,
              marginTop: 8,
              borderRadius: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Pressable onPress={() => setType("الجوائز")}>
              <View
                style={[styl.tab, type === "الجوائز" && styl.selectedTab]}
              >
                <Text
                  style={[
                    styl.tabText,
                    type === "الجوائز" && styl.selectedTabText,
                  ]}
                >
            الجوائز
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setType("التصنيف")}>
              <View style={[styl.tab, type === "التصنيف" && styl.selectedTab]}>
                <Text
                  style={[
                    styl.tabText,
                    type === "التصنيف" && styl.selectedTabText,
                  ]}
                >
         التصنيف
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setType("نبذة")}>
              <View
                style={[styl.tab, type === "نبذة" && styl.selectedTab]}
              >
                <Text
                  style={[
                    styl.tabText,
                    type === "نبذة" && styl.selectedTabText,
                  ]}
                >
             نبذة
                </Text>
              </View>
            </Pressable>
          </View>
          <View style={{width:'100%',flex:1,backgroundColor:Colors.BACKGROUND_5,borderRadius:16,padding:16}}>
            <Pressable onPress={openBottomSheet} style={{width:'100%',flex:1,backgroundColor:Colors.BACKGROUND_4,borderRadius:16,alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
<Text style={{color:'#A6ABB3',fontSize:13,fontFamily:fonts.almaraiBold}}>
لا توجد نبذة عامة
</Text>
</View>
            </Pressable>
     
          </View>
  </View>
  {isBottomSheetVisible && (
    <>
     <BlurView intensity={100} blurReductionFactor={10} tint="dark" style={[StyleSheet.absoluteFill,{backgroundColor:'#0000003d'}]} />
     <TouchableWithoutFeedback onPress={closeBottomSheet}>
            <View style={StyleSheet.absoluteFillObject} />
          </TouchableWithoutFeedback>
            <BottomSheet
              ref={bottomSheetRef}
              handleComponent={null} 
              snapPoints={["32%"]}
              onClose={closeBottomSheet}
              backgroundStyle={{
                backgroundColor: Colors.BACKGROUND_5,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32, 
              }}
            >
              <View style={{width:'100%',paddingVertical:32 }}>
                <View style={styl.bottomSheetContent}>
                <SvgXml xml={icons[0].addW}/>
                <View style={styl.bottomSheetContentText}>
                <Text style={{ fontSize: 16, color: 'white', fontFamily: fonts.almaraiRegular }}>
                اضافة
                </Text>
                </View>
                </View>
                <View style={styl.bottomSheetContent}>
                <SvgXml xml={icons[0].gift}/>
                <View style={styl.bottomSheetContentText}>
                <Text style={{ fontSize: 16, color: 'white', fontFamily: fonts.almaraiRegular }}>
                اهداء
                </Text>
                </View>
                </View>
                <View style={styl.bottomSheetContent}>
                <SvgXml xml={icons[0].like}/>
                <View style={styl.bottomSheetContentText}>
                <Text style={{ fontSize: 16, color: 'white', fontFamily: fonts.almaraiRegular }}>
                إعجاب
                </Text>
                </View>
                </View>
                <View style={styl.bottomSheetContent}>
                <SvgXml xml={icons[0].block}/>
                <View style={styl.bottomSheetContentText}>
                <Text style={{ fontSize: 16, color:Colors.DANGER_500, fontFamily: fonts.almaraiRegular }}>
                إعجاب
                </Text>
                </View>
                </View>
              </View>
            </BottomSheet>
      
            </>
          )}
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
bottomSheetContent:{
  paddingHorizontal:24,
  paddingVertical:12,
  gap:16,
  alignItems:'center',
  flexDirection:'row-reverse',
  borderBottomWidth:1,
  borderBottomColor:Colors.BACKGROUND_4
},
bottomSheetContentText:{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
}

  });