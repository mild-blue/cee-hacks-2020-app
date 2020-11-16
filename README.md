# cee-hacks-2020-app

Prerequisites:

* Node.js
* Android Studio - for Android build
* XCode - for iOS build

## Installation
[Ionic installation docs](https://ionicframework.com/docs/intro/cli)

```
npm install -g @ionic/cli
```


## Empty Ionic App [📂/empty-app](https://github.com/mild-blue/cee-hacks-2020-app/empty-app)

* Created with `ionic start empty-app tabs`. 
* Execute `npm install` on first run

### Run app locally in browser
```
ng run
```

### Build app
[Ionic build docs](https://ionicframework.com/docs/angular/your-first-app/6-deploying-mobile)

```
ionic build
```

Next, create both the iOS and Android projects:
```
ionic cap add ios
ionic cap add android
```
Every time you perform a build (e.g. `ionic build`) that updates your web directory (default: `www`), you'll need to copy those changes into your native projects:
```
ionic cap copy
```
After making updates to the native portion of the code (such as adding a new plugin), use the `sync` command:
```
ionic cap sync
```

#### iOS
```
ionic cap open ios
```

#### Android
```
ionic cap open android
```