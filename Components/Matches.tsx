import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Colors from '../Colors';
import { icons } from '../Views/icons';
import fonts from '../fonts';
import { Eye } from 'iconsax-react-native';

interface DynamicComponentProps {
  scenario: 1 | 2 | 3;
  match: string;
}

const Matches: React.FC<DynamicComponentProps> = ({ scenario, match }) => {
  const endText = scenario === 1 ? "انتهت" : scenario === 2 ? "شاهد" : "ستبدأ قريباً";
  const endTextColor = scenario === 1 ? "white" : scenario === 2 ? Colors.PRIMARY_600 : "white";
  const scoreLeft = scenario === 3 ? 0 : 3;
  const scoreRight = scenario === 3 ? 0 : 14;
  const backgroundColor = scenario === 3 ? Colors.BACKGROUND_4 : scenario === 2 ? "white" : Colors.SUCCESS_700;
  const isLeftWinner = scoreLeft > scoreRight;

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <IconLabel label="Saad14" />
        <View style={styles.scoreContainer}>
          {/* Display the match prop dynamically */}
          <Text style={styles.roundText}>{match}</Text>
          <View style={styles.scoreRow}>
            <ScoreBox score={scoreLeft} />
            <ScoreBox score={scoreRight} />
          </View>
        </View>
        <IconLabel label="Saad14" />
      </View>

      <View style={styles.middleRow}>
        <Circle backgroundColor={scenario === 2 ? Colors.BACKGROUND_3 : (scenario !== 3 && isLeftWinner ? Colors.SUCCESS_600 : Colors.BACKGROUND_3)} />
        <Text style={styles.middleRowText}>القهوات</Text>
        <Circle backgroundColor={scenario === 2 ? Colors.BACKGROUND_3 : (scenario !== 3 && !isLeftWinner ? Colors.SUCCESS_600 : Colors.BACKGROUND_3)} />
      </View>

      {scenario === 2 && (
        <View style={styles.viewCountRow}>
          <Text style={styles.viewCountText}>5</Text>
          <Eye size="4.79" color="#A6ABB3" />
        </View>
      )}

      <View style={styles.bottomRow}>
        <IconLabel label="Saad14" />
        <View style={[styles.statusContainer, { backgroundColor }]}>
          <Text style={[styles.statusText, { color: endTextColor }]}>{endText}</Text>
          {scenario === 2 && <Eye size="6.38" color={Colors.PRIMARY_600} />}
        </View>
        <IconLabel label="Saad14" />
      </View>
    </View>
  );
};



const IconLabel: React.FC<{ label: string }> = ({ label }) => (
  <View style={styles.iconLabelContainer}>
    <SvgXml xml={icons[0].eagle} />
    <View style={styles.iconLabelTextContainer}>
      <Text style={styles.iconLabelText}>{label}</Text>
    </View>
  </View>
);

const ScoreBox: React.FC<{ score: number }> = ({ score }) => (
  <View style={styles.scoreBox}>
    <Text style={styles.scoreText}>{score}</Text>
  </View>
);

const Circle: React.FC<{ backgroundColor: string }> = ({ backgroundColor }) => (
  <View style={[styles.circle, { backgroundColor }]} />
);


const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    justifyContent: "center",
  },
  card: {
    padding: 5,
    backgroundColor: Colors.BACKGROUND_5,
    borderRadius: 8,
    width: 90,
    height: 75,
    justifyContent: "space-between",
    alignItems: "center",
  },
  topRow: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-between',
  },
  scoreContainer: {
    flexDirection: "column",
    alignItems: 'center',
  },
  roundText: {
    fontFamily: fonts.almaraiRegular,
    fontSize: 5.58,
    color: "white",
    marginBottom:3.19
  },
  scoreRow: {
    flexDirection: "row",
    gap: 1,
  },
  middleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3.19,
    marginTop: 3.19,
  },
  middleRowText: {
    color: 'white',
    fontSize: 4,
    fontFamily: fonts.almaraiRegular,
  },
  viewCountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3.19,
    marginTop: 3.19,
  },
  viewCountText: {
    color: '#A6ABB3',
    fontSize: 4,
    fontFamily: fonts.almaraiRegular,
  },
  bottomRow: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusContainer: {
    width: 40,
    height: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  statusText: {
    fontFamily: fonts.almaraiRegular,
    fontSize: 4.79,
    marginRight: 4,
  },
  iconLabelContainer: {
    position: "relative",
  },
  iconLabelTextContainer: {
    paddingHorizontal: 4.41,
    paddingBottom: 2,
    backgroundColor: "white",
    borderRadius: 4.2,
    position: "relative",
    top: -4,
    elevation: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 2, height: 2 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 4,
  },
  
  iconLabelText: {
    fontFamily: fonts.almaraiBold,
    fontSize: 2,
  },
  scoreBox: {
    width: 18,
    height: 13,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2.39,
    backgroundColor: Colors.BACKGROUND_4,
  },
  scoreText: {
    fontFamily: fonts.almaraiBold,
    fontSize: 8,
    color: "white",
  },
  circle: {
    width: 3.19,
    height: 3.19,
    borderRadius: 9999,
    elevation: 10, 
    shadowColor: Colors.SUCCESS_600, 
    shadowOffset: { width: 2, height: 2 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 4,

  },
});

export default Matches;
