import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import DeviceCard from "../components/DeviceCard";
import { fetchDevices } from "../lib/api";
import Search from "../components/SearchBar";

function DeviceList() {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    fetchDevices("").then((res) => setDevices(res.data));
  }, []);

  const FilterUsers = (searchText: string) => {
    fetchDevices(`?name=${searchText}`).then((res) => setDevices(res.data));
  };
  return (
    <View>
      <Search filter={FilterUsers} />
      <FlatList
        style={{
          backgroundColor: "#EEEEEE",
          padding: "3%",
        }}
        data={devices}
        renderItem={DeviceCard}
        keyExtractor={(x) => x.id}
      />
    </View>
  );
}

export default DeviceList;
