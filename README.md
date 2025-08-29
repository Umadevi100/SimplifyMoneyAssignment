

# SimplifyMoney FE Intern Assignment

🌐 **Live Demo:** [https://simplifymoneyfeintern.netlify.app/](https://simplifymoneyfeintern.netlify.app/)

This project is a React Native (Expo) web application built for the **SimplifyMoney Frontend Internship Assignment**.  
It displays real-time commodity prices (Gold, Silver, Platinum, Palladium) with a clean UI and navigation.

---

## 🚀 Features
- **Landing Page** with a welcome header and logo.
- **Three Horizontal Containers**:  
  - Silver  
  - Gold  
  - Platinum  
  Each container displays basic information (price per gram in INR) and navigates to its dedicated landing page when clicked.
- **Individual Landing Pages** for each metal:
  - Detailed price card with last updated timestamp.
  - Good UI layout with Themed components.
- **Real-Time API Integration**:  
  Fetches live prices of metals (INR) from a Metals API.
- **Responsive & Themed UI** using Expo + custom components (`ThemedText`, `ThemedView`).
- **Parallax Scroll View** header for the home page.
- **Dynamic Titles** per page with Expo Router.

---

## 🛠️ Tech Stack
- **React Native** (Expo framework)
- **Expo Router** for navigation
- **Expo Image** for optimized asset handling
- **Custom Themed Components**
- **Metals Price API** (currency in INR)

---

## ⚡ Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/Umadevi100/SimplifyMoneyAssignment.git
   cd SimplifyMoneyFEIntern
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the Expo development server:
   ```sh
   npx expo start
   ```

4. Run on a device:
   - Press `a` for Android
   - Press `i` for iOS
   - Press `w` for Web

---

## 🌐 API Example Response
```json
{
  "status": "success",
  "currency": "INR",
  "unit": "g",
  "metals": {
    "gold": 9627.4353,
    "silver": 109.978,
    "platinum": 3835.4976,
    "palladium": 3111.739
  },
  "timestamps": {
    "metal": "2025-08-28T19:06:08.380Z",
    "currency": "2025-08-28T19:05:09.332Z"
  }
}
```

---

## 🧩 Fixing Netlify Expo Error
While deploying to Netlify, the following error occurred:
```
expo export:web can only be used with Webpack. Use expo export for other bundlers.
```

### ✅ Solution:
- Update `netlify.toml` build command:
  ```toml
  [build]
  command = "npx expo export"
  publish = "dist"
  ```
- Ensure `expo-router` and `@expo/webpack-config` are properly installed for web builds.

---

## 📌 Git Workflow
If you see this error while pushing:
```
! [rejected] main -> main (non-fast-forward)
```
It means your local branch is behind the remote. Fix with:
```sh
git pull origin main --rebase
git push -u origin main
```
Always pull before pushing to avoid conflicts.

---

## 📖 Assignment Context
This project was inspired by the **front-end intern assignment** presented by Parag, a chief technologist.  
The assignment required building a **mobile application using React Native** to display **real-time commodity prices** (Gold, Silver, Platinum, Palladium) on a landing page with clean UI.

---


