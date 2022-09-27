import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 15,
    backgroundColor: "white",
    flexDirection: 'column',
    alignItems: "baseline",
    paddingBottom: 20,
    borderRadius: 15,
  },
  coverPhoto: {
    width: "100%",
    height: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textContainer: {
    paddingHorizontal: 15,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    fontWeight: "400",
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: "gray",
    marginTop: 10,
  },
  buttonContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 15,
  },
  emoji: {
    fontSize: 18,
    paddingLeft: 10,
  },
  emojiContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
