---
title: React Native Concepts from Beginner to Advanced
excerpt: React Native Concepts from Beginner to Advanced
image: react-native.png
isFeatured: false
date: "2025-08-01"
---

## Documentation to Follow to create a new project

[Documentation Link](https://reactnative.dev/docs/getting-started-without-a-framework)

## Command to create a new react native cli project

Keeps on Changing so keep eye on official doc!!

```bash
npx @react-native-community/cli@latest init project_name
```

Basic Doubts:

- Enter y to continue while creating project.
- Install cocapods only if on mac for ios app testig or simulators.

Run instructions for Android:

- Have an Android emulator running (quickest way to get started), or a device connected.
- Go to directory and run following commands.

```bash
cd project_name
npx react-native run-android
```

Run instructions for iOS:

- Go to directory:

```bash
cd project_name/ios
```

- Install cocoapods
  - bundle install # you need to run this only once in your project.
  - bundle exec pod install
  - Go outside of ios folder using command.
  ```bash
  cd..
  ```
- Run one more command to start your project.

```bash
npx react-native run-ios
```

## Running Android Emulator
- Open Android Studio
- Go to More Actions > Virtual Device Manager
- Run any emulator