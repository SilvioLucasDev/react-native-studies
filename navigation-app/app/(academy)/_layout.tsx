import React, { useEffect } from 'react';
import { Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const navigation = useNavigation();

  function generateRandomName() {
    const randomNum = Math.floor(Math.random() * 90000) + 100000;
    const randomName = randomNum.toString(36);
    return 'Academia ' + randomName;
  }

  useEffect(() => {
    const nameAcademy = generateRandomName();
    navigation.setOptions({
      title: nameAcademy,
    });
  }, []);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="evolution"
        options={{
          headerShown: false,
          title: 'Evolução',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trending-up-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="debits"
        options={{
          headerShown: false,
          title: 'Débitos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cash" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
