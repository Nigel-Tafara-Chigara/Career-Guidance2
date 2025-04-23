import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';



// Import styled components
import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
  SearchInput,
} from './../components/styles'; // Add the new styled component for the search input

const Welcome = ({ navigation }) => {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search functionality
  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to a search results page or filter programs based on the query
      console.log("Searching for:", searchQuery);
      // You can navigate to another screen here like this:
      // navigation.navigate("SearchResults", { query: searchQuery });
    } else {
      alert("Please enter a program to search for.");
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/b907368b9dd4478e81d6ed61558feccc.jpg')} />

        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome!</PageTitle>
          <SubTitle welcome={true}>Career Guidance for you</SubTitle>
          
          <StyledFormArea>
            <Avatar resizeMode="cover" source={require('./../assets/b907368b9dd4478e81d6ed61558feccc.jpg')} />
            <Line />
            
            {/* New search input field */}
            <SearchInput
              placeholder="Search for a program..."
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)} // Update the search query as user types
            />
            <StyledButton onPress={handleSearch}>
              <ButtonText>Search</ButtonText>
            </StyledButton>

            <Line />
            <StyledButton onPress={() => navigation.navigate("Home")}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
