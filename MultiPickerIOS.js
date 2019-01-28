const NativeRNMultiPicker = require('NativeModules').RNMultiPicker;

const RNMultiPicker = {
  test: function() {
    NativeRNMultiPicker.test();
  },
};

module.exports = RNMultiPicker;
