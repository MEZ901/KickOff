import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MatchDetails() {
  return (
    <SafeAreaView>
      <View className="m-5">
        <Text className="text-3xl font-bold">Player Details</Text>
      </View>
    </SafeAreaView>
  );
}
