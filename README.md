# 🌐 HTML and CSS Projects

A collection of beginner-to-intermediate HTML, CSS, and JavaScript/Canvas projects covering everything from page structure and styling to animations, SVG graphics, interactive Canvas API experiments, and real-world UI clones.

---

## 📁 Projects

---

### 1. ☕ Coffee Shop (`coffeshop.html`)

A static landing page for a fictional cozy coffee shop.

**What it does:**
- Displays a navigation header with links: Home, About, Menu, and Contact
- Shows an "About Us" section with a short description and a list of specialities (Fresh Brewed Coffee, Espresso Drinks, Homemade Pastries)
- Includes a **"Learn More"** button linking to Starbucks
- Renders a full **menu table** divided into three categories — Coffee (Latte, Cappuccino, Americano), Tea (Green, Black, Herbal), and Pastries (Croissant, Muffin, Bagel)
- Has a styled footer with copyright text

**Key HTML/CSS concepts used:**
- HTML tables for layout (header + nav, about + specialities, menu)
- CSS custom fonts (`Georgia`, serif)
- Warm brown color palette (`#f4e6d8`, `#4b2e1f`, `#7a4a2e`)
- Hover effects on nav items and the button
- Responsive width with `80%` centered sections

---

### 2. 📚 BookNest (`Booknest.html`)

A static homepage for a fictional online bookstore called **BookNest**.

**What it does:**
- Displays a branded header with a search bar for finding books
- Shows a hero welcome section with the quote: *"There is no friend loyal as a book."*
- Includes an **"Explore More"** button
- Features a **Featured Books** section displaying book cover images with titles and authors:
  - *Echoes of Tomorrow*
  - *Educated* — Tara Westover
  - *The Book Thief* — Markus Zusak
  - *Becoming* — Michelle Obama
- Includes a **Cozy Reading Corners** section with a "View More" button and image placeholders

**Key HTML/CSS concepts used:**
- Semantic HTML elements (`header`, `section`, `div`, `table`)
- Image elements with fixed `height` and `width` attributes
- Anchor tags (`<a>`) used as clickable wrappers for book covers
- Form and input element for the search bar
- Structured layout using nested HTML tables

> **Note:** This project is a work in progress — some book images use local file paths and some text/image placeholders are empty, indicating it was still under development.

---

### 3. 🎨 SVG Playground (`svg.html`)

A hands-on HTML file that experiments with various **SVG (Scalable Vector Graphics)** elements directly in the browser.

**What it includes:**

| SVG Element | Description |
|---|---|
| `<circle>` | A sky-blue circle with "Hello" text centered inside it |
| `<rect>` | A solid orange rectangle |
| `<line>` | A horizontal black line |
| `<text>` | Plain black "Hello" text rendered via SVG |
| `<rect>` + `<text>` | A black rectangle with white text overlaid |
| `<polygon>` | A teal quadrilateral (filled 4-point polygon) |
| `<polygon>` (variant) | A second teal polygon with different corner points |
| `<text>` + `<animate>` | The word "SVG" with a fade-in opacity animation (`0 → 1` over 5 seconds) |

**Key SVG/HTML concepts used:**
- SVG coordinate system (`cx`, `cy`, `x`, `y`, `x1/y1/x2/y2`)
- Shape fills and stroke styling
- SVG `<text>` with `text-anchor`, `font-size`, and `fill`
- SVG `<animate>` for basic declarative animation (`attributeName`, `from`, `to`, `dur`)
- `<polygon>` with custom point sets

> **Note:** The `<animate>` tag in the last SVG has a small syntax error (`repeat-counter` instead of `repeatCount`, and a missing closing `>`), so the animation may not render correctly in all browsers.

---

### 4. 🏄 WaveRiders Surf Academy (`WaveRiders/index.html` + `style.css`)

A polished, multi-section surf school landing page used as a **CSS concepts showcase**.

**Images used:** Green surfboards lined up on a beach (`beginner_surf.jpg`), a surfer performing a cutback on a turquoise wave (`extra_section.avif`), and a surfing action shot (`hero.jpg`).

