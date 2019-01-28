#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(RNMultiPickerManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(options, NSArray<NSString>)
RCT_EXPORT_VIEW_PROPERTY(selectedIndexes, NSNumberArray)
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)

@end