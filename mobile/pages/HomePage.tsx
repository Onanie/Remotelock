import * as React from "react";
import { View, useWindowDimensions, Platform } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import DeviceList from "./DeviceList";
import UserList from "./UserList";

const UsersRoute = () => <UserList />;

const DevicesRoute = () => <DeviceList />;

const renderScene = SceneMap({
  first: DevicesRoute,
  second: UsersRoute,
});

export default function HomePage() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Devices" },
    { key: "second", title: "Users" },
  ]);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <TabView
        style={{ top: Platform.OS == "android" ? 0 : 60 }}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}
