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

⚠️ This library relies on CocoaPods for proper dependency management,
since it pulls native Swift library [UIMultiPicker](https://github.com/aselivanov/UIMultiPicker).

First:
```shell
npm install --save react-native-multi-picker-ios
```

Then add the following to your `ios/Podfile`:
```ruby
pod 'RNMultiPicker', :path => '../node_modules/react-native-multi-picker-ios'
```

Finally run `pod install`.