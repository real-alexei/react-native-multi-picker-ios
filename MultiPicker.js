import React from 'react'
import { 
    Platform, 
    UnimplementedView 
} from 'react-native'
import MultiPickerIOS from './MultiPickerIOS'

let Item = ({ label, value }) => null

export default class MultiPicker extends React.Component 
{
    static Item  = Item

    render() {
        if (Platform.OS === 'ios') {
            return <MultiPickerIOS {...this.props}>{this.props.children}</MultiPickerIOS>;
        } else {
            return <UnimplementedView />;
        }
    }
}
