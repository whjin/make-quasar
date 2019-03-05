# Quasar App

> 使用文档：[使用Quasar设计Material和IOS风格的响应式网站](https://whjin.github.io/blog/2019/02/23/%E4%BD%BF%E7%94%A8Quasar%E8%AE%BE%E8%AE%A1Material%E5%92%8CIOS%E9%A3%8E%E6%A0%BC%E7%9A%84%E5%93%8D%E5%BA%94%E5%BC%8F%E7%BD%91%E7%AB%99/)

`Quasar`项目部署在`github pages`的具体步骤：

> 参考官方文档：
> [GitHub Pages](https://cli.vuejs.org/zh/guide/deployment.html#github-pages)
> [本地预览](https://cli.vuejs.org/zh/guide/deployment.html#本地预览)

**本地预览**

第一步：先使用`quasar build`构建`dist`文件夹，再使用Node.js静态服务器进行预览。

    npm install -g serve
    # -s 参数的意思是将其架设在 Single-Page Application 模式下
    # 这个模式会处理即将提到的路由问题
    serve -s dist

第二步：在项目目录`dist/spa-<theme>`下创建`deploy.sh`进行部署。

    #!/usr/bin/env sh
    
    # 当发生错误时中止脚本
    set -e
    
    # 构建
    npm run build
    
    # cd 到构建输出的目录下 
    cd dist
    
    # 部署到自定义域域名，这步根据实际情况设置
    # echo 'www.example.com' > CNAME
    
    git init
    git add -A
    git commit -m 'deploy'
    
    # 部署到 https://<USERNAME>.github.io
    # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
    
    # 部署到 https://<USERNAME>.github.io/<REPO>
    # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
    
    cd -

完成以上步骤后在GitHub上修改为`gh-pages`分支下的URL即可。