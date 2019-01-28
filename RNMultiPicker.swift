import Foundation
import UIKit
import UIMultiPicker
import React

@objc(RNMultiPicker)
class RNMultiPicker : UIMultiPicker {
  
  @objc
  var onChange: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    setup()
  }
  
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
    setup()
  }
  
  convenience init() {
    self.init(frame: .zero)
  }
  
  private func setup() {
    addTarget(self, action: #selector(RNMultiPicker.didChange(_:)), for: .valueChanged)
  }
  
  @objc
  func didChange(_ sender: UIMultiPicker) {
    if let onChange = self.onChange {
      onChange([ "selectedIndexes": sender.selectedIndexes ])
    }
  }
}
