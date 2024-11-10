import { StyleSheet } from "react-native";
import Colors from "../../Colors";
const styles = StyleSheet.create({
  viewContainer: {
    flexGrow: 1,

    position: "relative",
    overflow: "visible",
  },

  mainContainer: {
    position: "relative",
    flex: 1,

    paddingHorizontal: 14,
    overflow: "visible",
    
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#131514',
},

  logoContainer: {
    top: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    paddingVertical: 70,
  },

  headerText: {
    fontFamily: "Poppins_400Regular",
    color: "white",
    fontSize: 32,
    textTransform: "capitalize",
    lineHeight: 50,
  },
  zoneRow:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },

  lightGrayText: {
    fontFamily: "Poppins_400Regular",
    color: "#858585",
    fontSize: 12,
  },

  lightText: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    fontSize: 12,
  },

  interestTitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    marginTop: 8,
    color: "#858585",
  },

  passToHomeBtn: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#fff",
  },

  innerContainer: {
    margin: 4,
    justifyContent: "center",
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  pagination: {
    bottom: -10, // Adjust this value to change the vertical position of the pagination dots
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: '#000000d9',
  },
  searchBox:{
    width:'100%',
    flexDirection:'row-reverse',
    gap:4
},
searchInput:{
    flex:1,
    backgroundColor:Colors.BACKGROUND_4,
    borderRadius:4,
    paddingHorizontal:16,
    paddingVertical:8
},

bigContainer:{
    width:'100%',
    borderRadius:16,
    backgroundColor:Colors.BACKGROUND_5,
    flex:0.98,paddingHorizontal:16,
    paddingVertical:8
},
insideBigContainer:{
    width:'100%',
flex:1,
alignItems:'center',
justifyContent:'center'
},
conected2:{
    width:'100%',
    flexDirection:'row-reverse',
    gap:4,
    alignItems:'center',

    
},
line:{
    flex:1,
    height:2,
    backgroundColor:'white',
    borderRadius:16,
},
insideBigContainer2: {
  width: "100%",
  flex: 1,
flexDirection:'column',
paddingTop:25,
gap:16
},
});

export default styles;
