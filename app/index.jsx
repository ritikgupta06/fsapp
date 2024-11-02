import { Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text>RootLayout</Text>
      <Link href="/profile" style={{ color: 'blue' }}>Go to profile</Link>
    </View>
  );
};

export default RootLayout;
