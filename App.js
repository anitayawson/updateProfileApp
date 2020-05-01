import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
        <Image source={require('./assets/profileimg.jpg')} style={styles.image}/>
        <MaterialIcons name='add-a-photo' size={30} style={styles.cameraIcon}/>
      <View style={styles.form}>
        <Text style={styles.defaultTitleStyle}>School</Text>
        <Text style={styles.titleInfo1}>Codetrain Ghana</Text>
        <Text style={styles.defaultTitleStyle}>Email Address</Text>
        <Text style={styles.titleInfo1}>ctstudent@gmail.com</Text>
        <Text style={styles.inputTitleStyle}>Name</Text>
        <TextInput style={styles.titleInfo2}></TextInput>
        <Text style={styles.inputTitleStyle}>Nickname</Text>
        <TextInput style={styles.titleInfo2}></TextInput>
        <Text style={styles.inputTitleStyle}>Emergency Contact</Text>
          <TextInput style={styles.titleInfo2}></TextInput>
          <Ionicons name='ios-contact' size={20} style={styles.contactIcon}/>
      </View>
      <TouchableOpacity
      style={styles.button}>
      <Text style={styles.buttonText}>UPDATE PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor:"#F5F5F5"
  },

  image : {
   width: 130,
   height: 130, 
   alignSelf: "center",
   marginTop: 50,
   borderRadius: 85,
  },

  cameraIcon : {
    color: "#9bc400",
    position: "absolute",
    left: 210,
    top: 140,
  },

  contactIcon : {
    color: "#9bc400",
    position: "relative",
    left: 235,
    bottom: 50
  },

  form : {
    marginTop: 30,
    marginHorizontal: 60
  },

  defaultTitleStyle : {
    color: "gray",
  },
  
  inputTitleStyle : {
    color: "#9bc400",
    fontWeight: "bold",
    paddingBottom: 10
  },

  titleInfo1 : {
   fontSize: 14,
   marginBottom: 25,
   marginTop: 5
  },

  titleInfo2 : {
    fontSize: 14,
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
   },

   button : {
    marginTop: 15,
    alignSelf: "center",
    backgroundColor: "#9bc400",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 75
   },

   buttonText : {
     color: "white",
   },


});
