import React, { useState } from 'react';
import { StyleSheet, View,Text,ScrollView,Pressable } from 'react-native';
import Colors from "../Colors";
import fonts from "../fonts";
import { SvgXml } from "react-native-svg";
import { svgs } from '../Views/svg';
const Leaderboard = () => {
  const [more,setMore]= useState(false)
    return (
        <View style={{flex:1}}>
            <View style={styles.container}>
{ !more && <View style={styles.container2}>
<Text style={styles.textRed}>
الدوريات الخاصة تظهر للأصدقاء فقط
</Text>
<Text style={styles.textWhite}>
الدوريات النشطة 1
</Text>
<Pressable style={styles.button} onPress={()=>setMore(true)}>
<Text style={styles.textButton}>
اعرف المزيد
</Text>
</Pressable>
</View>}
{more && <View style={styles.container3}>
  <View>
<SvgXml xml={svgs[0].trophy}/>
  </View>
  <Text style={styles.descText}>
  الدوريات الخاصة هي دوريات مناسبة لتنظيم مسابقات بين الأصدقاء
  </Text>
  <View style={styles.notsContainer}>
<View style={styles.notContainer}>

<Text style={styles.textNote}>
تظهر الدوريات فقط لأصدقاء المنظم.
</Text>
<View style={styles.sqaureNot}>
</View>
</View>
<View style={styles.notContainer}>

<Text style={styles.textNote}>
يمكن بدء الدوري يدوياً.
</Text>
<View style={styles.sqaureNot}>
</View>
</View>
<View style={styles.notContainer}>

<Text style={styles.textNote}>
يتم بدأ الدوري تلقائياً بعد ساعة. ويتم إلغاءه عند عدم تعيين عدد كافي من المقاعد.
</Text>
<View style={styles.sqaureNot}>
</View>
</View>
<View style={styles.notContainer}>

<Text style={styles.textNote}>
يمكن للمنظم تحديد المقاعد أو ترك الحرية للمشتركين بختيار مقاعدهم.
</Text>
<View style={styles.sqaureNot}>
</View>
</View>
<View style={styles.notContainer}>

<Text style={styles.textNote}>
يمكن للمنظم أو المشتركين في الدوري دعوة الآخرين عبر رابط الدعوة.
</Text>
<View style={styles.sqaureNot}>
</View>
</View>
  </View>
</View>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        backgroundColor:Colors.BACKGROUND_4,
        paddingHorizontal:21,
        paddingVertical:12,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:16,
        marginVertical:8,
        height:'95%'
    },
    textRed:{
  color:Colors.DANGER_500,
  fontFamily:fonts.almaraiRegular,
  fontSize:16
    },
    textWhite:{
  color:'white',
  fontFamily:fonts.almaraiRegular,
  fontSize:24
    },
    textButton:{
  color:Colors.PRIMARY_500,
  fontFamily:fonts.almaraiBold,
  fontSize:14
    },
    container2:{
      flexDirection:'column',
 alignItems:'center',
 gap:40,
 width: '100%',
    },
    container3:{
      flexDirection:'column',
 alignItems:'center',
 gap:32,
 width: '100%',
    },
button:{
  width:'100%',
  alignItems:'center',
  justifyContent:'center',
  paddingVertical:10,
  backgroundColor:Colors.BACKGROUND_5,
  borderRadius:8
},
descText:{
  color:'white',
  fontFamily:fonts.almaraiRegular,
  fontSize:16,
  textAlign:'center'
},

notsContainer:{
  width:'100%',
flexDirection:'column',
// justifyContent:'flex-start'
alignItems:'flex-start',
gap:8,
},
notContainer:{
  width:'100%',
flexDirection:'row',
justifyContent:'flex-end',
gap:16,
alignItems:'center'
},
sqaureNot:{
  backgroundColor:Colors.PRIMARY_600,
  width:5,
  height:5,
  shadowColor: Colors.PRIMARY_600,
  shadowOpacity: 0.9,

  elevation: 5,
},
textNote:{
  fontFamily:fonts.almaraiRegular,
  fontSize:12,
  color:'white'
}


})

export default Leaderboard;
