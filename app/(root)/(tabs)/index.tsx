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
      <Text className="font-bold text-lg my-10 font-rubik text-3xl">Welcome</Text>
      <Link href="/sign-in" >Sign-in</Link>  
      <Link href="/properties/1" >Property 1</Link>
      <Link href="/profile" >Profile</Link>
      <Link href="/explore">Explore</Link>
    </View>
  );
}
