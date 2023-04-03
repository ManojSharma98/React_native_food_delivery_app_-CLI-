import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {Color, Fonts, General} from '../constants';
import {WelcomeCard, Separator} from '../components';
import Display, {scale} from '../utils/Display';

const pageStyle = (isActive: any) =>
  isActive
    ? styles.page
    : {...styles.page, backgroundColor: Color.DEFAULT_GREY};

const Pagination = ({index}) => {
  return (
    <View style={styles.pageContainer}>
      {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
        i === index ? (
          <View style={pageStyle(true)} key={i} />
        ) : (
          <View style={pageStyle(false)} key={i} />
        ),
      )}
    </View>
  );
};

const WelcomeScreen = ({navigation}) => {
  const [welcomeListIndex, setWelcomeListIndex] = useState(0);
  const welcomeList = useRef();
  const onViewRef = useRef(({changed}) => {
    setWelcomeListIndex(changed[0].index);
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const pageScroll = () => {
    welcomeList.current?.scrollToIndex({
      index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Color.DEFAULT_WHITE}
        translucent
      />
      <View style={styles.welcomeListContainer}>
        <FlatList
          ref={welcomeList}
          data={General.WELCOME_CONTENTS}
          keyExtractor={item => item.title}
          horizontal
          pagingEnabled
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => WelcomeCard(item)}
        />
      </View>
      <Pagination index={welcomeListIndex} />
      {welcomeListIndex===2? (<TouchableOpacity activeOpacity={.8}
      onPress={()=>navigation.navigate('SignIn')}
      style={styles.gettingStartedButton}
      >
        <Text style= {styles.gettingStartedButtonText}>Get started</Text>
      </TouchableOpacity>):(
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => welcomeList.current?.scrollToEnd()}>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => pageScroll()}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.DEFAULT_WHITE,
  },
  welcomeListContainer: {
    height: Display.setHeight(60),
  },
  pageContainer: {
    flexDirection: 'row',
  },
  page: {
    height: 8,
    width: 8,
    backgroundColor: Color.DEFAULT_GREEN,
    borderRadius: scale(32),
    marginHorizontal: 5,
  },
  buttonContainer: {
    marginBottom: scale(70),
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Display.setWidth(90),
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    fontWeight:'bold',
  },
  button: {
    backgroundColor: Color.LIGHT_GREEN,
    paddingVertical: scale(20),
    paddingHorizontal: scale(11),
    borderRadius: scale(32),
  },
  gettingStartedButton:{
    marginBottom: scale(70),
    position: 'absolute',
    bottom: 0,
    backgroundColor:Color.DEFAULT_GREEN,
    paddingVertical:5,
    paddingHorizontal:40,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    elevation:2,
  },
  gettingStartedButtonText:{
    fontSize:20,
    fontWeight:'bold',
    color:Color.DEFAULT_WHITE,
    lineHeight:20*1.8
  }
});
export default WelcomeScreen;
