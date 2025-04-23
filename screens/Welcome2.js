import React, { useState } from 'react';
import { StatusBar, View, Text } from 'react-native';
import {
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  Welcome2Container,
  Welcome2Image,
  Avatar,
  AdviceInput,
  ProgramInput,
} from './../components/styles2';  // Ensure correct imports

const Welcome2 = ({ navigation }) => {
  const [advice, setAdvice] = useState('');
  const [programName, setProgramName] = useState('');  // New state for program name

  const handleAdviceSubmit = () => {
    if (advice.trim() && programName.trim()) {
      console.log("Advice entered:", advice);
      console.log("Program name entered:", programName);
      alert("Advice and Program submitted successfully!");
      setAdvice('');
      setProgramName('');  // Reset program name input after submission
    } else {
      alert("Please enter both advice and program name before submitting.");
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}> {/* Use regular View component to test */}
        <Welcome2Image resizeMode="cover" source={require('./../assets/b907368b9dd4478e81d6ed61558feccc.jpg')} />
        <Welcome2Container>
          {/* Text should be inside PageTitle and SubTitle */}
          <PageTitle>Welcome!</PageTitle>
          <SubTitle>Career Guidance for you</SubTitle>
          <SubTitle>@gmail.com</SubTitle>
          <StyledFormArea>
            <Avatar resizeMode="cover" source={require('./../assets/b907368b9dd4478e81d6ed61558feccc.jpg')} />
            <Line />
            
            {/* Program name input field */}
            <ProgramInput
              placeholder="Enter the program name..."
              value={programName}
              onChangeText={(text) => setProgramName(text)}  // Update the program name state
            />

            {/* Advice input field */}
            <AdviceInput
              placeholder="Enter your advice here..."
              value={advice}
              onChangeText={(text) => setAdvice(text)}  // Update the advice state as user types
              multiline={true}  // Allow multiline input
              numberOfLines={4} // Set the number of visible lines for the textbox
            />
            
            {/* Submit button */}
            <StyledButton onPress={handleAdviceSubmit}>
              <ButtonText>Submit Advice & Program</ButtonText>
            </StyledButton>
            
            <Line />
            
            {/* Logout button */}
            <StyledButton onPress={() => navigation.navigate("Home")}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </Welcome2Container>
      </View>
    </>
  );
};

export default Welcome2;
