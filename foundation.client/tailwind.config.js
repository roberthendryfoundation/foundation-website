

// tailwind.config.js
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                muted: "var(--muted)",
                'muted-foreground': "var(--muted-foreground)",
                primary: "var(--primary)",
                'primary-foreground': "var(--primary-foreground)",
                secondary: "var(--secondary)",
                'secondary-foreground': "var(--secondary-foreground)",
                accent: "var(--accent)",
                'accent-foreground': "var(--accent-foreground)",
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",
                destructive: "var(--destructive)",
                'destructive-foreground': "var(--destructive-foreground)",
                donate: "var(--donate)",
                'donate-foreground': "var(--donate-foreground)",
                success: "var(--success)",
                'success-foreground': "var(--success-foreground)",
            },
            borderRadius: {
                lg: "var(--radius)",
            },
        },
    },
    plugins: [],
};


