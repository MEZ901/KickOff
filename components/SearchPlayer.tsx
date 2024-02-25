import { StatePlayer } from "@/redux/features/player/playerSlice";
import { useSearchQuery } from "@/redux/service/players/playerApi";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useDispatch } from "react-redux";

export default function SearchPlayer() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isSuccess } = useSearchQuery(searchQuery);

  useEffect(() => {
    if (isSuccess) {
      dispatch(StatePlayer(data.data));
    }
  }, [searchQuery, isSuccess]);

  return (
    <View className="mt-3">
      <Searchbar
        className="w-full"
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
}
