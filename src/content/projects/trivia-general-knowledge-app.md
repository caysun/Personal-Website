---
title: "Trivia General Knowledge App"
summary: "A published Flutter trivia app with a 3,000+ question bank, responsive layouts, score tracking, and Google Play Store release."
category: "Software"
tags: ["Flutter", "Dart", "JSON", "Android Studio"]
featured: false
order: 8
role: "Built the app UI, data handling, quiz randomization, score saving, testing, and publication workflow."
tools: ["Flutter", "Dart", "Android Studio", "JSON", "media queries", "Flutter web emulators"]
results:
  - "Published the final trivia app to the Google Play Store."
  - "Implemented dynamic quiz generation with 20 questions per session from a 3,000+ question bank."
  - "Built responsive UI with scalable SVGs, stacked-column layouts, an embedded scrollbar, and media queries."
images:
  - src: "assets/projects/portfolio-page-10.webp"
    alt: "Portfolio page introducing the trivia app and content layout implementation."
    caption: "Trivia app content layout and structure implementation."
  - src: "assets/projects/portfolio-page-11.webp"
    alt: "Portfolio page showing trivia app gameplay demo screens."
    caption: "Gameplay demo views from the Flutter trivia app."
links: []
todo:
  - "Add the exact Google Play Store URL."
---

In this project, I built my trivia app with Flutter. I learned how to process large data files, around 3000 trivia questions, into a usable JSON data format.

To ensure app graphics matched background tasks like randomization and question displays, I structured the code into different states and used await/future commands to keep everything in sync. It was difficult to make the graphics responsive due to layout overflow problems that arose depending on the question length and device type.

To account for this, I wrapped the graphics in a scaffold, used columns for answer options and questions, used em sizing and media queries based on device dimensions, and added a scroll bar for longer questions to avoid overflow. I refined colors, sound effects, backgrounds, saved the high score, and published the app to the Google Play Store after internal and closed testing.
