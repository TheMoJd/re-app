import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <View className="px-5">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="ml-3">
              <Text className="text-xs font-rubik-medium">Good morning</Text>
              <Text className="text-gray-500">Moetez</Text>
            </View> 
          </View>
          <Image source={icons.bell} className="size-6" />
        </View> 
        <Search />  
      </View>
    </SafeAreaView>
  );
}
