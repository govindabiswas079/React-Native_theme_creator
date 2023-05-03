const config = {
  screens: {
    FeedbackScreen: 'FeedbackScreen',
    ContactusScreen: 'ContactusScreen',
    AboutusScreen: 'AboutusScreen',
    PrivacyScreen: 'PrivacyScreen',
    ProfileScreen: 'ProfileScreen',

    UseTemplete: {
      path: "UseTemplete/:TempleteId",
      parse: {
        TempleteId: (TempleteId) => `${TempleteId}`,
      },
    },
  },
};

const linking = {
  prefixes: ["native_project://app"],
  config,
};

export default linking;

// npx uri-scheme open demoapp://app/Setting --android
// npx uri-scheme open demoapp://app/Setting --ios

// <action android:name="android.intent.action.VIEW" />
// <category android:name="android.intent.category.DEFAULT" />
// <category android:name="android.intent.category.BROWSABLE" />
// <data android:host="app" android:scheme="@string/app_name" />

//https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=image&foreground.space.trim=0&foreground.space.pad=0.25&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(255%2C%20255%2C%20255)&crop=0&backgroundShape=circle&effects=none&name=ic_launcher