import { StyleSheet,TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SIZES, COLORS } from '../constants'
import Feather from 'react-native-vector-icons/Feather'


const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons style={styles.searchIcon} name="camera-outline" size={24} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.textInput} placeholder="what are you looking for"></TextInput>
        </View>
        <TouchableOpacity style={styles.cameraIcon}>
        <Feather color={COLORS.offwhite} size={SIZES.xLarge} style={{color:COLORS.lightWhite}} name="search" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
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
})