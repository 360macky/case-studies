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

<img src="/hackbank__cover.webp" alt="Hackbank on the Web" />

## Introduction

Transfering money from one bank to another is a common task in our lives. But it is not always easy to know how much a transaction will cost. This is because each bank has its own commission and delay rules. But now people can use a mobile application to calculate the commissions and delays of a bank-to-bank transaction.

Introducing **Hackbank**.

### What is Hackbank?

**Hackbank** is a mobile application that allows you to calculate the commissions and delays of a bank-to-bank transaction. The user just needs to select the origin and destination banks, and the application will calculate the commissions and delays of the transaction.

<img src="/hackbank_landing__cover.webp" alt="Landing page of Hackbank" data-onpage="true" />

### Software Information

- **Project technology**: React Native, Expo, Firebase Hosting, React Navigation
- **Industry**: Finance
- **Work Duration**: ≈4 months
- **Accessibility WCAG**: AA (2.0)
- **Version**: 1.1

## Features

- Calculate the commissions and delays of a bank-to-bank transaction
- Support of the 4 most important banks in Peru
- Multiplatform app for Android, iOS and Web
- Usage without sign up

## Platform and Technology

Hackbank is available for Android, iOS and Web.

I wanted to create a cross-platform application, that is reason why I chose <a href="https://reactnative.dev">React Native</a>.

React Native is a framework that allows you to create applications for Android, iOS and Web. It is based on <a href="https://reactjs.org">React</a>, which is a JavaScript library for creating user interfaces.

Expo is a framework that allows you to create React Native applications adding a lot of features. It is a great tool for creating performant applications.

## Development Process

### Concept of the Transfer Restriction Calculator (TRC)

The operation of the prediction consists of the automatic review of a <a href="https://www.json.org/json-en.html" target="_blank">JSON</a> file called **Transfer Restriction Calculator** (**TRC** from now on).

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

1. The user enters the application.
2. The user fills in the data of the transaction (bank of origin, bank of destination and amount).
3. The user clicks on the button "Predict" to calculate the result.
4. The user sees the result of the transaction.
5. The user can go back to the form to make another calculation.

If there is any problem, there is a "compass" button that allows the user to go to the information page.

### Publishing the Application

In both cases I used <a href="https://expo.dev/eas" target="_blank">Expo Application Services</a> (EAS). EAS is a service that allows you to build and publish your application in a very simple way.

#### Google Play Store

The process of publishing in Google Play Store is very simple. I just had to create a Google Play Developer account and upload the APK file. I used EAS to create the APK file.

### App Store

The process of publishing in App Store is a little more complicated. I had to create an Apple Developer account, create an App ID and a Provisioning Profile. I used EAS to create the IPA file.

### Web

To publish in web I'm using <a href="https://firebase.google.com/docs/hosting">Firebase Hosting</a>. Firebase Hosting is a service that allows you to publish static files in a very simple way.

The following commands are used to deploy the application in web:

```bash
npm run predeploy
npm run deploy-hosting
```
## License

The source code of Hackbank is distributed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.

## References

- <a href="https://reactnative.dev/" target="_blank">React Native</a>
- <a href="https://expo.io/" target="_blank">Expo</a>
- <a href="https://firebase.google.com/docs/hosting" target="_blank">Firebase Hosting</a>
- <a href="https://docs.expo.io/build/eas-build/" target="_blank">EAS</a>
