import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const createHomeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      marginTop: 12,
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
    },
  });

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.background} 
    style={homeStyles.container} > 
    <SafeAreaView style={homeStyles.safeArea}> 
      <Text style={{ color: colors.text }}>hi</Text> 
      <TouchableOpacity onPress={toggleDarkMode}> 
        <Text style={homeStyles.buttonText}>toggle the mode</Text>
    </TouchableOpacity>
    </SafeAreaView>
    </LinearGradient>
  );
}
