import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text, ScrollView } from 'react-native';
import Colors from "../Colors";
import fonts from "../fonts";
import { SvgXml } from "react-native-svg";
import { svgs } from '../Views/svg';
import { Star1 } from "iconsax-react-native";
import RankRow from './RankRow';
import { icons } from '../Views/icons';

const Champions = () => {
  const [type, setType] = useState("البلاتينية");

  return (
    <View style={styles.viewContainer}>
      <View style={styles.tabContainer}>
      <Text style={styles.dateText}>تبدأ البطولات بتاريخ 28/9/2024</Text>
        <SvgXml xml={icons[0].date}/>
      </View>
      <View style={styles.champions}>
        <View style={styles.championRow}> 
          <Text style={styles.championsText}>الأبطال</Text>
          <Text style={styles.championsTextN}>45</Text>
          <SvgXml xml={svgs[0].trophySmall}/>
        </View>
      </View>
      
      </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,

  },
  dateText: {
    color:'white',
    fontSize:12,
    fontFamily:fonts.almaraiRegular,
    margin:8,
  },
  tabContainer: {
    width: "100%",
    backgroundColor: Colors.BACKGROUND_3,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    paddingTop: 8,
    zIndex: 8,
    marginTop: 8,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
champions: {
  width: 168,
  height: 206,
  backgroundColor: Colors.BACKGROUND_4,
  alignSelf:"flex-end",
  marginBottom: 8,
  marginTop: 8,
  gap:4,
  borderRadius:16,
  padding:8,
},
championRow: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 25,
  justifyContent: "flex-end",
},
championsTextN: {
  fontSize:20,
  fontFamily: fonts.almaraiRegular,
  color:"white"
},
championsText: {
  fontSize: 15,
  fontFamily: fonts.almaraiBold,
  color: Colors.PRIMARY_700,
},


});

export default Champions;
