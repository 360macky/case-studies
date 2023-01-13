---
title: Hackbank
date: "2022-05-30"
description: "Creating an app to calculate the commissions and delays of a bank-to-bank transaction."
tags:
  - react
  - react-native
  - expo
  - ios
  - android
  - firebase
---

## Introduction

Transfering money from one bank to another is a common task in our lives. But it is not always easy to know how much a transaction will cost. This is because each bank has its own commission and delay rules. This is why I created an application that allows you to calculate the commissions and delays of a bank-to-bank transaction. It is designed for the Peruvian market. And it is available for Android, iOS and Web.

Introducing **Hackbank**

## Platform and Technology

Hackbank is available for Android, iOS and Web.

I wanted to create a cross-platform application, that is reason why I chose React Native.

React Native is a framework that allows you to create applications for Android, iOS and Web. It is based on React, which is a JavaScript library for creating user interfaces.

Expo is a framework that allows you to create React Native applications adding a lot of features. It is a great tool for creating performant applications.

## Development Process

### Concept of the Transfer Restriction Calculator (TRC)

The operation of the prediction consists of the automatic review of a JSON file called **Transfer Restriction Calculator** (**TRC** from now on).

This `TRC.json` file contains the rules by which the data of a transaction is evaluated.

The input of the TRC consists of the following data:

- **inputBank**: Bank of origin.
- **inputBankAccountType**: Type of account of the bank of origin.
- **outputBank**: Bank of destination.
- **outputBankAccountType**: Type of account of the bank of destination.
- **amount**: Amount of the transaction.
- **date**: Date of the transaction.

The output of the TRC consists on an array of objects that contains information about the restrictions of the transaction.

### Designing the User Experience

Once the TRC was defined, I started to create the sketches of the design in Figma. I designed three screens, one for the form, another for the result and another one for the information page.

The flow of the application is as follows:

- The user enters the application.
- The user fills in the data of the transaction (bank of origin, bank of destination and amount).
- The user clicks on the button "Predict" to calculate the result.
- The user sees the result of the transaction.
- The user can go back to the form to make another calculation.

If there is any problem, there is a "compass" button that allows the user to go to the information page.

### Publishing the Application

#### Google Play Store

The process of publishing in Google Play Store is very simple. I just had to create a Google Play Developer account and upload the APK file. I used EAS (Expo Application Services) to create the APK file.

### App Store

The process of publishing in App Store is a little more complicated. I had to create an Apple Developer account, create an App ID and a Provisioning Profile. I used EAS (Expo Application Services) to create the IPA file.

### Web

To publish in web I'm using [Firebase Hosting](https://firebase.google.com/docs/hosting).

The following commands are used to deploy:

```bash
npm run predeploy
npm run deploy-hosting
```

# References

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [EAS](https://docs.expo.io/build/eas-build/)

