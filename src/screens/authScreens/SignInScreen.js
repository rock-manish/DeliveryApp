import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors, parameters} from '../../global/styles';
import Header from '../../components/Header';
import {TextInput} from '@react-native-material/core';
import * as Animatable from 'react-native-animatable';

export default function SignInScreen({title}) {
  return (
    <View style={styles.container}>
      <Header title="My Account" type="arrow-left" />
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={title}>SignIn</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>Register with your Account</Text>
      </View>

      <View style={{marginTop: 20}}>
        <View>
          <TextInput placeholder="Email" style={styles.TextInput1} />
        </View>
        <View>
          <Animatable.View >
            
          </Animatable.View>

          <TextInput placeholder="Email" style={styles.TextInput1} />

          <Animatable.View>
          <Icon
            name='lock'
            iconStyle={{color:colors.grey3}}
            />
          </Animatable.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
});
