import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "baseline",
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: 'column',
    margin: 15,
    paddingBottom: 20,
  },
  coverPhoto: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 300,
    width: "100%",
  },
  textContainer: {
    paddingHorizontal: 15,
  },
  subtitle: {
    color: "gray",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  text: {
    color: "gray",
    fontSize: 14,
    marginTop: 10,
  },
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 10,
    width: "90%",
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
