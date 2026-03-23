import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/sections/HeroSection";
import GlossarySection from "@/components/sections/GlossarySection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import StepsSection from "@/components/sections/StepsSection";
import FAQSection from "@/components/sections/FAQSection";
import Navigation from "@/components/Navigation";

/**
 * Design Philosophy: Infographic Education
 * - Clean, professional white background with blue/green color coding
 * - Interactive glossary cards with hover effects
 * - Step-by-step visual flow diagrams
 * - Accessible, educational design for complete beginners
 */
export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={scrollToSection} />

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16">
        <HeroSection onGetStarted={() => scrollToSection("glossary")} />
      </section>

      {/* Glossary Section */}
      <section id="glossary" className="py-20 bg-gray-50">
        <GlossarySection />
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 bg-white">
        <WorkflowSection />
      </section>

      {/* Steps Section */}
      <section id="steps" className="py-20 bg-gray-50">
        <StepsSection />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <FAQSection />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">GitHub超入門</h3>
              <p className="text-gray-400 text-sm">
                初心者向けのGitHub解説サイトです。図解とテキストで、GitHubの仕組みを分かりやすく学べます。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">リンク</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("glossary")}
                    className="hover:text-white transition"
                  >
                    用語解説
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("workflow")}
                    className="hover:text-white transition"
                  >
                    ワークフロー
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("steps")}
                    className="hover:text-white transition"
                  >
                    操作ガイド
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">リソース</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    GitHub公式サイト
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    GitHub ドキュメント
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; 2024 GitHub超入門. All rights reserved. | Made with ❤️ for
              beginners
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
