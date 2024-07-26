Detailed guide on implementing FlatList in React Native for both vertical and horizontal scrolling:

## React Native FlatList: Vertical and Horizontal Scrolling

### 1. Introduction to FlatList

FlatList is a core component in React Native that efficiently renders large lists of data. It is highly performant and provides a range of features to handle large datasets.

### 2. Basic FlatList Setup

First, let's create a basic setup for a FlatList with vertical scrolling.

**Example:**

1. **Install React Native (if not already done):**

```bash
npx react-native init MyFlatListApp
cd MyFlatListApp
npx react-native start
```

2. **Create the Main Component:**

```jsx
// App.js
import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View } from 'react-native';

const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
```

### 3. Vertical Scrolling

The example above shows a basic implementation of `FlatList` with vertical scrolling. By default, `FlatList` scrolls vertically.

### 4. Horizontal Scrolling

To enable horizontal scrolling, you just need to set the `horizontal` prop to `true`.

**Example:**

```jsx
// App.js (Horizontal Scrolling)
import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View } from 'react-native';

const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
```

### 5. Combined Example: Vertical and Horizontal Scrolling

Let's create a more advanced example where we have both vertical and horizontal scrolling lists.

**Example:**

```jsx
// App.js (Combined)
import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View } from 'react-native';

const VERTICAL_DATA = [
  { id: '1', title: 'Vertical Item 1' },
  { id: '2', title: 'Vertical Item 2' },
  { id: '3', title: 'Vertical Item 3' },
  { id: '4', title: 'Vertical Item 4' },
  { id: '5', title: 'Vertical Item 5' },
];

const HORIZONTAL_DATA = [
  { id: '1', title: 'Horizontal Item 1' },
  { id: '2', title: 'Horizontal Item 2' },
  { id: '3', title: 'Horizontal Item 3' },
  { id: '4', title: 'Horizontal Item 4' },
  { id: '5', title: 'Horizontal Item 5' },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HorizontalList = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <FlatList
      data={HORIZONTAL_DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.horizontalList}
    />
  );
};

const App = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={VERTICAL_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={<HorizontalList />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  horizontalList: {
    marginVertical: 20,
  },
});

export default App;
```

### 6. Optimizing FlatList

FlatList provides several props to optimize rendering performance:

- `initialNumToRender`: Specifies how many items to render initially.
- `maxToRenderPerBatch`: Limits the number of items rendered per batch.
- `windowSize`: The number of items outside the viewport to keep rendered.

**Example:**

```jsx
<FlatList
  data={DATA}
  renderItem={renderItem}
  keyExtractor={item => item.id}
  initialNumToRender={5}
  maxToRenderPerBatch={10}
  windowSize={21}
/>
```

### Conclusion

Using `FlatList` in React Native allows you to efficiently render large datasets with both vertical and horizontal scrolling. This guide covers the basics of setting up `FlatList`, implementing vertical and horizontal scrolling, combining both types of lists, and optimizing the list rendering for better performance.