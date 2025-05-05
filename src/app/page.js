import Head from "next/head";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NewsSection from "./components/NewsSection";
import CategoriesSection from "./components/CategoriesSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LensaNews - AI-Powered Local News</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    fontFamily: {
                      sans: ['Poppins', 'sans-serif'],
                    },
                    colors: {
                      primary: '#1F2937', /* Dark Gray */
                      accent: '#2563EB', /* Blue */
                    },
                  },
                },
              };
            `,
          }}
        />
        <style>{`
        .glass-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .news-ticker {
            animation: ticker 30s linear infinite;
        }
        @keyframes ticker {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }
        .category-badge {
            transition: all 0.3s ease;
        }
        .category-badge:hover {
            transform: translateY(-2px);
        }
        .news-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        `}</style>
      </Head>
      <div lang="en" className="scroll-smooth bg-gray-50 font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <HeroSection />
        <NewsSection />
        <CategoriesSection />
        <FeaturesSection />
        <TestimonialsSection />
      </div>
    </>
  );
}