**What it does:**
- **Sticky navigation bar** with logo, nav links (Home, Courses, About, Contact), and hover underline animations
- **Hero section** with a full-viewport ocean background image, bold headline ("Ride the Waves"), and a "Join Now" button
- **About section** describing the academy's mission in a centered card
- **Courses section** with three course cards (Beginner Surfing, Intermediate Training, Pro Wave Mastery), each with an image and hover lift/rotate effect
- **Gallery section** with a grayscale filter that clears on hover
- **Footer** with copyright

**Key HTML/CSS concepts demonstrated (heavily commented in `style.css`):**

| Concept | Where Used |
|---|---|
| CSS Variables / Custom Properties | `:root` block — `--primary`, `--secondary`, etc. |
| CSS Reset & Box Sizing | Universal `*` selector |
| Flexbox | `nav`, `.hero`, `.course-card` layout |
| Sticky Position + Z-index | `nav` stays on top while scrolling |
| Pseudo-classes & Pseudo-elements | `li:hover`, `li::after` underline animation |
| `clamp()` for responsive font | `.hero h1` |
| CSS Transitions | Button scale, card lift, underline expand |
| 2D & 3D Transforms | `scale()`, `translateY()`, `rotateY()` on course cards |
| `@keyframes` Animation | `wave` animation on the logo |
| CSS Counters | Auto-numbering `h2` headings with `counter-increment` |
| `object-fit` & `aspect-ratio` | Course card images |
| CSS Filters | Grayscale gallery image effect |
| `backdrop-filter` | Blur behind the nav |
| `will-change` & `contain` | Performance optimization on hero |
| `!important` | Override for `.hero p` text color |
| `initial`, `unset`, `revert` | Footer color cascade demos |
| `vh`, `vw`, `em`, `rem` units | Various sections |
| Attribute Selector | `img[alt]` border styling |
| Linear Gradient | Hero overlay + nav background |

---

### 5. 📷 Photography Portfolio (`Photography/index.html` + `style.css`)

A stunning, production-quality **dark-themed photographer portfolio** with gold accents and cinematic aesthetics.

**Images used:**
- `photographer-hero.png` — Silhouette of a photographer on a mountain at golden hour
- `hero-bg.png` — Dramatic mountain valley with golden rays breaking through clouds
- `about-portrait.png` — Black-and-white portrait of a woman in a wide-brim hat
- `service-portrait.png` — Warm candlelight portrait of a woman
- `service-wedding.png` — Wedding couple silhouetted at a golden-hour lakeside sunset
- `service-landscape.png` — Aerial mountain landscape with golden mist and a winding river
- `service-event1.png` — Concert crowd at "Electric Dusk Festival" with dramatic stage lighting
- `contact-camera.png` — Canon EOS professional camera on a wooden desk under warm light

**What it does:**
- **Fixed dark navbar** with logo (camera-retro icon), nav links, and social media icons (Instagram, Facebook, Twitter). Includes a hamburger toggle menu for mobile.
- **Full-viewport hero** with a layered composition — background landscape, photographer silhouette faded in from the right using `mask-image`, and a gradient overlay. Animated staggered text reveals ("Capturing / MOMENTS / THAT LAST FOREVER") plus a bouncing mouse-scroll indicator.
- **About section** with a gold double-bordered portrait frame (grayscale on load, color on hover) and a short bio.
- **Services/Portfolio section** with filterable category tabs (All, Portrait, Wedding, Landscape, Event) — images zoom slightly on hover with a label overlay.
- **Contact section** in a three-column grid: contact details with Font Awesome icons, a message form (name, email, message), and a camera image.
- **Footer** with centered copyright and social links.

**Key HTML/CSS concepts used:**
- CSS custom properties for the full gold/dark design system (`--gold`, `--bg-dark`, `--font-script`, etc.)
- Google Fonts: `Cormorant Garamond` (serif headings), `Inter` (body), `Great Vibes` (script accents)
- Font Awesome icons throughout
- CSS Grid for about, gallery (5-column), and contact layouts
- `mask-image` / `-webkit-mask-image` for the photographer silhouette fade effect
- `@keyframes fadeUp` and `scrollBounce` for entry animations with `animation-delay` staggering
- `backdrop-filter: blur()` on the navbar
- Fully responsive with three breakpoints: `992px`, `768px`, `480px`

