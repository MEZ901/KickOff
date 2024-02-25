import MatchCard from "@/components/MatchCard";
import { useFixturesQuery } from "@/redux/service/match/matchApi";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const matches = [
  {
    id: 1,
    teamOneName: "Barcelona",
    teamOneLogo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
    teamTwoName: "Manchester United",
    teamTwoLogo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png",
    time: "18:00",
  },
  {
    id: 2,
    teamOneName: "Barcelona",
    teamOneLogo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
    teamTwoName: "Manchester United",
    teamTwoLogo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png",
    time: "18:00",
  },
];

export default function Home() {
  const [isEnabledLive, setIsEnabledLive] = useState(false);
  const toggleSwitch = () =>
    setIsEnabledLive((previousState) => !previousState);

  const handleMatchCardPress = () => {
    router.push("/matchDetails" as any);
  };
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
        <ScrollView
          style={{
            marginBottom: 60,
          }}
        >
          <View className="flex flex-col mt-5">
            <Text className="text-lg font-bold">Today</Text>
            <View className="mt-3">
              {matches.map((match, index) => (
                <TouchableOpacity key={match.id} onPress={handleMatchCardPress}>
                  <MatchCard
                    teamOneName={match.teamOneName}
                    teamOneLogo={match.teamOneLogo}
                    teamTwoName={match.teamTwoName}
                    teamTwoLogo={match.teamTwoLogo}
                    time={match.time}
                  />
                  {index !== matches.length - 1 && (
                    <View className="h-[.5px] bg-gray-500 my-2" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
