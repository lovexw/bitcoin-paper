# 比特币白皮书多语言展示网站

这是一个优雅的比特币白皮书多语言展示网站，旨在帮助全球用户更好地理解比特币的核心概念和技术原理。

![比特币Logo](Bitcoin.svg)

## 项目特点

- 清晰的排版和阅读体验
- 响应式设计，支持各种设备访问
- 优雅的界面设计
- 支持多语言切换功能

## 在线预览

访问 [http://localhost:8000](http://localhost:8000) 即可在线预览网站效果。

## 本地运行

1. 克隆项目到本地：
```bash
git clone [项目地址]
cd paper
```

2. 启动本地服务器：
```bash
python3 -m http.server 8000
```

3. 在浏览器中访问 `http://localhost:8000` 即可查看效果

## 项目结构

```
- css/          # 样式文件
  - style.css   # 主样式文件
- js/           # JavaScript文件
  - main.js     # 主逻辑文件
- index.html    # 主页面
- Bitcoin.svg   # Logo文件
- bitcoin.jpg   # 预览图片
```

## 技术栈

- HTML5
- CSS3
- JavaScript

## 贡献

欢迎提交Issue和Pull Request来帮助改进这个项目。

## 许可证

本项目采用 MIT 许可证。详见 LICENSE 文件。

## 致谢

感谢中本聪发表的比特币白皮书，以及所有为比特币生态系统做出贡献的开发者。