import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Video, AVPlaybackStatus } from 'expo-av';




function Home({navigation})
{
  return(
  <View style={styles.container}>
  <Text style={styles.baseText}>Login</Text>
  <Button
  
  //font-color = "black"
  title = "login"
  onPress={() => navigation.navigate('MYVideo')}
  />

  <StatusBar style="auto" />
  </View>
  );

}

function MYVideo({navigation})
{
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return(
 
    <View style={styles.container}>
    <Video
      ref={video}
      
      source={{
        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay={true}
      isLooping
      style={{
        width: '100%',
        height: '100%',}}
    />
    <View style={styles.buttons}>
      <Button
        title={status.isPlaying ? 'Pause' : 'Play'}
        onPress={() =>
          status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        }
      />
    </View>
  </View>

  );

}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="BlikBlok" component = {Home}/>
        <Stack.Screen name= "MYVideo" component = {MYVideo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: 
  {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },

});









/*
const textstyle = StyleSheet.create(
  {
    baseText: {
      flex: 1,
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',

    }
  }
);

*/