---

### 6. 🎨 Neo-Brutalist Canvas (`canvas.html`)

An **interactive HTML5 Canvas** animation with a bold neo-brutalist visual style.

**What it does:**
- Renders a 600×400 canvas centered on a pastel purple background with a thick black border and hard drop shadow
- Displays a **yellow header bar**, a bouncing "2026" year text, a subheading ("PADHAI HORI HAI?"), and a black footer bar with the text "★ F\*ck it We BALL ★"
- **Bubbles float upward** continuously — 8 spawn on page load, and clicking anywhere spawns 3–5 more at that exact position
- Clicking also **randomly changes the accent color** of the "2026" text from a preset palette
- The yellow underline below the subheading subtly **shifts with the mouse X position**
- The year text **gently bounces** up and down in a sine-like loop

**Key JavaScript/Canvas concepts used:**
- `canvas.getContext("2d")` for 2D rendering context
- `requestAnimationFrame` loop for smooth 60fps animation
- `ctx.fillRect`, `ctx.arc`, `ctx.fillText`, `ctx.strokeRect` for all drawing
- Mouse event listeners: `mousemove` and `click`
- Array-based particle system for bubbles (spawn, float, auto-remove when off-screen)
- Dynamic color cycling from a named accents array

---

### 7. 🖼️ Canvas API Demo (`nigga.html`)

A comprehensive **Canvas API cheat-sheet** page demonstrating all major drawing features in one place on a bright green canvas.

**What it demonstrates:**

| Feature | Details |
|---|---|
| Filled Rectangle | Red `fillRect` |
| Stroked Rectangle | Blue `strokeRect` with `clearRect` cutout inside it |
| Lines & Paths | `beginPath`, `moveTo`, `lineTo`, `stroke` forming an L-shape |
| Circle / Arc | Green filled arc (full circle) |
| Text | `fillText` ("Canvas API Demo") and `strokeText` ("Stroke Text") |
| Linear Gradient | Purple-to-pink gradient applied to a rectangle |
| Shadow Effects | `shadowColor`, `shadowBlur`, `shadowOffsetX/Y` on an orange box |
| Image Drawing | JavaScript logo loaded from Wikimedia via `drawImage` |
| Transform (Rotate) | `save()`, `translate()`, `rotate(Math.PI/4)`, `restore()` rotating a cyan square |
| Animation | A blue ball bouncing horizontally in a loop via `requestAnimationFrame` and `clearRect` |

**Key concepts used:**
- All core `ctx` drawing methods consolidated in one file — great for reference
- `ctx.save()` / `ctx.restore()` for transform isolation
- Async image loading with `img.onload`
- Live animation loop with `requestAnimationFrame`

---

### 8. 📦 Canvas Repeating Motion (`nigga2.html`)

A minimal **Canvas animation starter** — ideal for understanding the basic animation loop pattern from scratch.

**What it does:**
- Draws a red 50×50 square that moves horizontally across a 300×150 canvas
- When the square exits the right edge, it wraps back to the left and repeats infinitely
- Displays a static "Canvas" text label at the top of the canvas

**Key concepts used:**
- `requestAnimationFrame` for the render loop
- `ctx.clearRect` to erase the previous frame before redrawing
- Incrementing `x` variable with boundary reset: `if (x > canvas.width) x = -50`
- `ctx.fillRect` and `ctx.fillText` for drawing

> Perfect as a **first Canvas animation exercise** — simple, clean, and easy to build on top of.

---

### 9. 🌿 The Green Corner Nursery (`GreenCorner/index.html`)

A premium, visually refined **plant nursery landing page** with an earthy, luxury aesthetic. All styles are self-contained in a `<style>` block.

**What it does:**
- **Transparent absolute navbar** layered over the hero with logo ("THE GREEN CORNER") and nav links (Home, Plants, Care Tips, Contact)
- **Full-viewport hero** with an Unsplash garden image, dark green overlay, script heading ("Cultivating"), bold serif headline ("GREENERY"), subtext ("THAT BREATHES LIFE"), and a gold CTA button ("Explore Collection →")
- **About section** with a side-by-side layout: a plant image inside a decorative gold offset-border frame (CSS `::before` pseudo-element), paired with a text block about the nursery's story and a ghost button
- **Shop by Category** grid with three hover-zoom image cards from Unsplash: Indoor Plants, Succulents, Exotic Flowers — each with a semi-transparent dark label at the bottom
- **Contact section** on a deep green background with a two-column grid: a friendly tagline and a contact form (name, email, textarea, send button)

