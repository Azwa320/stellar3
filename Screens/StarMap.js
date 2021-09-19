import * as React from 'react';
import { Text, View, StyleSheet, TextInput,ImageBackground} from 'react-native';
import axios from 'axios';
import {WebView} from 'react-native-webView'

export default class StarMapScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = { location: {} };
  }
  componentDidMount() {
    this.getStarMap();
  }
  getStarMap = () => {
    axios
      .get('https://api.wheretheiss.at/v1/satellites/25544')
      .then((response) => {
        this.setState({
          location: response.data,
        });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };
  render() {
    if (Object.keys(this.state.location).length === 0) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/bg_image.png')}/>
          
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>ISS LOCATION</Text>
          </View>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              region={{
                latitude: this.state.location.latitude,
                longitude: this.state.location.longitude,
                latitudeDelta: 100,
                longitudeDelta: 100,
             
              }}/>
                 </View>
                 </View>
render(){
  return (
   <View style={{alignItems:"center",flex:1,justifyContent:"center"}}>
     <Text>STAR MAP</Text>
     <WebView
     scalesPageToFit={true}
     source={{uri: path}}
     style={{marginTop: 20, marginBottom:20}}
     />
     <TextInput
     style={{height:40,borderColor:'grey',borderWidth:1}}
     placeholder="Enter Your Latitude"
     placeholderTextColor= '#ffff#000000'
     onChangeText={(text)=>{
       this.setState({
         latitude:text
       })
     }}
     />
     <TextInput
     style={{height:40,borderColor:'grey',borderWidth:1}}
     placeholder="Enter Your Longitude"
     placeholderTextColor= '#ffff#000000'
     onChangeText={(text)=>{
       this.setState({
         longitude:text
       })
     }}
     />
    </View>
    
  );
  const{longitude,latitude}= this.state;
  const path='https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
}

  }}
