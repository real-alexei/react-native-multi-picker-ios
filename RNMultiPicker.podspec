require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "RNMultiPicker"
  s.version      = package['version']
  s.summary      = "RNMultiPicker"
  s.homepage     = "https://github.com/aselivanov/react-native-multi-picker-ios"
  s.license      = package['license']
  s.author       = { "author" => "alexei@slowmotion.io" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/aselivanov/react-native-multi-picker-ios.git", :tag => "cocoapods" }
  s.source_files  = "*.{m,swift}"
  s.requires_arc = true

  s.dependency "React"
  s.dependency "UIMultiPicker"

end