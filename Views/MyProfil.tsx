import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "./Styles/Index";
import Colors from "../Colors";
import fonts from "../fonts";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import eagl from "../assets/Ellipse 1.png";
import { ArrowRight2 } from "iconsax-react-native";
import { SvgXml } from "react-native-svg";
import { svgs } from "./svg";
import { icons } from "./icons";
import LinearButton from "../Components/linearButton";
export default function MyProfil() {
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
      backgroundColor: Colors.BACKGROUND_5,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 16,
    },
    title: {
      fontFamily: fonts.almaraiBold,
      color: Colors.DEFAULT_WHITE,
      fontSize: 14,
      textAlign: "right",
    },
    imageContainer: {
      paddingHorizontal: 61,
      paddingVertical: 18,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.BACKGROUND_4,
      borderRadius: 10,
    },
    edits: {
      flexDirection: "column",
      columnGap: 8,
    },
    editsShildes: {
      flexDirection: "row",
      width: 103.67,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      backgroundColor: Colors.BACKGROUND_4,
      paddingVertical: 8,
      paddingHorizontal: 10,
    },
    fontBold: {
      fontFamily: fonts.almaraiBold,
    },
    colorOrange: {
      color: Colors.PRIMARY_600,
    },
    RedColor: {
      color: "#FF4343",
    },

    CardsContainer: {
      paddingHorizontal: 24,
      paddingVertical: 8,
      alignItems: "center",
      backgroundColor: Colors.BACKGROUND_4,
      borderRadius: 10,
      width: "100%",
      flexDirection: "row",
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
              paddingVertical: 36,
              alignItems: "center",
              justifyContent: "flex-end",
              paddingHorizontal: 32,
              gap: 7.5,
            }}
          >
            <View style={shadow.container}>
              <Text style={shadow.text}> تعديل الملف الشخصي</Text>
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

        <View style={{ paddingHorizontal: 16, marginTop: 16, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <BlurView
              intensity={0}
              tint="dark"
              style={{ ...shadow.blurContainer2, marginBottom: 12 }}
            >
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 32,
                  paddingVertical: 8,
                }}
              >
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <View></View>
                  <Text style={shadow.title}>الصورة الشخصية</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <View style={shadow.imageContainer}>
                    <Image source={eagl} />
                  </View>
                  <View style={shadow.edits}>
                    <View style={shadow.editsShildes}>
                      <Text
                        style={{ ...shadow.fontBold, ...shadow.colorOrange }}
                      >
                        الاستديو
                      </Text>
                      <SvgXml xml={icons[0].image} />
                    </View>
                    <View style={{ ...shadow.editsShildes, marginVertical: 8 }}>
                      <Text
                        style={{ ...shadow.fontBold, ...shadow.colorOrange }}
                      >
                        الكاميرا
                      </Text>
                      <SvgXml xml={icons[0].cam} />
                    </View>
                    <View style={shadow.editsShildes}>
                      <Text style={{ ...shadow.fontBold, ...shadow.RedColor }}>
                        إزالة
                      </Text>
                      <SvgXml xml={icons[0].delet} />
                    </View>
                  </View>
                </View>
              </View>
            </BlurView>
            <BlurView
              intensity={0}
              tint="dark"
              style={{ ...shadow.blurContainer2, marginBottom: 12 }}
            >
              <View
                style={{
                  width: "100%",
                  zIndex: 7,
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 18,
                  paddingVertical: 8,
                }}
              >
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <LinearButton
                    text="شراء"
                    onPress={() => {}}
                    containerStyle={{
                      width: 65,
                      height: 28,
                    }}
                    linearStyle={{
                      width: 65,
                      height: 28,
                      paddingVertical: 0,
                    }}
                  />
                  <Text style={shadow.title}>تصاميم الورق</Text>
                </View>

                <View style={shadow.CardsContainer}>
                  {/* need images changes */}
                  <SvgXml xml={svgs[0].noactive2} />
                  <SvgXml xml={svgs[0].noactive1} />
                  <SvgXml xml={svgs[0].active} />
                </View>
              </View>
            </BlurView>
            <BlurView
              intensity={0}
              tint="dark"
              style={{ ...shadow.blurContainer2, marginBottom: 12 }}
            >
              <View
                style={{
                  width: "100%",
                  zIndex: 7,
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 18,
                  paddingVertical: 8,
                }}
              >
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <LinearButton
                    text="تأجير"
                    onPress={() => {}}
                    containerStyle={{
                      width: 65,
                      height: 28,
                    }}
                    linearStyle={{
                      width: 65,
                      height: 28,
                      paddingVertical: 0,
                    }}
                  />

                  <Text style={shadow.title}> خلفية الجلسة</Text>
                </View>

                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: Colors.BACKGROUND_4,
                    borderRadius: 10,
                    paddingVertical: 8,
                  }}
                >
                  {/* need images changes */}
                  <SvgXml xml={svgs[0].back} />
                </View>
              </View>
            </BlurView>
            <BlurView
              intensity={0}
              tint="dark"
              style={{ ...shadow.blurContainer2, marginBottom: 12 }}
            >
              <View
                style={{
                  width: "100%",
                  zIndex: 7,
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 18,
                  paddingVertical: 8,
                }}
              >
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <View></View>
                  <Text style={shadow.title}>المعلومات الشخصية</Text>
                </View>

                <View style={styl.inputsFeild}>
                  <View style={styl.inputBox}>
                    <TextInput
                      placeholder="اسم المستخدم"
                      placeholderTextColor={"#A6ABB3"}
                      textAlign={"right"}
                      style={{
                        fontFamily: fonts.almaraiRegular,
                        color: Colors.DEFAULT_WHITE,
                        fontSize: 16,
                        flex: 1,
                      }}
                    />
                    <SvgXml xml={icons[0].user} />
                  </View>
                  <View
                    style={{ width: "100%", marginTop: 4, marginBottom: 16 }}
                  >
                    <Text
                      style={{
                        fontFamily: fonts.almaraiRegular,
                        color: Colors.DEFAULT_WHITE,
                        fontSize: 10,
                      }}
                    >
                      يمكنك تغير اسم المستخدم مرة في الشهر فقط!
                    </Text>
                  </View>
                  <View style={styl.inputBox}>
                    <TextInput
                      placeholderTextColor={"#A6ABB3"}
                      textAlign={"right"}
                      placeholder="البريد الالكتروني"
                      style={{
                        fontFamily: fonts.almaraiRegular,
                        color: Colors.DEFAULT_WHITE,
                        fontSize: 16,
                        flex: 1,
                      }}
                    />
                    <SvgXml xml={icons[0].sms} />
                  </View>
                </View>
                <View style={{ marginTop: 16, width: "100%" }}>
                  <LinearButton
                    text="حفظ"
                    textStyles={{ fontSize: 12, fontFamily: fonts.almaraiBold }}
                    onPress={() => {}}
                    containerStyle={{
                      width: "100%",
                      height: 40,
                    }}
                    linearStyle={{
                      width: "100%",
                      height: 40,
                      paddingVertical: 0,
                    }}
                  />
                </View>
              </View>
            </BlurView>
            <BlurView
              intensity={0}
              tint="dark"
              style={{ ...shadow.blurContainer2, marginBottom: 12 }}
            >
              <View
                style={{
                  width: "100%",
                  zIndex: 7,
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 18,
                  paddingVertical: 8,
                }}
              >
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <View></View>
                  <Text style={shadow.title}> كلمة المرور</Text>
                </View>

                <View style={styl.inputsFeild}>
                  <View style={{ ...styl.inputBox, marginBottom: 16 }}>
                    <TextInput
                      placeholderTextColor={"#A6ABB3"}
                      textAlign={"right"}
                      placeholder="كلمة المرور السابقة"
                      style={{
                        fontFamily: fonts.almaraiRegular,
                        color: Colors.DEFAULT_WHITE,
                        fontSize: 16,
                        flex: 1,
                      }}
                    />
                    <SvgXml xml={icons[0].key} />
                  </View>

                  <View style={styl.inputBox}>
                    <TextInput
                      placeholder=" كلمة المرور الجديدة"
                      placeholderTextColor={"#A6ABB3"}
                      textAlign={"right"}
                      style={{
                        fontFamily: fonts.almaraiRegular,
                        color: Colors.DEFAULT_WHITE,
                        fontSize: 16,
                        flex: 1,
                      }}
                    />
                    <SvgXml xml={icons[0].key} />
                  </View>
                </View>
                <View style={{ marginTop: 16, width: "100%" }}>
                  <LinearButton
                    text="حفظ"
                    textStyles={{ fontSize: 12, fontFamily: fonts.almaraiBold }}
                    onPress={() => {}}
                    containerStyle={{
                      width: "100%",
                      height: 40,
                    }}
                    linearStyle={{
                      width: "100%",
                      height: 40,
                      paddingVertical: 0,
                    }}
                  />
                </View>
              </View>
            </BlurView>
          </ScrollView>
        </View>
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
    borderColor: Colors.PRIMARY_600,
  },
  tabText: {
    color: "white",
    fontFamily: "Almarai_Regular",
  },
  selectedTabText: {
    color: Colors.PRIMARY_600,
  },
  inputsFeild: {
    paddingHorizontal: 13.5,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.BACKGROUND_4,
    borderRadius: 10,
    width: "100%",
  },
  inputBox: {
    backgroundColor: Colors.BACKGROUND_5,
    borderRadius: 8,
    width: "100%",
    gap: 8,

    flexDirection: "row",
    justifyContent: "flex-end",
  },
  almariLite: {
    fontFamily: fonts.almaraiLight,
  },
  //  messing shadow
  button: {
    borderRadius: 8,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFAF36",
    marginTop: 16,
    paddingVertical: 8,
    shadowColor: "#FFCF0B",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
  },
});
