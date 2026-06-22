# KiteBanners v4

A clean, conversion-optimized one-page website for KiteBanners built with HTML, Tailwind CSS, and vanilla JavaScript.

## File Structure

```
kite-banners-v4/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── (your images and logo)
└── README.md
```

## Asset Mapping

Place your provided assets in the `assets/` folder using these filenames so the site picks them up automatically:

| Asset Type | Expected Filename | Used In |
|------------|-------------------|---------|
| Favicon | `favicon.ico` | Browser tab |
| Logo | `logo.png` | Nav, footer (white/light version recommended) |
| OAAA logo | `oaaa-logo.png` | Trust bar |
| Hero video poster | `hero-video-poster.jpg` | Hero video fallback |
| Showreel poster | `showreel-poster.jpg` | Showreel modal fallback |
| Beach / kite photo 1 | `kite-beach-1.jpg` | Opportunity section |
| Gallery image 1 | `gallery-1.jpg` | Gallery grid |
| Gallery image 2 | `gallery-2.jpg` | Gallery grid (featured) |
| Gallery image 3 | `gallery-3.jpg` | Gallery grid |
| Gallery image 4 | `gallery-4.jpg` | Gallery grid |
| Gallery image 5 | `gallery-5.jpg` | Gallery grid |
| Gallery image 6 | `gallery-6.jpg` | Gallery grid |

If your files have different names, either rename them to match or update the `src` attributes in `index.html`.

## External Media

- **Hero background video:** `https://kitebanners.com/wp-content/uploads/2026/05/Kite-WEB-Smaller.mov`
- **Showreel video:** `https://kitebanners.com/wp-content/uploads/2026/06/Kitebanners-Video.mp4`

## Features

- Responsive one-page layout
- Sticky navigation with scroll state
- Mobile hamburger menu
- Scroll-triggered reveal animations
- FAQ accordion
- Interactive showreel modal
- Gallery lightbox
- Frontend-only contact form mockup
- No API keys or sensitive credentials in the frontend

## Local Preview

Open `index.html` in any modern browser, or serve the folder with a local server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Notes

- The contact form is currently a frontend mockup. It logs submissions to the browser console and shows a success message. Connect it to a backend or form service (e.g., Formspree, HubSpot, or a custom endpoint) when ready.
- The hero video is a `.mov` file. Most modern browsers support it if it uses H.264/H.265 encoding. A poster image is provided as fallback.
