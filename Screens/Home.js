import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, SIZES} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Wellcome} from '../Components';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.mainWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={25} color={'black'} />
          <Text style={styles.location}>Kamta Lucknow</Text>
          {/* Cart count */}
          <View style={{alignItems: 'flex-end'}}>
            <View style={styles.cartCount}>
              <Text style={styles.countText}>9</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} color={'black'}  />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Wellcome />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount: {
    position: 'absolute',
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    zIndex: 999,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontWeight: '600',
    color: COLORS.lightWhite,
    fontFamily: 'Poppins-Regular',
    bottom: 2,
  },
});
