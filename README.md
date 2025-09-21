# 🎨 React Color Palette

Interactive React color palette app with dynamic background switching. Built with React hooks and Tailwind CSS for smooth color transitions and responsive design.

## ✨ Features

- **Dynamic Background Colors**: Click buttons to instantly change the background
- **Smooth Transitions**: CSS transitions with `duration-200` for seamless color changes
- **Responsive Design**: Works perfectly on all screen sizes
- **Modern UI**: Clean design with rounded buttons and shadow effects
- **React Hooks**: Uses `useState` for efficient state management

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and formatting

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kevil-Gandhi/react-color-palette.git
cd react-color-palette
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 How It Works

The app uses React's `useState` hook to manage the background color state. When a color button is clicked, it updates the state which triggers a re-render with the new background color.

```jsx
const [color, setColor] = useState("olive");

// Button click handler
onClick={() => setColor("red")}
```

## 🎨 Color Options

Currently includes three color options:
- 🔴 Red
- 🟢 Green
- 🔵 Blue

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨💻 Author

**Kevil Gandhi**
- GitHub: [@Kevil-Gandhi](https://github.com/Kevil-Gandhi)

---

⭐ Star this repo if you found it helpful!