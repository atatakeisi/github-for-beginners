import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "basic" | "workflow" | "collaboration";
}

const faqItems: FAQItem[] = [
  {
    category: "basic",
    question: "リポジトリって何ですか？",
    answer:
      "リポジトリは、プロジェクトのすべてのファイルと変更履歴を保管する貯蔵庫です。ゲーム機のセーブデータ保管庫に例えると分かりやすいです。GitHubにはリモートリポジトリ、あなたのPCにはローカルリポジトリがあります。",
  },
  {
    category: "basic",
    question: "GitとGitHubの違いは何ですか？",
    answer:
      "Gitはバージョン管理システムで、あなたのPC上で動作します。GitHubはGitを使ったクラウドサービスで、リポジトリをオンラインで保管・共有できます。つまり、GitはツールでGitHubはそのツールを使ったサービスです。",
  },
  {
    category: "workflow",
    question: "コミットとプッシュの違いは何ですか？",
    answer:
      "コミットは、変更をローカルリポジトリ（あなたのPC）に記録する操作です。プッシュは、ローカルのコミットをリモートリポジトリ（GitHub）にアップロードする操作です。コミットしてもプッシュしなければ、チームメンバーはあなたの変更を見ることができません。",
  },
  {
    category: "workflow",
    question: "ブランチって何に使うのですか？",
    answer:
      "ブランチは、メインの作業から分岐した独立した作業環境です。新機能を試すときや、バグ修正をするときに、メインコードに影響を与えずに作業できます。ゲーム機の別セーブスロットに例えると分かりやすいです。",
  },
  {
    category: "workflow",
    question: "プルとフェッチの違いは何ですか？",
    answer:
      "フェッチは、リモートリポジトリの情報をダウンロードするだけです。プルは、フェッチ後に自動的にマージ（統合）します。つまり、プルはフェッチ+マージの組み合わせです。初心者はプルを使うのが簡単です。",
  },
  {
    category: "collaboration",
    question: "複数人で同じファイルを編集したらどうなりますか？",
    answer:
      "GitHubは自動的にマージしようとします。同じ行を編集した場合はコンフリクトが発生し、手動で解決する必要があります。ブランチを使って作業を分けることで、コンフリクトを避けることができます。",
  },
  {
    category: "collaboration",
    question: "プルリクエストって何ですか？",
    answer:
      "プルリクエストは、このブランチの変更をメインに統合してくださいという提案です。チームメンバーがコードをレビューしてから、マージするかどうかを決めることができます。品質管理に役立ちます。",
  },
  {
    category: "basic",
    question: "ローカルリポジトリを削除したらどうなりますか？",
    answer:
      "ローカルリポジトリを削除しても、GitHubのリモートリポジトリには影響ありません。いつでも再度Cloneして、最新のコードを取得できます。ただし、プッシュしていないコミットは失われます。",
  },
  {
    category: "basic",
    question: "GitHubのアカウントを作成するのに費用がかかりますか？",
    answer:
      "いいえ、基本的な機能は無料です。無料アカウントでも、パブリックリポジトリ（公開）を無制限に作成できます。プライベートリポジトリ（非公開）も無料で作成できます。高度な機能が必要な場合は、有料プランもあります。",
  },
  {
    category: "workflow",
    question: "変更を間違ってコミットしてしまいました。どうすればいいですか？",
    answer:
      "git revert コマンドで、特定のコミットを取り消すことができます。または、git reset コマンドでコミット前の状態に戻すこともできます。ただし、既にプッシュしている場合は、チームメンバーに影響を与える可能性があるため、注意が必要です。",
  },
];

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "basic" | "workflow" | "collaboration"
  >("all");

  const filteredItems =
    selectedCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === selectedCategory);

  const getCategoryLabel = (
    category: "basic" | "workflow" | "collaboration"
  ) => {
    switch (category) {
      case "basic":
        return "基本概念";
      case "workflow":
        return "ワークフロー";
      case "collaboration":
        return "チーム開発";
    }
  };

  return (
    <div className="container">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          よくある質問（FAQ）
        </h2>
        <p className="text-lg text-gray-600">
          初心者の方からよくいただく質問と、その回答をまとめました。
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-3">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-full font-semibold transition-colors ${
            selectedCategory === "all"
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          すべて
        </button>
        <button
          onClick={() => setSelectedCategory("basic")}
          className={`px-4 py-2 rounded-full font-semibold transition-colors ${
            selectedCategory === "basic"
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          基本概念
        </button>
        <button
          onClick={() => setSelectedCategory("workflow")}
          className={`px-4 py-2 rounded-full font-semibold transition-colors ${
            selectedCategory === "workflow"
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          ワークフロー
        </button>
        <button
          onClick={() => setSelectedCategory("collaboration")}
          className={`px-4 py-2 rounded-full font-semibold transition-colors ${
            selectedCategory === "collaboration"
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          チーム開発
        </button>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <button
              onClick={() =>
                setExpandedId(expandedId === index ? null : index)
              }
              className="w-full p-6 bg-white hover:bg-gray-50 transition-colors text-left flex items-start justify-between gap-4"
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">
                  {item.question}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  カテゴリ：{getCategoryLabel(item.category)}
                </p>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-gray-600 transition-transform flex-shrink-0 ${
                  expandedId === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {expandedId === index && (
              <div className="bg-gray-50 border-t border-gray-300 p-6">
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="mt-12 p-8 bg-blue-50 border border-blue-300 rounded-lg">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">
          さらに詳しく学びたい方へ
        </h3>
        <p className="text-blue-800 mb-4">
          このサイトで学んだ基本を理解した後は、以下のリソースで、より高度な機能を学ぶことができます。
        </p>
        <ul className="space-y-2 text-blue-700">
          <li>
            <a
              href="https://docs.github.com/ja"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-semibold"
            >
              GitHub 公式ドキュメント（日本語）
            </a>
          </li>
          <li>
            <a
              href="https://git-scm.com/book/ja/v2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-semibold"
            >
              Pro Git 日本語版
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-semibold"
            >
              GitHub 公式サイト
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
