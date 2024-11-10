import { View, Text, StyleSheet } from "react-native";
import Colors from "../Colors";
import fonts from "../fonts";
import React from "react";
import { SvgXml } from "react-native-svg";
import { icons } from "./icons";

const Frame = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.BACKGROUND_5,
        paddingTop: 50,
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          width: "100%",
          paddingHorizontal: 19.5,
          paddingBottom: 30,
        }}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              paddingHorizontal: 24,
              paddingVertical: 6,
              borderBottomEndRadius: 8,
              borderBottomStartRadius: 8,
              backgroundColor: Colors.BACKGROUND_3,
              elevation: 10,
              shadowColor: "#000",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 4,
            }}
          >
            <Text
              style={{
                fontFamily: fonts.almaraiBold,
                color: "white",
                fontSize: 8,
              }}
            >
              Saad14
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 14,
          }}
        >
          <View
            style={{ flexDirection: "column", alignItems: "center", gap: 8 }}
          >
            <View
              style={{
                elevation: 10,
                shadowColor: "#000",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 4,
                paddingLeft: 39,
                flexDirection: "row-reverse",
                backgroundColor: Colors.BACKGROUND_5,
                borderRadius: 12,
                gap: 4,
                alignItems: "center",
                paddingVertical: 4,
                paddingRight: 10,
              }}
            >
              <SvgXml xml={icons[0].whiteSTART} />
              <Text
                style={{
                  fontFamily: fonts.almaraiRegular,
                  color: "white",
                  fontSize: 10,
                  marginBottom: 1,
                }}
              >
                2
              </Text>
            </View>
            <View
              style={{
                elevation: 10,
                shadowColor: "#000",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 4,
                paddingLeft: 39,
                flexDirection: "row-reverse",
                backgroundColor: Colors.BACKGROUND_5,
                borderRadius: 12,
                gap: 4,
                alignItems: "center",
                paddingVertical: 4,
                paddingRight: 10,
              }}
            >
              <SvgXml xml={icons[0].orngeStart} />
              <Text
                style={{
                  fontFamily: fonts.almaraiRegular,
                  color: "white",
                  fontSize: 10,
                  marginBottom: 1,
                }}
              >
                23
              </Text>
            </View>
          </View>
          <View style={{ position: "relative", bottom: -20 }}>
            <SvgXml xml={icons[0].eagle3} />
            <View
              style={{
                width: 100,
                height: 21.46,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: Colors.BACKGROUND_4,
                borderRadius: 5.72,
                top: -10,
                elevation: 10,
                shadowColor: "#000",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 4,
              }}
            >
              <Text
                style={{
                  fontFamily: fonts.almaraiBold,
                  color: "white",
                  fontSize: 8,
                }}
              >
                مبتدئ
              </Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "column", alignItems: "center", gap: 8 }}
          >
            <View
              style={{
                elevation: 10,
                shadowColor: "#000",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 4,
                paddingLeft: 39,
                flexDirection: "row-reverse",
                backgroundColor: Colors.BACKGROUND_5,
                borderRadius: 12,
                gap: 4,
                alignItems: "center",
                paddingVertical: 4,
                paddingRight: 10,
              }}
            >
              <SvgXml xml={icons[0].emptyh} />
              <Text
                style={{
                  fontFamily: fonts.almaraiRegular,
                  color: "white",
                  fontSize: 10,
                  marginBottom: 1,
                }}
              >
                2
              </Text>
            </View>
            <View
              style={{
                elevation: 10,
                shadowColor: "#000",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 4,
                paddingLeft: 39,
                flexDirection: "row-reverse",
                backgroundColor: Colors.BACKGROUND_5,
                borderRadius: 12,
                gap: 4,
                alignItems: "center",
                paddingVertical: 4,
                paddingRight: 10,
              }}
            >
              <SvgXml xml={icons[0].class} />
              <Text
                style={{
                  fontFamily: fonts.almaraiRegular,
                  color: "white",
                  fontSize: 10,
                  marginBottom: 1,
                }}
              >
                23
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ ...styles.textContainer, marginBottom: 30 }}>
        <Text
          style={{
            color: "white",
            fontFamily: fonts.almaraiBold,
            fontSize: 12,
          }}
        >
          لا توجد نبذة عامة
        </Text>
      </View>
      <View style={styles.firstContainer}>
        <View style={styles.buttonsContainer}>
          <View style={{ ...styles.smalButtons, backgroundColor: "white" }}>
            <SvgXml xml={icons[0].addB} />
            <Text
              style={{
                color: Colors.BACKGROUND_5,
                fontFamily: fonts.almaraiBold,
                fontSize: 12,
              }}
            >
              إضافة
            </Text>
          </View>
          <View style={{ ...styles.smalButtons, backgroundColor: "white" }}>
            <SvgXml xml={icons[0].heartB} />
            <Text
              style={{
                color: Colors.BACKGROUND_5,
                fontFamily: fonts.almaraiBold,
                fontSize: 12,
              }}
            >
              إعجاب
            </Text>
          </View>
          <View
            style={{
              ...styles.smalButtons,
              backgroundColor: Colors.PRIMARY_600,
              elevation: 10, 
              shadowColor:Colors.PRIMARY_600, 
              shadowOffset: { width: 2, height: 4 }, 
              shadowOpacity: 0.8, 
              shadowRadius: 4,
            }}
          >
            <SvgXml xml={icons[0].gift16} />
            <Text
              style={{
                color: "white",
                fontFamily: fonts.almaraiBold,
                fontSize: 12,
              }}
            >
              إهداء
            </Text>
          </View>
        </View>
        <View style={styles.bigButton}>
          <Text
            style={{
              color: Colors.PRIMARY_500,
              fontFamily: fonts.almaraiBold,
              fontSize: 14,
            }}
          >
            لا توجد نبذة عامة
          </Text>
        </View>
      </View>
      <View
        style={{
          ...styles.bigButton,
          backgroundColor: Colors.BACKGROUND_3,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: "#939599",
            fontFamily: fonts.almaraiBold,
            fontSize: 14,
          }}
        >
          عودة
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  firstContainer: {
    borderRadius: 12,
    backgroundColor: Colors.BACKGROUND_4,
    padding: 12,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    gap: 12,
  },
  buttonsContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  smalButtons: {
    paddingVertical: 6.5,
    width: 91,
    alignItems: "center",
    justifyContent: "center",
    gap: 6.59,
    borderRadius: 6.59,
    flexDirection: "row-reverse",
  },
  bigButton: {
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: Colors.BACKGROUND_5,
  },
});

export default Frame;
