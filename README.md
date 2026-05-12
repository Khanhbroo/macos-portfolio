# 💻 MacOS Portfolio
**“Experience my professional world through a desktop interface.”**

A premium personal portfolio website designed to simulate the macOS operating system. This project focuses on high-end user experience, featuring draggable windows, advanced animation transitions, and complex state management to create a seamless "Cinematic Web" experience.

---

## 🚀 Live Demo & Performance

### 🔗 Live Demo
[https://macos-portfolio-khanhbroo.vercel.app](https://macos-portfolio-khanhbroo.vercel.app)

> 💡 **Pro Tip:** This project uses high-performance GSAP animations. For the best experience, please use a modern browser (Chrome, Safari, or Edge) and ensure hardware acceleration is enabled.

---

## 🧰 Tech Stack

| Technology | Description |
|------------|-------------|
| **Next.js** | Utilizing App Router & Server Components for optimized performance and SEO. |
| **GSAP** | The "soul" of the cinematic experience—handling high-performance window transitions, scroll effects, and micro-interactions. |
| **Zustand** | Lightweight and powerful state management for the Window store (handling open/focus states) and Location store (file system navigation). |
| **Tailwind CSS** | Crafting a pixel-perfect macOS aesthetic with Glassmorphism UI and fluid responsive layouts. |
| **TypeScript** | Ensuring a robust, type-safe codebase with strict interfaces for props and Higher-Order Components (HOCs). |
| **Lucide React** | Beautiful, consistent iconography for the desktop environment. |
| **React-PDF** | Integrated PDF viewer for a seamless, interactive resume experience. |

---

## 🗂️ Project Structure

The project follows a modular architecture designed for scalability and maintainability, with a strong emphasis on reusable logic.

```
macos-portfolio/
├── src/
│   ├── components/    # Core UI elements (Dock, Navbar, WindowControls)
│   ├── constants/     # Configuration for windows and file system data
│   ├── hoc/           # Higher-Order Components
│   │   └── WindowWrapper.tsx 👈 The "Heart": Manages dragging, z-index, and focus logic
│   ├── store/         # Zustand state management
│   │   ├── window.ts  # Handles window lifecycle (open, close, focus, z-index)
│   │   └── location.ts# Handles file navigation within the Finder
│   ├── types/         # Global TypeScript definitions
│   └── windows/       # Individual window implementations (Safari, Finder, Terminal, etc.)
├── public/            # Static assets (Wallpapers, App Icons)
└── README.md
```

### 🧠 The Soul of the Project: `WindowWrapper`
The `WindowWrapper` HOC is the most critical part of this architecture. It wraps every window component to provide:
- **GSAP Draggable Integration**: Seamless window movement with optimized performance.
- **Z-Index Management**: Dynamically bringing focused windows to the front.
- **Unified Controls**: Standardized macOS-style window buttons (Close, Minimize, Maximize).

---

## ✨ Features

### 🖥️ Desktop Experience
- 🪟 **Draggable Windows**: Smooth, physics-based window movement powered by GSAP.
- 🎯 **Active/Focus Management**: Intelligent window focusing system that handles layers (z-index) automatically.
- 📁 **Desktop Icons**: Interactive icons with hover effects and double-click functionality.
- ⚓ **Intelligent Dock**: Dynamic macOS-style dock with magnification effects on hover.

### 📦 Content Modules
- 📄 **Interactive Resume**: A built-in PDF viewer that allows recruiters to view and download my resume without leaving the site.
- 💻 **Terminal-Style Skills**: A command-line interface simulation showcasing my technical expertise.
- 🌐 **Safari Blog/Projects**: A web browser simulation for exploring my latest articles and project case studies.
- 📂 **Interactive Finder**: A fully functional file explorer to navigate through my work categories.

---

## 📥 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Khanhbroo/macos-portfolio.git
cd macos-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the application locally
```bash
npm run dev
```

---

## 📸 Screenshots

> 📸 *Add your actual macOS-style screenshots here to showcase the beautiful Glassmorphism UI.*

<div align="center">
  <img src="https://github.com/user-attachments/assets/your-screenshot-1.png" width="800" alt="Desktop View" />
  <img src="https://github.com/user-attachments/assets/your-screenshot-2.png" width="800" alt="Finder and Safari View" />
</div>

---

## 🔮 Future Improvements

- 🌙 **Dark Mode Toggle**: Dynamic theme switching for the entire system.
- 🎵 **Music Player**: A "Music.app" integration to play my favorite coding soundtracks.
- 📂 **Advanced File System**: Full simulation of drag-and-drop file moving and folder creation.
- 🚀 **Mobile Optimization**: Tailoring the desktop experience for touch-first mobile interactions.

---

## 👨‍💻 Author

### ✨ **MacOS Portfolio — Developed by Khanh Doan (Khanhbroo)**
**Full-stack Software Engineer**  
Built with ❤️ and a passion for creating "Cinematic" web experiences.

- 💡 Specializing in React, Next.js, and high-end animations.
- 🚀 Always pushing the boundaries of what's possible on the web.
- ⭐ If you like this project, please give it a **star on GitHub**!

---

## ⭐ Support  
**Feel free to fork, contribute, or use this project as inspiration for your own portfolio.**  
Your support means a lot! ⭐
