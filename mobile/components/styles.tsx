import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,

    backgroundColor: "white",
    marginTop: "5%",
    flexDirection: "row",
    height: 150,
  },
  imageStyle: {
    margin: 15,
    width: 110,
    height: 110,
    borderRadius: 140 / 2,
  },
  statusContainer: {
    left: Platform.OS == "android" ? 80 : 60,
    top: 15,
    borderRadius: 50,
    height: 30,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  stateContainer: {
    left: Platform.OS == "android" ? 110 : 90,
    top: -15,
    flexDirection: "row",
    height: 30,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  stateIcon: { fontSize: 16 },
  nameStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Headercontainer: {
    flex: 1,
    marginTop: 10,
  },
  headerCenter: {
    flex: 1,
    right: 0,
    justifyContent: "center",
    alignContent: "center",
  },

  searchBar: {
    marginTop: 15,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 0,
    flexDirection: "row",
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    fontSize: 25,
    alignSelf: "center",
    color: "green",
    marginHorizontal: 15,
    top: 10,
  },

  headerContainer: {
    flex: 0.9,
    justifyContent: "center",
  },

  headerText: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default styles;
