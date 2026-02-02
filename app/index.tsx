import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{ ...styles.container }}
    >
      <Text style={{ ...styles.content }}>Hello Geesara !</Text>
      <Link style={{...styles.link}} href={"/about"}>Visit about Seen</Link>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    gap: 10,
  },

  content: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  link:{
    fontSize:16,
    color:"blue"
  }
});
  
