import PlayerCard from "@/components/PlayerCard";
import { usePlayersQuery } from "@/redux/service/players/playerApi";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Players() {
  const [players, setPlayers] = useState([] as any[]);

  const { isLoading, data, isSuccess, isFetching, refetch } =
    usePlayersQuery("");

  useEffect(() => {
    if (isSuccess) {
      setPlayers(data.data);
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
        <Text className="text-3xl font-bold">Players</Text>
        <ScrollView
          style={{
            marginBottom: 60,
          }}
        >
          <View className="flex flex-col">
            {players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
