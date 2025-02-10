import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="my-10 font-rubik text-3xl">Welcome to MoState</Text>
      <Link href="/sign-in" className="text-primary-300">
        Sign in
      </Link>
    </View>
  );
}
