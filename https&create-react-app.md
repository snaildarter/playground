1. 安装 mkcert
   [详情](https://github.com/FiloSottile/mkcert)

2. 在你本机上生成一个证书颁发机构 (creates a CA)

   ```
   mkcert -install
   ```

3. 在根目录创建证书

   ```
    # Create .cert directory if it doesn't exist
    mkdir -p .cert

    # Generate the certificate (ran from the root of this project)
   mkcert -key-file ./.cert/key.pem -cert-file ./.cert/cert.pem "localhost"
   ```

参考资料

[在开发环境中使用 HTTPS](https://www.html.cn/create-react-app/docs/using-https-in-development/)

[How to Setup HTTPS Locally with create-react-app](https://www.freecodecamp.org/news/how-to-set-up-https-locally-with-create-react-app/)
