import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import moment from "moment";
import styles from "../components/styles";

function UserStartEndTime({ starts_at, ends_at, device_time_zone }) {
  return (
    <Text style={{ color: "#848482", fontSize: 16 }}>
      {moment(starts_at).format("MMM YY h:mm ")} -{" "}
      {moment(ends_at).format("MMM YY h:mm")}
    </Text>
  );
}

function UserStatus({ status }) {
  return (
    <View
      style={[
        styles.statusContainer,
        {
          backgroundColor: status == "current" ? "#C5F6A7" : "#F4F6A7",
        },
      ]}
    >
      <Text>{status}</Text>
    </View>
  );
}

function UserInfo({
  name,
  email,
  status,
  starts_at,
  ends_at,
  device_time_zone,
}) {
  return (
    <View style={{ flexDirection: "column", top: 20 }}>
      <Text style={styles.nameStyle}>{name}</Text>
      <Text style={{ color: "#848482" }}>{email}</Text>
      <UserStartEndTime
        starts_at={starts_at}
        ends_at={ends_at}
        device_time_zone={device_time_zone}
      />
      <UserStatus status={status} />
    </View>
  );
}

function UserCard({ item: { attributes } }) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: "http://placekitten.com/g/30/30",
        }}
        style={styles.imageStyle}
      />
      <UserInfo {...attributes} />
    </View>
  );
}
export default UserCard;
