
interface RouteConfig {
    path?: string;
    name?: string;
    title?: string;
    children?: RouteConfig[];
}

export const config: RouteConfig[] = [
    {
        path: '',
        name: 'home',
        title: '首页',
    },
    {
        path: 'search',
        title: '搜索',
    },
    {
        title: '关于百昊',
        children: [
            {
                path: 'about',
                title: '公司介绍',
            },
            {
                path: 'team',
                title: '核心团队',
            },
            {
                path: 'lab',
                title: '实验室展示',
            },
        ],
    },
    {
        title: '基础服务',
        children: [
            {
                path: 'services',
            },
            {
                path: 'services/:id',
            },
        ],
    },
    {
        path: 'features',
        title: '特色项目',
        children: [
            {
                path: '',
            },
            {
                path: ':id',
            },
        ],
    },
    {
        title: '企业资讯',
        children: [
            {
                path: 'sales',
                title: '促销活动',
                children: [
                    {
                        path: '',
                    },
                    {
                        path: ':id',
                    },
                ],
            },
            {
                path: 'news',
                title: '新闻动态',
                children: [
                    {
                        path: '',
                    },
                    {
                        path: ':id',
                    },
                ],
            },
        ],
    },
    {
        title: '联系我们',
        children: [
            {
                path: 'contact',
                title: '联系方式',
            },
            {
                path: 'message',
                title: '在线留言',
            },
            {
                path: 'jobs',
                title: '人才招聘',
            },
        ],
    },
];
