import { useGetPlayersByIdQuery } from "@/redux/service/players/playerApi";
import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MatchDetails() {
  const { id } = useLocalSearchParams<{ id?: string }>();

  const { data, isLoading } = useGetPlayersByIdQuery(id);

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
      <View>
        <Image
          className="w-[128px] h-[128px] object-cover rounded-full mx-auto mt-5"
          source={{ uri: data.data.image_path }}
        />
      </View>
      <View className="p-[15]">
        <Text className="text-2xl text-center">{data.data.name}</Text>
      </View>

      <View className="mx-5 flex flex-row justify-center flex-wrap">
        <View className="bg-white p-3 rounded-lg flex flex-col justify-center items-center m-1">
          <Text
            style={{
              fontWeight: "900",
              fontSize: 20,
            }}
          >
            Position
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              gap: 40,
              alignItems: "center",
            }}
          >
            <Text>
              {data.data?.position?.name ? data.data?.position.name : "N/A"}
            </Text>
          </View>
        </View>

        <View className="bg-white p-3 rounded-lg flex flex-col justify-center items-center m-1">
          <Text
            style={{
              fontWeight: "900",
              fontSize: 20,
            }}
          >
            weight
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              gap: 40,
              alignItems: "center",
            }}
          >
            <Text>{data.data.weight}</Text>
          </View>
        </View>

        <View className="bg-white p-3 rounded-lg flex flex-col justify-center items-center m-1">
          <Text
            style={{
              fontWeight: "900",
              fontSize: 20,
            }}
          >
            height
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              gap: 40,
              alignItems: "center",
            }}
          >
            <Text>{data.data.height}</Text>
          </View>
        </View>

        <View className="bg-white p-3 rounded-lg flex flex-col justify-center items-center m-1">
          <Text
            style={{
              fontWeight: "900",
              fontSize: 20,
            }}
          >
            Date of Birth
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              gap: 40,
              alignItems: "center",
            }}
          >
            <Text>{data.data.date_of_birth}</Text>
          </View>
        </View>

        <View className="bg-white p-3 rounded-lg flex flex-col justify-center items-center m-1">
          <Text
            style={{
              fontWeight: "900",
              fontSize: 20,
            }}
          >
            Nationality
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              gap: 40,
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: data.data?.nationality?.image_path,
              }}
              style={{
                marginBottom: 10,
                width: 70,
                height: 40,
                top: 7,
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
