import MatchCard from "@/components/MatchCard";
import { useState } from "react";
import { Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [isEnabledLive, setIsEnabledLive] = useState(false);
  const toggleSwitch = () =>
    setIsEnabledLive((previousState) => !previousState);
  return (
    <SafeAreaView>
      <View className="m-5">
        <View className="flex flex-row justify-between">
          <Text className="text-3xl font-bold">Matches</Text>
          <View className="flex flex-row items-center">
            <Text className="font-medium">Live</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabledLive ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabledLive}
            />
          </View>
        </View>
        <View className="flex flex-col mt-5">
          <Text className="text-lg font-bold">Today</Text>
          <View className="mt-3">
            <MatchCard
              teamOneName="Barcelona"
              teamOneLogo="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
              teamTwoName="Manchester United"
              teamTwoLogo="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png"
              time="18:00"
            />
            <View className="h-[.5px] bg-gray-500 my-2" />
            <MatchCard
              teamOneName="Barcelona"
              teamOneLogo="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
              teamTwoName="Manchester United"
              teamTwoLogo="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png"
              time="18:00"
            />
            <View className="h-[.5px] bg-gray-500 my-2" />
            <MatchCard
              teamOneName="Barcelona"
              teamOneLogo="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
              teamTwoName="Manchester United"
              teamTwoLogo="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png"
              time="18:00"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
