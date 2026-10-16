---
title: "PID Tuning Dashboard"
summary: "An FTC Dashboard workflow for visually tuning PID and PIDF constants using current-position and target-position graphs."
category: "Robotics"
tags: ["FTC Dashboard", "PID", "PIDF", "Control"]
featured: false
order: 6
role: "Restructured the team's code base so PID coefficients could be tuned visually."
tools: ["FTC Dashboard", "PID control", "PIDF control", "Java", "robot control code"]
results:
  - "Made PID coefficient tuning less tedious and more accurate."
  - "Used a graph of current position against target position over time to validate constants."
  - "Integrated new technologies into an older robotics framework."
images:
  - src: "assets/projects/portfolio-page-08.webp"
    alt: "Portfolio page showing PID turn demo and codebase restructuring for dashboard tuning."
    caption: "PID turn demo and codebase restructuring for FTC Dashboard tuning."
links: []
todo:
  - "Add repository or demo video link if one should be public."
---

Traditionally, my robotics team would spend hours tuning PID, eventually PIDF, constants for lifting mechanisms, drivetrain motors, and turret systems. I wanted to make this process less tedious and more accurate.

I restructured our code base so that we could implement an FTC Dashboard system. In this way, we were able to tune our PID coefficients visually. A graph of the current position against the target position over time made it much more efficient to change constants and validate their accuracy.
