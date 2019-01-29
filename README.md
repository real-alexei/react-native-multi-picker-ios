This is simply a React Native bridge to [UIMultiPicker](https://github.com/aselivanov/UIMultiPicker) iOS library.

![UIMultiPicker](https://raw.github.com/aselivanov/UIMultiPickerDemo/master/media/UIMultiPicker-horizontal.png)

## Usage

API is very similar to React Native [Picker](https://facebook.github.io/react-native/docs/picker):

```jsx
import React from 'react'
import {
  AppRegistry, 
  StyleSheet, 
  SafeAreaView,
  Text
} from 'react-native'
import MultiPicker from 'react-native-ui-multi-picker'

class App extends React.Component {

  static TASTES = [
    'Sweet',
    'Sour',
    'Bitter',
    'Salty',
    'Umami'
  ];

  state = {
    selected: ['Sweet', 'Bitter']
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MultiPicker
          style={styles.picker}
          onChange={({ selectedValues }) => this.setState({ selected: selectedValues })}
          selectedValues={this.state.selected}
        >{App.TASTES.map(taste => 
          <MultiPicker.Item key={taste} value={taste} label={taste} />)}
        </MultiPicker>
        <Text style={styles.caption}>Selected: {this.state.selected.join(', ')}</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  picker: {
    backgroundColor: '#DDD'
  },
  caption: {
    padding: 20
  }
})

AppRegistry.registerComponent('App', () => App)
```

## Installation

```shell
npm install --save react-native-multi-picker-ios
react-native link
```

⚠️ If your React Native Xcode project is an Objective-C project 
(which is the case by default) 
you have to add Swift support explicitly using one of the following methods:

1. In Xcode add dummy Swift file (e.g. `Dummy.swift`) into your project. No need to generate _Bridging Header_. This fixes Xcode project configuration implicitly.
2. Add `$(TOOLCHAIN_DIR)/usr/lib/swift/$(PLATFORM_NAME)` to **Library Search Paths** of the project's main Target:
   ![Xcode project settings](https://raw.github.com/aselivanov/UIMultiPickerDemo/master/media/objc-swift.png)