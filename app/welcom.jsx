import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import ScreenWrapper from '../assets/components/ScreenWrapper';
import { StatusBar } from 'react-native-web';


const Welcome = () => {
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark"/>
      <view style ={style.coontainer}>
          {/*welcome image*/}
          
          <image style={style.welcomeImage} resizeMode='container' source = {require('../assets/images/welcome.png')}
      
         {/*title*/}
         <View style={{gap: 20}}>
            <Text style={style.title}>LinkUp!</Text>
            <Text style={style.punchline}>Bridge The gap Be Social </Text>
         </View>

         {/*footer*/}
         <View style= {style.footer}

      </view>
    </ScreenWrapper>
  );
};

export default Welcome;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: wp(4)
  },
  welcomeImage: {
    height: hp(30),
    width: wp(70)
  },
  title: {
    color: theme.colors.text,
                        fontSize: hp(4),
                        textAlign: 'center',
                        fontWeight: theme.fonts.extraBold
       },
       punchline: {
                        textAlign: 'center',
                        paddingHorizontal: wp(10),
                        fontSize: hp(1.7),
                       color: theme.colors.text
   }
  
})