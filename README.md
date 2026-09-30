# Albert Olivares — Interactive Engineering Portfolio

An interactive, high-performance portfolio built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Matter.js**. Features a decoupled physics engine enabling full Zero-Gravity interactivity alongside a clean, static Recruiter Mode for traditional resume viewing.

---

## Key Features

### 🌌 Interactive 2D Physics & Zero-Gravity Engine
- **Matter.js Integration**: Converts DOM elements into dynamic rigid bodies with realistic mass, friction, restitution, and collision boundaries.
- **Multi-Vector Gravity HUD**: Floating overlay HUD (`ControlsOverlay.tsx`) allowing users to trigger Zero-G floatation, flip gravity upward, pull left/right, apply downward gravity, or instantly reset layout.
- **Pointer Drag & Throw**: Micro-gesture detection allowing users to drag, throw, and fling floating cards while preserving quick-tap detection for detail modals.
- **Robust Listener Lifecycle Management**: Isolated native capture-phase event listeners to isolate physics touch handlers from mobile scroll behavior and native browser click synthesis.

### 📱 Responsive Mobile Physics Optimization
- **Compact Mobile Sizing**: On viewports `< 640px`, physics-active project cards scale down to compact `110px × 110px` square bounds to ensure generous floating screen real estate.
- **Title-Only Display**: Hides descriptions, tags, and highlights in mobile physics mode for clean visual clutter management.
- **Strict Contained Hit-Boxes**: Matches pointer hit-boxes 100% to visible card borders to eliminate invisible overflow tap regions.

### 💼 Recruiter & Reduced Motion Mode
- **Reduced Motion Support**: Automatically respects `prefers-reduced-motion: reduce` browser media queries by defaulting to traditional static grid layouts.
- **Recruiter Toggle**: Top navigation bar toggle allows recruiters to instantly disable physics simulation and switch to a static, scannable resume grid.

### 🔬 Architecture & Deep Experience Showcase
- **Interactive Project Modals**: Tapping floating or grid project cards opens `<ProjectModal />` showcasing detailed technical architecture breakdowns, metrics, and production client links.
- **Structured Data Layer**: Single source of truth data architecture (`src/lib/data.ts`) containing reverse-chronological engineering experience (Ascent Funding, LJG Partners, FireKing, VMRF, Celgene, SDSU B.S. Computer Engineering).

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI & State**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), Glassmorphism & Custom CSS Variables
- **Physics Engine**: [Matter.js](https://brm.io/matter-js/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## Directory Structure

```text
albert-olivares-portfolio/
├── public/                     # Static assets (profile image, favicon, icons)
├── src/
│   ├── app/                    # Next.js 15 App Router pages & global styles
│   │   ├── globals.css         # Custom CSS components, utilities, and variables
│   │   ├── layout.tsx          # Root HTML metadata & font setup
│   │   └── page.tsx            # Main portfolio layout container
│   ├── components/             # Reusable UI components
│   │   ├── ControlsOverlay.tsx # Floating physics HUD controls
│   │   ├── PhysicsElement.tsx  # Interactive physics wrapper component
│   │   ├── ProjectModal.tsx    # Technical architecture detail modal
│   │   └── sections/           # Portfolio section modules (Header, Projects, Skills, etc.)
│   ├── context/                # PhysicsContext state provider
│   ├── hooks/                  # Custom hooks (usePhysicsWorld.ts)
│   ├── lib/                    # Portfolio data source of truth
│   └── types/                  # TypeScript interface definitions
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites
- **Node.js**: `18.17.0` or higher
- **npm**: `9.0.0` or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/albertolivares/albert-olivares-portfolio.git
   cd albert-olivares-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build & Quality Checks

- **Lint Codebase**:
  ```bash
  npm run lint
  ```
- **Type Check**:
  ```bash
  npx tsc --noEmit
  ```
- **Production Build**:
  ```bash
  npm run build
  ```
- **Start Production Server**:
  ```bash
  npm run start
  ```

---

## Author & Contact

**Albert Olivares** — *Senior Software Engineer & Lead Frontend Architect*
- **Email**: olivaresalb1@gmail.com
- **LinkedIn**: [linkedin.com/in/albertolivares](https://linkedin.com/in/albertolivares)
