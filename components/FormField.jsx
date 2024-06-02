import {Text, TextInput, View} from "react-native";
import {useState} from "react";

export const FormField = ({ title, value, handleTextChange, keyboardType, otherStyles, placeholder, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-pmedium">
                { title }
            </Text>

            <View className="border border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center">
                <TextInput
                    className="flex-1 text-white font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7B7B8B"
                    onChangeText={handleTextChange}
                    secureTextEntry={ title = "Password" && !showPassword }
                />
            </View>
        </View>
    )
}