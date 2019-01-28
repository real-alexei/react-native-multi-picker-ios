import Foundation
import React

@objc(RNMultiPickerManager)
class RNMultiPickerManager : RCTViewManager {
    
    override func view() -> UIView! {
        return RNMultiPicker()
    }
    
    override static func requiresMainQueueSetup() -> Bool {
        return true;
    }
}
