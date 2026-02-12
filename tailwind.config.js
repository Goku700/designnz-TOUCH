/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Light theme for Designrz Touch
        background: "#f5f5f7",
        "background-alt": "#ffffff",
        gold: "#f4c430",
        accent: "#4a90e2",
        border: "#e5e7eb",
        agero: {
          bg: "#f5f5f7",
          secondary: "#ffffff",
          card: "#ffffff",
          textPrimary: "#050816",
          textSecondary: "#4b5563",
          gold: "#f4c430",
          blue: "#4a90e2",
          border: "#e5e7eb"
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        mono: ["SF Mono", "Menlo", "monospace"],
        primary: ["Outfit", "system-ui", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        grotesk: ["Outfit", "sans-serif"],
        inter: ["'Plus Jakarta Sans'", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 35px rgba(255, 178, 0, 0.35)",
        "glow-blue": "0 0 35px rgba(37, 99, 235, 0.25)",
        "agero-glow": "0 25px 50px -12px rgba(244, 196, 48, 0.3)",
        "agero-card": "0 20px 40px -10px rgba(0,0,0,0.6)"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        stagger: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        staggerUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        stagger: "stagger 0.2s forwards",
        "stagger-up": "staggerUp 0.6s forwards"
      }
    }
  },
  plugins: []
};

