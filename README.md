# Breef Take-Home: Searchable "Agency Skills" Multi-Select

Welcome! This project is a simple demo of a **searchable multi-select dropdown** for selecting agency skills (or any set of items). Below, you’ll find instructions on how to run it, a brief overview of what’s inside, and some thoughts on potential enhancements.

---

## Getting Started

1. **Clone or download** this repository.
2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open** your browser and visit http://localhost:3000 to see the demo in action.

You can also find a live version of this app here https://breef-take-home.vercel.app/.

---

## Project Stack & Setup

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript & React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Linting & Formatting**: ESLint + Prettier + Tailwind Sort + Import Sort

I started with a Next.js + Tailwind template and added a few of my favorite libraries for a clean and organized developer experience.

---

## Project Structure

```

├── app
│   ├── layout.tsx             // Main layout with header, sidebar, and next-step button
│   ├── page.tsx               // Home page, showcasing the "Project Scope" selection
│   ├── agency/page.tsx        // Agency page, reusing the multi-select dropdown
│   ├── details/page.tsx       // Simple details page
│   └── ...
├── components
|   ├── ui
|   |   ├── Button.tsx          // Custom button component
|   |   ├── Badge.tsx           // Custom badge component
|   |   └── ...
│   ├── NextStepButton.tsx     // Determines the next route based on current path
│   ├── SearchableDropdown.tsx // Core dropdown component with filtering + animations
│   ├── SelectableBadgeList.tsx // Displays selected or suggested items as badges
│   ├── ...
├── lib
│   ├── skillsData.ts          // Mock skill data
│   └── agenciesData.ts        // Mock agency data
└── ...

```

Each page (`/` and `/agency`) demonstrates how the components can be **reused** for different data sets.

---

## Approach

### **Searchable Dropdown (`SearchableDropdown.tsx`)**

This component is the heart of the project, responsible for handling search input, filtering results, and displaying selectable options in a smooth, user-friendly way.

**Filtering:**

- As the user types, the dropdown dynamically filters options in real-time using simple `.filter()` logic.
- This ensures only relevant results are shown while maintaining high performance.

**Framer Motion for Animations:**

- Opening and closing the dropdown are animated for a smooth experience.
- Adding/removing selections uses motion effects to prevent abrupt UI shifts.

**Usability Enhancements:**

- **Auto-closes on selection**: After an item is selected, the input blurs, ensuring a clean and intuitive UX.
- **Click outside to close**: Prevents the dropdown from staying open when clicking elsewhere.

---

### **Multi-Select Badge List (`SelectableBadgeList.tsx`)**

This component is responsible for displaying **selected** and **suggested** items as badges. It provides a **clear, interactive way** for users to add or remove items smoothly.

**Dynamic Rendering**

- Displays selected items or suggested options using a **consistent badge UI**.
- Uses a **single reusable component** for both "Selected" and "Suggested" lists.

**Framer Motion for Animations**

- When a badge is added or removed, the UI updates smoothly to **avoid jarring layout shifts**.
- This ensures a more **polished, seamless experience**.

**Intuitive Click Behavior**

- Clicking a **suggested** badge adds it to the selected list.
- Clicking a **selected** badge removes it from the list.
- Only the **XIcon** is clickable when removing an item (to prevent accidental deletions).

---

## What I'd Improve With More Time

1. **Keyboard Navigation**
   - Full accessibility for the dropdown and badges: arrow key support, `Enter` to select, `Esc` to close, etc.
2. **Collision Detection**
   - Use a robust dropdown library or add logic to handle screen edges (so the dropdown never gets cut off).

---

## Closing Notes

Thank you for reviewing my work! I aimed to keep things tidy, straightforward, and visually pleasing. If you have any questions or feedback, I’m all ears. I hope this project demonstrates my approach to building UI components that feel smooth, look decent, and can be effortlessly expanded in the future.

Enjoy exploring the code, and have a wonderful day!
