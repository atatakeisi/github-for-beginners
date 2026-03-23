import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              GitHub超入門
            </h1>
            <p className="text-xl text-gray-600">
              図解でわかるGitHubの仕組み
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            GitHubは、プログラムの変更履歴を管理・共有するサービスです。複雑に見えるかもしれませんが、実は
            <span className="font-semibold text-blue-700">
              ゲーム機のセーブデータ
            </span>
            に例えると、とても分かりやすくなります。
          </p>

          <p className="text-gray-600">
            このサイトでは、難しい用語を図解で説明し、実際の操作フローを段階的に学べます。初心者の方でも、このサイトを読めば、GitHubの基本が理解できるようになります。
          </p>

          <div className="flex gap-4 pt-4">
            <Button
              onClick={onGetStarted}
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white"
            >
              基本用語から学ぶ
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="flex items-center justify-center">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663460905191/hVkjNkDQLUV7ZauvXFbZtC/github-hero-concept-4sEd5N2soux3kPydtCqgai.webp"
            alt="GitHub workflow visualization"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
