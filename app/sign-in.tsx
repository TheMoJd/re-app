import images from "@/constants/images";
import icons from "@/constants/icons";

import { ScrollView, Text, View, Image, Touchable, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const SignIn = () => {
    function handleLogin(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName="h-full">
                <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain" />

                <View className="px-10">
                    <Text className="text-base text-center uppercase font-rubik text-black-200">Bienvenue à MoState</Text>
                    <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">On vous approchera de votre {"\n"}
                        <Text className="text-primary-300">maison idéale</Text>
                    </Text>

                    <Text className="text-lg font-rubik text-black-200 text-center mt-12 ">Connectez-vous avec Google</Text>

                    <TouchableOpacity onPress={handleLogin} className="bg-white shadow-md shadow-zinc-300 w-full py-4 mt-5">
                        <View className="flex-row justify-center items-center">
                            <Image 
                            source={icons.google} 
                            className="w-6 h-6"
                            resizeMode="contain" />
                            <Text className="text-base font-rubik-medium text-black-300 ml-2">Continuer avec Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;