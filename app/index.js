import React from 'react';
import { Tabs } from 'expo-router';

export default function MainNavigator() {
  return (
    <Tabs>
      <Tabs.Screen name="stores" />
      <Tabs.Screen name="list" />
      <Tabs.Screen name="items" />
    </Tabs>
  );
}
