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

    picker = null

    render = () => 
        Platform.OS === 'ios' ?
            <MultiPickerIOS  
                {...this.props}
                ref={(picker) => {
                    this.picker = picker
                }}
            >
                {this.props.children}
            </MultiPickerIOS> :
            <UnimplementedView />
        
    highlight = (at, animated = true) => this.picker.highlight(at, animated)
}
