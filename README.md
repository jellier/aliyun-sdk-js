# 阿里云 SDK for JavaScript

阿里云 SDK for JavaScript, 基于AWS SDK开发。支持浏览器，手机浏览器和Node.js

## 安装

### Node.js 安装

```sh
npm install aliyun-sdk
```

## 使用方法及代码示例

### OSS
在 samples/oss 目录下的代码示例，使用方法：
 - 将 sample/oss/config_sample.json 另存为 sample/oss/config.json，填入代码中所需参数
 - 用编辑器打开需要执行的示例文件，修改其中的参数满足个人特定环境，然后保存
 - 执行示例文件即可

### OCS
在 samples/ocs 目录下的代码示例，使用方法：
 - 修改 sample/ocs/ocs.js，填入代码中所需参数
 - 用编辑器打开需要执行的示例文件，修改其中的参数满足个人特定环境，然后保存
 - 执行示例文件即可

更多帮助参考 https://github.com/alevy/memjs


## 目前支持的服务

SDK 目前支持下列服务:

<table>
  <thead>
    <th>服务名</th>
    <th>类名</th>
    <th>API 版本</th>
  </thead>
  <tbody>
    <tr><td>Aliyun OSS</td><td>ALY.OSS</td><td>2013-10-15</td></tr>
    <tr><td>Aliyun OCS</td><td>ALY.OCS</td><td></td></tr>
  </tbody>
</table>

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
