import MatchCard from "@/components/MatchCard";
import { useFixturesQuery } from "@/redux/service/match/matchApi";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [isEnabledLive, setIsEnabledLive] = useState(false);
  const [matches, setMatches] = useState([] as any[]);

  const { isLoading, data, isSuccess, isFetching, refetch } =
    useFixturesQuery("");

  const toggleSwitch = () =>
    setIsEnabledLive((previousState) => !previousState);

  const handleMatchCardPress = (id: number) => {
    console.log(id);
    router.push("/matchDetails" as any);
  };

  useEffect(() => {
    if (isSuccess) {
      setMatches(data.data);
    }
  }, [isFetching]);

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView>
        <View className="flex justify-center items-center h-full">
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

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
                <TouchableOpacity
                  key={match.id}
                  onPress={() => handleMatchCardPress(match.id)}
                >
                  <MatchCard
                    teamOneName={match.participants[0].name}
                    teamOneLogo={match.participants[0].image_path}
                    teamTwoName={match.participants[1].name}
                    teamTwoLogo={match.participants[1].image_path}
                    time={match.starting_at}
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
