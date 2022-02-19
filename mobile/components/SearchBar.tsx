import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

interface Props {
  filter: (option: string) => void;
}
export default function Search({ filter }: Props) {
  const [searchText, setSearchText] = useState("");
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="  Search here...."
        style={styles.searchInput}
        onChangeText={(text) => setSearchText(text)}
      />
      <TouchableOpacity onPress={() => filter(searchText)}>
        <Icon name="search" style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
}
