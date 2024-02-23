import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Players() {
  return (
    <SafeAreaView>
      <View className="m-5">
        <Text className="text-3xl font-bold">Players</Text>
      </View>
    </SafeAreaView>
  );
}
