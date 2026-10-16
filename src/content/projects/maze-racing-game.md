---
title: "Maze Racing Game"
summary: "A published C++ and SFML maze racing game using recursive backtracking, SAT collision detection, score file I/O, and multiple game states."
category: "Software"
tags: ["C++", "SFML", "DFS", "SAT"]
featured: false
order: 7
role: "Developed the maze generation, gameplay, collision detection, score saving, menus, and published game."
tools: ["C++", "SFML", "recursive backtracking", "Depth-First Search", "Separating Axis Theorem", "file I/O"]
results:
  - "Published the completed game on itch.io."
  - "Implemented recursive backtracking for maze generation."
  - "Applied the Separating Axis Theorem and dot-product projections for collision detection."
images:
  - src: "assets/projects/portfolio-page-08.webp"
    alt: "Portfolio page showing maze generation and deceptive path implementation for the maze racing game."
    caption: "Maze generation and deceptive path implementation."
  - src: "assets/projects/portfolio-page-09.webp"
    alt: "Portfolio page showing bounding box issues and Separating Axis Theorem implementation for the maze game."
    caption: "Bounding box comparison and SAT collision implementation."
  - src: "assets/projects/portfolio-page-10.webp"
    alt: "Portfolio page showing Separating Axis Theorem implementation and the start of the trivia app section."
    caption: "SAT implementation and transition into app development work."
links:
  - label: "GitHub"
    href: "https://github.com/caysun"
todo:
  - "Add the exact itch.io URL and repository URL."
---

I became interested in maze generation and path finding algorithms through competitive programming competitions. I first wrote a simple maze generation program using recursive backtracking rooted Depth-First Search. From there, I made the game interactive.

Using SFML graphics, I made a playable car and displayed the generated maze as a pattern of rectangles for walls and empty grid cells. To detect collisions, I implemented the Separating Axis Theorem, learning vector manipulations and point projections with the dot product.

With the original recursive backtracking method to break walls, too many paths were formed. To fix this, I added extra walls after maze generation so that paths would have deeper dead ends and appear more deceptive. I also added a timer, high score saver, end screen, menu screen, three difficulties, and other graphics.
