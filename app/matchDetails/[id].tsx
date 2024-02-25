import { useGetFixtureQuery } from "@/redux/service/match/matchApi";
import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MatchDetails() {
  const { id } = useLocalSearchParams<{ id?: string }>();

  const { data, isLoading } = useGetFixtureQuery(id);

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
          className="w-full h-[200px] object-cover"
          source={{ uri: data.data.venue.image_path }}
        />
      </View>
      <View className="p-[15]">
        <Text className="text-2xl text-center">{data.data.name}</Text>
      </View>

      <View>
        <View
          style={{ paddingHorizontal: 20, flexDirection: "column", gap: 15 }}
        >
          <View>
            <Text
              style={{
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              League
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
                style={{ width: 50, height: 50 }}
                source={{
                  uri: data.data.league.image_path,
                }}
              />
              <View>
                <Text style={styles.league}>{data.data.league.name}</Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Stadium
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                gap: 40,
                alignItems: "center",
              }}
            >
              <View>
                <Text style={styles.league}>{data.data.venue.address}</Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Score
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                gap: 40,
                alignItems: "center",
              }}
            >
              <View>
                <Text style={styles.league}>{data.data.result_info}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 30,
          flexDirection: "row",
          gap: 40,
          marginTop: 20,
          justifyContent: "center",
        }}
      >
        <View>
          <Image
            style={{ width: 120, height: 120 }}
            source={{
              uri: data.data.participants[0].image_path,
            }}
          />
          <Text
            style={{
              textAlign: "center",
              marginTop: 5,
              fontSize: 20,
            }}
          >
            {data.data.participants[0].name}
          </Text>
        </View>
        <View>
          <Image
            style={{ width: 120, height: 120 }}
            source={{
              uri: data.data.participants[1].image_path,
            }}
          />
          <Text
            style={{
              textAlign: "center",
              marginTop: 5,
              fontSize: 20,
            }}
          >
            {data.data.participants[1].name}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    padding: 15,
  },
  titleText: {
    fontSize: 25,
    textAlign: "center",
  },
  league: {
    fontSize: 16,
    fontWeight: "500",
  },
});
