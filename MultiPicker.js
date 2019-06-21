import React from 'react'
import { 
    View,
    Animated
} from 'react-native'
import MultiPickerIOS from './MultiPickerIOS'

let AnimatedMultiPickerIOS = Animated.createAnimatedComponent(MultiPickerIOS)

let Item = ({ label, value }) => null

export default class MultiPicker extends React.Component 
{
    static Item  = Item

    picker = null

    height = new Animated.Value(0)
    offset = this.height.interpolate({
        inputRange: [0, 1],
        outputRange: [0, Infinity],
        easing: (height) => 
            - (A * height * height + (B - 1) * height + C) / 2
    })

    render() {
        let fontStyle = {};
        if (this.props.style) {
            fontStyle.fontSize = this.props.style.fontSize;
            fontStyle.fontWeight = this.props.style.fontWeight;
            fontStyle.fontStyle = this.props.style.fontStyle;
            fontStyle.fontFamily = this.props.style.fontFamily;
        }
        return (
            <View style={[{paddingTop: 16, paddingBottom: 16}, this.props.style]}>
                <Animated.View style={{flex:1}} onLayout={Animated.event(
                    [{
                        nativeEvent: {
                            layout: {
                                height: this.height
                            }
                        }
                    }]
                )}>
                    <AnimatedMultiPickerIOS  
                        {...this.props}
                        style={[{...fontStyle, marginTop: this.offset, marginBottom: this.offset}]}
                        ref={(picker) => {
                            this.picker = picker && picker._component
                        }}
                    >
                        {this.props.children}
                    </AnimatedMultiPickerIOS>
                </Animated.View>
            </View>
        );
    }
        
    highlight = (at, animated = true) => this.picker.highlight(at, animated)
}

const A = 0.001138663967611336
const B = 1.3481781376518218
const C = -64.72064777327921
