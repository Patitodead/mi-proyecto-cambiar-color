import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Color de fondo inicial

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backgroundColor }]}
      onPress={generateRandomColor}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>¡Toca para cambiar de color!</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fondo semi-transparente para el texto
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;