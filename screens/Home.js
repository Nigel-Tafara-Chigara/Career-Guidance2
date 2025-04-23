import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Account Type</Text>

      {/* Button for User */}
      <Button
        title="User"
        onPress={() => navigation.navigate('Signup', { userType: 'User' })}
      />
       
      {/* Button for Admin */}
      <Button
        title="Admin"
        onPress={() => navigation.navigate('Signup', { userType: 'Admin' })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Home;
