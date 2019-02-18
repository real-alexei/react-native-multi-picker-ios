#import <UIKit/UIKit.h>
#import <React/UIView+React.h>

// We cannot show this as UIMultiPicker subclass becuase Objective-C cannot subclass Swift.
@interface RNMultiPicker

// In this forward declaration file we only specify RCT_CUSTOM_VIEW_PROPERTYs.
@property (nonatomic, strong) UIFont *font;

@end;
