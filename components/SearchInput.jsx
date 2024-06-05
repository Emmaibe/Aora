import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { useState } from "react";

import { icons } from "../constants";

export const SearchInput = ({
  title,
  value,
  handleTextChange,
  keyboardType,
  otherStyles,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-row border border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center space-x-4">
        <TextInput
            className="text-base mt-0.5 text-white flex-1 font-pregular"
            value={value}
            placeholder="Search for a video topic"
            placeholderTextColor="#7B7B8B"
            onChangeText={handleTextChange}
            secureTextEntry={title === "Password" && !showPassword}
        />

        <TouchableOpacity>
            <Image
                source={icons.search}
                className="w-5 h-5"
                resizeMode="contain"
            />
        </TouchableOpacity>
    </View>
  );
};
