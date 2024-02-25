import PlayerCard from "@/components/PlayerCard";
import SearchPlayer from "@/components/SearchPlayer";
import { StatePlayer } from "@/redux/features/player/playerSlice";
import { usePlayersQuery } from "@/redux/service/players/playerApi";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

export default function Players() {
  const dispatch = useDispatch();
  const { players } = useSelector((state: any) => state.players);
  const { data, isLoading, isSuccess, refetch } = usePlayersQuery("");

  useEffect(() => {
    refetch();

    if (isSuccess) {
      dispatch(StatePlayer(data.data));
    }
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
          <SearchPlayer />
          <View className="flex flex-col">
            {players ? (
              players.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))
            ) : (
              <Text className="text-center mt-3">No players found</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
