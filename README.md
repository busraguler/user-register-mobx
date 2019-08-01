# user-register-mobx
State administration with mobx in user registration application

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
  
Navigasyon için react-native-router-flux kullanabilirsiniz.
  
    npm install --save react-native-router-flux
    
Elementler için react-native elements https://react-native-training.github.io/react-native-elements/docs/getting_started.html bu site ile yükleme yapabilirsiniz
