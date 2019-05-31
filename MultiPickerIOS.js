import React from 'react'
import {
    findNodeHandle,
    requireNativeComponent,
    StyleSheet,
    UIManager
} from 'react-native'

let RNMultiPicker = requireNativeComponent('RNMultiPicker')

export default class MultiPickerIOS extends React.Component
{
    _picker = null

    state = {
        selectedIndexes: [],
        items: []
    }

    static getDerivedStateFromProps(props) {
        let selectedIndexes = []
        let items = []

        let selectedValues = props.selectedValues || []
        React.Children.toArray(props.children).forEach(function(child, index) {
            if (selectedValues.indexOf(child.props.value) >= 0) {
                selectedIndexes.push(index);
            }
            items.push({
                label: child.props.label,
                value: child.props.value
            })
        });

        return { items, selectedIndexes };
    }

    highlight = (at, animated = true) => {
        UIManager.dispatchViewManagerCommand(
            findNodeHandle(this._picker),
            UIManager.getViewManagerConfig('RNMultiPicker').Commands.highlight,
            [at, animated],
        )
    }

    render = () =>
        <RNMultiPicker
            ref={picker => this._picker = picker}
            style={[styles.picker, this.props.style]}
            color={this.props.color}
            tintColor={this.props.tintColor}
            options={this.state.items.map(item => item.label)}
            selectedIndexes={this.state.selectedIndexes}
            onChange={this._onChange}
            onStartShouldSetResponder={() => true}
            onResponderTerminationRequest={() => false}
        />

    _onChange = (event) => {
        if (this.props.onChange) {
            this.props.onChange({
                selectedValues: event.nativeEvent.selectedIndexes.map(at => this.state.items[at].value)
            })
        }

        if (this._picker) {
            this._picker.setNativeProps({
                selectedIndexes: this.state.selectedIndexes,
            });
        }
    }
}

const styles = StyleSheet.create({
    picker: {
        flex: 1,
        alignSelf: 'stretch'
    }
})
