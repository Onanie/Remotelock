import React, { useState } from "react";
import { View, Image, Text, Switch } from "react-native";
import styles from "../components/styles";
import Icon from "react-native-vector-icons/FontAwesome";

function DeviceState({ state }) {
  return (
    <View style={styles.stateContainer}>
      <Icon
        name={state == "locked" ? "lock" : "lock"}
        style={{
          fontSize: 35,
          color: state ? "green" : "red",
          margin: 5,
        }}
      />
      <Text
        style={{
          color: state ? "green" : "red",
          fontSize: 20,
        }}
      >
        {state ? "Locked" : "Unlocked"}
      </Text>
    </View>
  );
}

function DeviceInfo({ name, model_number, state }) {
  var status = state == "locked" ? true : false;
  const [checked, setChecked] = useState(status);
  const toggleSwitch = () => {
    setChecked(!checked);
  };
  return (
    <View style={{ flexDirection: "column", top: 20 }}>
      <Text style={styles.nameStyle}>{name}</Text>
      <Text style={{ color: "#848482" }}>{model_number}</Text>
      <Switch
        trackColor={{ false: "red", true: "green" }}
        onValueChange={toggleSwitch}
        value={checked}
        style={{ top: 25 }}
      />
      <DeviceState state={checked} />
    </View>
  );
}

function DeviceCard({ item: { attributes } }) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: "http://placekitten.com/g/30/30",
        }}
        style={styles.imageStyle}
      />
      <DeviceInfo {...attributes} />
    </View>
  );
}
export default DeviceCard;
