#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTFont.h>
#import "RNMultiPicker.h"

@interface RCT_EXTERN_MODULE(RNMultiPickerManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(options, NSArray<NSString>)
RCT_EXPORT_VIEW_PROPERTY(selectedIndexes, NSNumberArray)
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)

RCT_EXPORT_VIEW_PROPERTY(tintColor, UIColor)
RCT_EXPORT_VIEW_PROPERTY(color, UIColor)
RCT_EXPORT_VIEW_PROPERTY(textAlign, NSTextAlignment)
RCT_CUSTOM_VIEW_PROPERTY(fontSize, NSNumber, RNMultiPicker)
{
  view.font = [RCTFont updateFont:view.font withSize:json ?: @(defaultView.font.pointSize)];
}
RCT_CUSTOM_VIEW_PROPERTY(fontWeight, NSString, __unused RNMultiPicker)
{
  view.font = [RCTFont updateFont:view.font withWeight:json]; // defaults to normal
}
RCT_CUSTOM_VIEW_PROPERTY(fontStyle, NSString, __unused RNMultiPicker)
{
  view.font = [RCTFont updateFont:view.font withStyle:json]; // defaults to normal
}
RCT_CUSTOM_VIEW_PROPERTY(fontFamily, NSString, RNMultiPicker)
{
  view.font = [RCTFont updateFont:view.font withFamily:json ?: defaultView.font.familyName];
}

RCT_EXTERN_METHOD(
  highlight: (nonnull NSNumber *)node
  at:(nonnull NSNumber *)at
  animated:(BOOL)animated
)

@end
