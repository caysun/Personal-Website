---
title: "Autonomous Object Tracker"
summary: "A vision-guided robot that detects a red Solo cup, computes distance and strafe offset, and drives toward the object."
category: "Robotics"
tags: ["OpenCV", "YCbCr", "HSV", "Encoders"]
featured: true
order: 4
role: "Built the image processing pipeline, distance calculation, and autonomous drivetrain behavior."
tools: ["Logitech webcam", "OpenCV", "RGB", "YCbCr", "HSV", "contour detection", "drivetrain encoders"]
results:
  - "Reliably detected a red Solo cup using image processing."
  - "Converted pixel measurements into distance and strafe-offset calculations."
  - "Converted drivetrain motor encoder readings to translational distance to automate driving."
images:
  - src: "assets/projects/portfolio-page-06.webp"
    alt: "Portfolio page showing object tracker YCbCr conversion, reference image, and camera geometry formulas."
    caption: "YCbCr conversion, reference image, focal length calculation, and pixel conversion formulas."
links: []
todo:
  - "Add a video or repository link if one should be public."
---

In the summer of my sophomore year, I wanted to experiment with OpenCV pipelines. I challenged myself to write a program to detect a red Solo cup. In this process, I built a foundation in contour mechanics, matrix operations, YCbCr, HSV, and RGB image processing.

Once I was able to reliably detect the red Solo cup, I pushed the project further by determining the distance from the object and automatically driving up to it. To determine the distance, I converted pixel widths and heights to real-world units by taking reference values from known measured distances.

The portfolio includes the focal length calculation:

$$
F = \frac{P_{ref} \cdot D_{ref}}{W_{real}} = \frac{550 \cdot 19.5}{9.5} \approx 1128.9px
$$

It also documents the pinhole-camera similar-triangles relation:

$$
D = \frac{W_{real} \cdot F}{W_{px}}
$$

For centering and driving, I used vertical displacement from the Solo cup and a strafe offset calculation using focal length and the pixel-to-real-world distance ratio, \(R\).
