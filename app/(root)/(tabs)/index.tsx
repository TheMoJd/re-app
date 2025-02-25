import { Card, FeaturedCard } from "@/components/Cards";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Text, View, Image, Touchable, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <ScrollView>

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

        <View className="flex-row items-center justify-between my-5">
          <Text className="text-lg font-rubik-bold">Feautured</Text>
          <TouchableOpacity>
            <Text className="text-primary-300">See all</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row gap-5 mt-5">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </View>

        <View className="flex-row items-center justify-between my-5">
          <Text className="text-lg font-rubik-bold">Nos recommendations</Text>
          <TouchableOpacity>
            <Text className="text-primary-300">See all</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row gap-5 mt-5">
          <Card />
          <Card />
          <Card />
        </View>
      </View>

      
    </SafeAreaView>
    </ScrollView>
  );
}
