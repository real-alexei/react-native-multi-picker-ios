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

    @objc func highlight(_ node: NSNumber, at: NSNumber, animated: Bool) {
        DispatchQueue.main.async {
            let component = self.bridge.uiManager.view(forReactTag: node) as! RNMultiPicker
            component.highlight(at.intValue, animated: animated)
        }
    }
}
