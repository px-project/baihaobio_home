## baihaobio_home

### 起步

```bash
git clone git@github.com:px-project/baihaobio_home.git baihaobio_home
cd baihaobio_home && yarn
```

### 目录结构

```
baihaobio_home
    |- src              # 源码
        |- pages        # 页面
        |- components   # 组件
        |- fetchs       # 与后端通信服务封装
            |- apis     # 提供服务接口
            |- common   # 通用封装（请求）
            |- config   # 后端配置
            |- types    # 后端数据类型系统
        |- router.ts    # 路由配置
        |- client.ts    # 客户端渲染入口
        |- server.ts    # 服务端渲染入口
    |- scripts          # 项目脚本
```

### 进度

- [ ] `首页`: /
- [ ] `搜索`: /search/:key
- [ ] 关于百昊
    - [ ] `公司介绍`: /about
    - [ ] `核心团队`: /team
    - [ ] `实验室展示`: /lab
- [ ] 基础服务
    - [ ] `列表`: /services
    - [ ] `详情`: /services/:id
- [ ] 特色项目
    - [ ] `列表`: /features
    - [ ] `详情`: /features/:id
- [ ] 企业资讯
    - [ ] 促销活动
        - [ ] `列表`: /sales
        - [ ] `详情`: /sales/:id
    - [ ] 新闻动态
        - [ ] `列表`: /news
        - [ ] `详情`: /news/:id
- [ ] 联系我们
    - [ ] `联系方式`: /news/contact
    - [ ] `在线留言`: /news/message
    - [ ] `人才招聘`: /news/jobs
