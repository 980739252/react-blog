第一天 用npx create-next-app blog 创建项目 一直卡这，创建不了
显示There appears to be trouble with your network connection. Retrying
使用更换淘宝镜像yarn config set registry https://registry.npm.taobao.org
   然后在用这几个命令yarn config delete proxy
                   npm config rm proxy
                    npm config rm https-proxy
成功完成