**Key HTML/CSS concepts used:**
- Google Fonts: `Montserrat` (body), `Great Vibes` (script), `Playfair Display` (headings)
- CSS custom properties: `--primary-green`, `--accent-gold`, `--cream`, `--overlay`
- `position: absolute` for the transparent navbar layered above the hero
- CSS `::before` pseudo-element for the decorative gold border offset behind the about image
- CSS Grid with `auto-fit` and `minmax(250px, 1fr)` for the responsive category cards
- `object-fit: cover` + `transition: transform` for smooth card hover zoom
- `clamp()` for a fluid hero heading font size across screen sizes
- Linear gradient overlays for the hero and card labels

---

### 10. 🗒️ Notion Landing Page Clone (`notion.html`)

A **pixel-accurate recreation of the Notion homepage**, drawn entirely with the HTML5 **Canvas API** — no HTML layout, no CSS styling, just pure `ctx` drawing calls.

**What it does:**
- Renders a full-width responsive canvas that redraws itself on window resize
- **Navigation bar** with the "N" logo box, "Notion" wordmark, nav links (Product, Teams, Individuals, Pricing), "Log in", "Request a demo", and a "Get Notion free" black CTA button — all drawn with `ctx.fillText` and custom `roundRect`
- **Hero section** on the left: large bold serif text ("Build / something / beautiful."), a subtitle, a blue "Get Started" button, and a ghost "Learn More" button
- **Illustrated characters** on the right half of the canvas — hand-drawn with Canvas paths:
  - A person in a dark outfit with sparkle decorations
  - A person in a green blouse and skirt with hair bun, arm pointing right
- **Floating UI elements** scattered around the characters: a small document card with grey lines, a checklist card with green checkmarks, a yellow pencil, sparkle stars, and a floating image card
- **Company logos** at the bottom center: airbnb, NETFLIX, NIKE, Figma — rendered as styled text with a "Trusted by teams at" label

**Key JavaScript/Canvas concepts used:**
- Fully modular draw functions: `drawNav()`, `drawHeroText()`, `drawFloatingElements()`, `drawCharacters()`, `drawLogos()`
- Custom `roundRect()` helper reused for all rounded shapes (buttons, cards, logo box)
- `ctx.save()` / `ctx.restore()` to isolate transforms for each floating element and character
- `ctx.rotate()` for tilted floating cards and pencil
- `ctx.arc()`, `ctx.ellipse()`, `ctx.quadraticCurveTo()` for character limbs and heads
- `ctx.measureText()` for dynamically positioning nav items and buttons based on text width
- `ctx.shadowColor` / `ctx.shadowBlur` for card drop shadows
- `window.addEventListener('resize', resizeCanvas)` for a fully responsive canvas
- CSS `@media` queries to adjust canvas dimensions at `992px`, `768px`, and `480px` breakpoints

---

### 11. 📋 Student Evaluation Form (`index4.html` + `style3.css`)

A **printable offline scoring sheet** for evaluating students — designed to look like a clean, professional paper form.

**What it does:**
- Displays a centered white "sheet" on a grey background with a black border, mimicking a printed document
- **Info grid** at the top with four labeled fields: Student Name, Roll No, Evaluator Name, and Date (2-column CSS Grid layout)
- **Scoring table** with seven columns: Criteria plus six rating levels — Excellent (5), Good (4), Average (3), Poor (2), Very Poor (1), and "Just Give Up (-5)" — with radio buttons for three criteria rows: Knowledge, Presentation, and Confidence
- **Total Score** input field below the table
- **Remarks** textarea for written feedback
- **Signature section** at the bottom with two signature lines for Evaluator and Authority
- `@media print` rule strips background and border so the page prints cleanly as a document

