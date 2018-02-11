import React from 'react';
import {Text,TouchableNativeFeedback,StyleSheetTouchableOpacityNativeFeedback} from 'react-native';


const ToggleButton = () => (
    <TouchableNativeFeedback
       
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={{width: 48, height: 48, backgroundColor: 'red'}}>
        <Text style={{margin: 30}}>Button</Text>
      </View>
    </TouchableNativeFeedback>
  );

export default TouchableOpacity;