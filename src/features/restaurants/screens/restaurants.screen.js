import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.components";

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchBarWrapper = styled.View`
  padding: 16px;
`;
const ListWrapper = styled.View`
  flex: 1;
  background-color: blue;
  padding: 16px;
`;

export default function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <StyledSafeAreaView>
      <SearchBarWrapper>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchBarWrapper>
      <ListWrapper>
        <RestaurantInfoCard />
      </ListWrapper>
    </StyledSafeAreaView>
  );
}