**Key HTML/CSS concepts used:**
- CSS Grid (`repeat(2, 1fr)`) for the info section
- `border-collapse: collapse` HTML table for the scoring grid
- `input[type="radio"]` inside table cells for the rating selection
- `@media print` for clean print output — removes background color and border
- Flexbox for the two-column signature row
- `resize: none` on the remarks textarea

---

### 12. 👤 Personal Portfolio (`portfolio.html`)

A simple **personal portfolio page** by Aareen Dakway, showcasing background, education, skills, and online presence.

**What it does:**
- Displays a heading ("My Portfolio page") and the author's name in large text
- Shows a **circular profile photo** pulled from LinkedIn, centered and bordered
- Tagline: *"Aspiring Software Developer | Game Planning & Programming Enthusiast"*
- **Academic Background** — bulleted list of education history
- **Education** section — B.Tech CSE at ITM Skills University (Batch 2025–2029)
- **Professional Focus** section — describes interest in game development, GameMaker, sprite animation, and a LinkedIn article on Ray Tracing
- **Activities** section — mentions participation in the GDSC Hackathon at NMIMS
- **Online Presence** — links to LinkedIn, GitHub (`Aareen80085`), and Instagram (`@aareen_dakway`)
- An embedded **`<video>` element** for a WhatsApp video clip (local file)

**Key HTML/CSS concepts used:**
- Inline `<style>` block with `id` and `class` selectors
- Circular image via `border-radius: 50%` on an `<img>` tag
- `display: block; margin: auto` for centering the image
- External LinkedIn photo URL used directly as an `<img src>`
- `background-color` on `body` for a warm beige tone
- `<video>` element with `controls` and a `<source>` tag

> **Note:** The video source (`WhatsApp Video 2026-01-19...mp4`) is a local file and will not play unless the file is present in the same directory. The external `style.css` link in the `<head>` also refers to a separate file not bundled here.

---

## 🛠️ How to Run

No build tools or installations required. Simply open any `.html` file directly in your browser:

```bash
# Clone the repository
git clone https://github.com/Aareen80085/HTML-and-CSS.git
cd HTML-and-CSS

# Open any file in your browser
open coffeshop.html
open notion.html
open index4.html
open portfolio.html
```

Or just drag and drop any `.html` file into your browser window.

---

## 📌 Technologies Used

- **HTML5** — semantic elements, tables, forms, Canvas, SVG, video
- **CSS3** — Flexbox, Grid, animations, transitions, custom properties, filters, transforms, pseudo-elements, `@media print`
- **Vanilla JavaScript** — Canvas API, event listeners, animation loops, particle systems, modular draw functions
- **Google Fonts & Font Awesome** — used in Photography and Green Corner projects
- **Unsplash** — used for images in the Green Corner project

---

## 📊 Project Complexity Overview

| Project | HTML | CSS | JavaScript | Level |
|---|---|---|---|---|
| Coffee Shop | ✅ | ✅ | ❌ | Beginner |
| BookNest | ✅ | ❌ | ❌ | Beginner |
| SVG Playground | ✅ SVG | ❌ | ❌ | Beginner |
| Personal Portfolio | ✅ | ✅ | ❌ | Beginner |
| Student Evaluation Form | ✅ | ✅ | ❌ | Beginner |
| WaveRiders Surf Academy | ✅ | ✅✅ | ❌ | Intermediate |
| Photography Portfolio | ✅✅ | ✅✅ | ❌ | Intermediate+ |
| Neo-Brutalist Canvas | ✅ | ✅ | ✅✅ | Intermediate |
| Canvas API Demo | ✅ | ✅ | ✅✅ | Intermediate |
| Canvas Repeating Motion | ✅ | ✅ | ✅ | Beginner |
| The Green Corner Nursery | ✅✅ | ✅✅ | ❌ | Intermediate |
| Notion Landing Page Clone | ✅ | ✅ | ✅✅✅ | Advanced |

---

## 👩‍💻 Author

**Aareen Dakway** — B.Tech CSE student at ITM Skills University, Mumbai. Aspiring Software Developer passionate about game development, graphics programming, and building with HTML, CSS & JavaScript.

- 🔗 [LinkedIn](https://www.linkedin.com/in/aareen-dakway-a0bba9324/)
- 🐙 [GitHub](https://github.com/Aareen80085)
- 📸 Instagram: @aareen_dakway
