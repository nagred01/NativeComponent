//
//  NativeHttpService.m
//  NativeComponent
//
//  Created by Hiren Vaghela on 08/06/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "NativeHttpService.h"

@implementation NativeHttpService
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(get:(RCTResponseSenderBlock) callback)
{
  NSString *somestring = @"NativeHttpService get method response....";
  callback(@[somestring]);
}


@end
