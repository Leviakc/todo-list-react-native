import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export const Main = () => {
  return (
    <SafeAreaView className="flex flex-1 border-red-700 border-2 border-solid justify-center items-center">
      <Text className="text-4xl">Todo List App</Text>
    </SafeAreaView>
  );
};
