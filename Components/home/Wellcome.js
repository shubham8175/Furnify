import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native'

const Wellcome = () => {
const navigation=useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.wellcomeText1}>Find The Most</Text>
        <Text style={styles.wellcomeText2}>Luxurious Furniture</Text>
      </View>
      {/* for serach */}
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather style={styles.searchIcon} name="search" size={24} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.textInput} onPressIn={()=>navigation.navigate("Search")}  placeholder="what are you looking for"></TextInput>
        </View>
        <TouchableOpacity style={styles.cameraIcon}>
        <Ionicons color={COLORS.offwhite} size={SIZES.xLarge} style={{color:COLORS.lightWhite}} name="camera-outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Wellcome;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  wellcomeText1: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.black,
    fontSize: SIZES.xxLarge - 8,
    marginTop: SIZES.xSmall,
  },
  wellcomeText2: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.primary,
    fontSize: SIZES.xxLarge - 8,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
    marginHorizontal:SIZES.small
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
    marginTop:10

  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight:SIZES.small,
    borderRadius:SIZES.small
  },
  textInput:{
    fontFamily:'Poppins-Regular',
    width:'100%',
    height:'100%',
    paddingHorizontal:SIZES.small,
  },
  cameraIcon:{
      backgroundColor:COLORS.primary,
      borderRadius:SIZES.medium,
      width:50,
      height:'100%',
      alignItems:'center',
      justifyContent:'center',
  }
});
