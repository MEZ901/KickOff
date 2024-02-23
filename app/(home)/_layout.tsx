import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeLayout() {
  return (
    <SafeAreaView>
      <Slot />
    </SafeAreaView>
  );
}
