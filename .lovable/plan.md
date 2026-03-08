

# UI Refinements: Glassmorphic Navbar + Capsule Buttons

## Changes

### 1. Navbar (`src/components/Navbar.tsx`)
- Apply glassmorphism: `backdrop-blur-xl bg-white/10 border border-white/20` with rounded-full or rounded-2xl container
- Rounded edges on the navbar wrapper (pill/rounded shape with margin from screen edges)

### 2. Buttons (`src/components/ui/button.tsx` + section components)
- Update `buttonVariants` base class to use `rounded-full` instead of `rounded-md` for capsule shape
- All CTAs ("Book a Strategy Call", "Book Your Strategy Call") inherit this automatically

### 3. Mobile menu sheet
- Keep glassmorphic styling consistent in the mobile hamburger menu overlay

