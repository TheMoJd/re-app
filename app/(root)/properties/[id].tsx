import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const Property = () => {
    const { id } = useLocalSearchParams(); // id is the value of the :id parameter
    return (
        <View>
            <Text>Property {id}</Text>
        </View>
    );
}

export default Property;