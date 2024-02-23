import { Image, Text, View } from "react-native";

type MatchCardProps = {
  teamOneName: string;
  teamOneLogo: string;
  teamTwoName: string;
  teamTwoLogo: string;
  time: string;
};

export default function MatchCard({
  teamOneName,
  teamOneLogo,
  teamTwoName,
  teamTwoLogo,
  time,
}: MatchCardProps) {
  return (
    <View className="flex flex-row items-center justify-between p-5 my-2 bg-opacity-20 backdrop-blur-md rounded-lg">
      <View className="flex flex-col items-center">
        <Image
          className="w-16 h-16"
          source={{
            uri: teamOneLogo,
          }}
        />
        <Text className="text-sm font-medium">{teamOneName}</Text>
      </View>

      <View className="flex flex-col items-center">
        <Text className="text-sm font-extrabold">VS</Text>
        <Text className="text-sm font-bold text-red-500">{time}</Text>
      </View>

      <View className="flex flex-col items-center">
        <Image
          className="w-16 h-16"
          source={{
            uri: teamTwoLogo,
          }}
        />
        <Text className="text-sm font-medium">{teamTwoName}</Text>
      </View>
    </View>
  );
}
