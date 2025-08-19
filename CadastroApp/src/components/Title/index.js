import React from "react"
import {View, Text, StyleSheet} from "react-native"

export default function Title(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>PONTUA +</Text>
        </View>

    );
}

const styles = StyleSheet.create({
  container: {
    padding:30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    color: '#238068ff',
    textShadowColor: 'rgba(0, 0, 0, 0.4)', // sombra no texto
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  }


});
