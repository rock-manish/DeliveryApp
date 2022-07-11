import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import { colors, parameters } from '../global/styles'
import { Icon } from 'react-native-elements'


const Header = ({title,type}) => {
  return (
    <View style={styles.header}>
        <View style={{marginLeft:20}}>
            <Icon
            type='meterial=community'
            name={type}
            color={colors.headerText}
            size={28}
            onPress= {()=>{}}
            />
        </View>
        <View>
          <Text style={styles.headerText}>{title}</Text>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

    header:{
        flexDirection:"row",
        backgroundColor:colors.buttons,
        height:parameters.borderHeight
    },
    headerText:{
      color:colors.headerText,
      fontSize:20,
      fontWeight:"bold",
      marginLeft:30,
      textAlign:"center"
    }


})