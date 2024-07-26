Detailed guide on React Navigation from basic to advanced level:

## React Navigation: From Basic to Advanced

### 1. Introduction to React Navigation

React Navigation is a popular library used for routing and navigation in React Native applications. It provides a way to navigate between different screens in your app and manage the navigation state.

### 2. Installation

First, install the necessary packages:

```bash
npm install @react-navigation/native
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
```

If you're using Expo, run:

```bash
expo install react-native-screens react-native-safe-area-context
```

### 3. Basic Navigation

#### 3.1 Stack Navigator

A Stack Navigator allows you to navigate between screens in a stack-like fashion, where new screens are pushed on top of the stack and back navigation pops them off.

**Example:**

1. **Setup Navigation Container:**

```jsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

2. **HomeScreen Component:**

```jsx
import React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
```

3. **DetailsScreen Component:**

```jsx
import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
};

export default DetailsScreen;
```

### 4. Advanced Navigation

#### 4.1 Tab Navigator

A Tab Navigator allows you to switch between different screens using tabs at the bottom of the screen.

**Example:**

1. **Install Bottom Tabs:**

```bash
npm install @react-navigation/bottom-tabs
```

2. **Setup Tab Navigator:**

```jsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

3. **SettingsScreen Component:**

```jsx
import React from 'react';
import { View, Text } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;
```

#### 4.2 Drawer Navigator

A Drawer Navigator allows you to swipe from the side of the screen to open a drawer with navigation options.

**Example:**

1. **Install Drawer:**

```bash
npm install @react-navigation/drawer
```

2. **Setup Drawer Navigator:**

```jsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
```

#### 4.3 Nested Navigators

You can nest navigators to create complex navigation structures.

**Example:**

1. **Combine Stack and Tab Navigator:**

```jsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

#### 4.4 Passing Parameters

You can pass parameters to routes when navigating.

**Example:**

1. **Navigate with Parameters:**

```jsx
<Button
  title="Go to Details"
  onPress={() => navigation.navigate('Details', { itemId: 86, otherParam: 'anything you want here' })}
/>
```

2. **Access Parameters:**

```jsx
import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text>
    </View>
  );
};

export default DetailsScreen;
```

### 5. Handling Navigation State

React Navigation provides hooks to access and manipulate the navigation state.

**Example:**

1. **useNavigation Hook:**

```jsx
import { useNavigation } from '@react-navigation/native';

const MyComponent = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  );
};
```

2. **useRoute Hook:**

```jsx
import { useRoute } from '@react-navigation/native';

const DetailsScreen = () => {
  const route = useRoute();
  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text>
    </View>
  );
};
```

### Conclusion

React Navigation is a powerful library that supports a variety of navigation patterns in React Native applications. Starting with basic navigation using stack navigators, you can progress to more advanced setups with tab and drawer navigators, nested navigators, parameter passing, and state management. This flexibility allows you to create complex and user-friendly navigation experiences in your mobile applications.