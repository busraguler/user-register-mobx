# user-register-mobx
Mobx statle leri yöneterek ile kullanıcı kayıt uygulaması

Aşağıdaki mobx sürümü react native 0.57.5 sürümü ile uyumlu çalışıyor. Mobx yüklemeden önce kullandığınız react-native sürümü ile uyumlu olup olmadığını kontrol edin.

package.json dosyasına aşağıdakileri ekleyin

  "@babel/plugin-proposal-decorators": "^7.1.2",
    "mobx": "^4.8.0",
    "mobx-react": "^5.4.3",

.babelrc dosyasına (sürümünüz 0.56.0 dan büyükse) aşağıdakileri kopyalayın

  {
    "presets": [
      "module:metro-react-native-babel-preset"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ]
    ]
  }
  
  Sonra node üzerinden npm install yapıp projeyi run layın.
  
