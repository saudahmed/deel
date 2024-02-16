# Build Your First Ionic App: Photo Gallery (Ionic React and Capacitor)

This project is created as a React app to which later [Capacitor](https://capacitor.ionicframework.com) (native app runtime) is added followed by [Ionic React](https://ionicframework.com/docs/react).

## How It Works

After the user says all its payslips, user can select a payslip to see its detail and later can download it to Files app whether on iOS or Android.

## Feature Overview
* App framework: [React](https://reactjs.org/)
* UI components: [Ionic Framework](https://ionicframework.com/docs/components)
* Native runtime: [Capacitor](https://capacitor.ionicframework.com)
  * Save file to the filesystem: [Filesystem API](https://capacitor.ionicframework.com/docs/apis/filesystem)

## Project Structure
* Payslips page showing all the payslips and separated in year section.
* PayslipsDetail page to show detail of the payslip.
* Support to include pages in future using react router.
* Keep the components separate

## How to Run

if you have not setup your system for iOS and Android development, please See [here](https://capacitorjs.com/docs/getting-started/environment-setup). I used yarn for dependencies and script generation. After setting it up in your terminal:

0) Install Ionic if needed: `npm install -g @ionic/cli`.
1) Clone this repository.
2) use Nodejs 18.
2) In a terminal, change directory into the repo: `cd deel`.
3) Install all packages: `yarn install`.
4) Run on the web: `npm run start`.
5) Run on iOS `yarn run-ios`.
6) Run on Android `yarn run-android`.

Please setup your simulators for iOS and Android if you get a prompt while running.

## Some Extra

Project can be used as a template to also use Material UI, Storybook and testing-library/react.
