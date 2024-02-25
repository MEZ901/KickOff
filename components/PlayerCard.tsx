import { Image, Text, View } from "react-native";

export default function PlayerCard({ player }) {
  const age =
    new Date().getFullYear() - new Date(player.date_of_birth).getFullYear();

  return (
    <View className="w-full flex flex-row p-2">
      <View>
        <Image
          source={{
            uri: player.image_path,
          }}
          className="w-16 h-16 rounded-full mt-3"
        />
        <Image
          source={{
            uri: player.nationality.image_path,
          }}
          style={{
            width: 25,
            height: 15,
            bottom: 10,
            left: 40,
          }}
        />
      </View>
      <View className="flex flex-col ml-5 mt-3">
        <Text className="font-bold">{player.display_name}</Text>
        <Text className="font-light">
          {player?.position?.name ? player.position.name : "N/A"}
        </Text>
        <Text className="font-light">{age} Years</Text>
      </View>
    </View>
  );
}
