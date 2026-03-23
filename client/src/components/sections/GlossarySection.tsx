import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Term {
  id: string;
  title: string;
  simpleExplanation: string;
  detailedExplanation: string;
  analogy: string;
  icon: string;
  type: "local" | "remote" | "neutral";
}

const terms: Term[] = [
  {
    id: "repository",
    title: "リポジトリ（Repository）",
    simpleExplanation: "ファイルと変更履歴を保管する場所",
    detailedExplanation:
      "リポジトリは、プロジェクトのすべてのファイルと、それらの変更履歴を保管する『貯蔵庫』です。ローカルリポジトリ（あなたのPC）とリモートリポジトリ（GitHub上）の2種類があります。",
    analogy: "ゲーム機のセーブデータ保管庫",
    icon: "📁",
    type: "neutral",
  },
  {
    id: "local-remote",
    title: "ローカル vs リモート",
    simpleExplanation: "あなたのPC vs GitHub上",
    detailedExplanation:
      "ローカルリポジトリはあなたのPC内にあり、リモートリポジトリはGitHub上にあります。ローカルで作業して、完成したらリモートにアップロード（プッシュ）します。",
    analogy: "ゲーム機（ローカル）とクラウドセーブ（リモート）",
    icon: "🔄",
    type: "neutral",
  },
  {
    id: "commit",
    title: "コミット（Commit）",
    simpleExplanation: "変更内容を『保存』すること",
    detailedExplanation:
      "コミットは、ファイルの変更をローカルリポジトリに記録する操作です。変更内容とその説明（メッセージ）を一緒に保存します。コミットすることで、変更履歴が作成されます。",
    analogy: "ゲーム機でセーブボタンを押す",
    icon: "✅",
    type: "local",
  },
  {
    id: "push",
    title: "プッシュ（Push）",
    simpleExplanation: "ローカルの変更をGitHubに『アップロード』",
    detailedExplanation:
      "プッシュは、ローカルリポジトリのコミット（変更）をリモートリポジトリ（GitHub）に送信する操作です。これにより、チームメンバーがあなたの変更を見ることができます。",
    analogy: "セーブデータをクラウドにアップロード",
    icon: "⬆️",
    type: "remote",
  },
  {
    id: "pull",
    title: "プル（Pull）",
    simpleExplanation: "GitHubの最新版をローカルに『ダウンロード』",
    detailedExplanation:
      "プルは、リモートリポジトリ（GitHub）の最新の変更をローカルリポジトリ（あなたのPC）に取り込む操作です。チームメンバーの変更を自分のPCに反映させるときに使います。",
    analogy: "クラウドセーブを最新版でダウンロード",
    icon: "⬇️",
    type: "remote",
  },
  {
    id: "branch",
    title: "ブランチ（Branch）",
    simpleExplanation: "別の作業用フォルダ",
    detailedExplanation:
      "ブランチは、メインの作業から分岐した独立した作業環境です。新機能を試すときや、バグ修正をするときに、メインコードに影響を与えずに作業できます。",
    analogy: "ゲームの別セーブスロット",
    icon: "🌳",
    type: "neutral",
  },
  {
    id: "merge",
    title: "マージ（Merge）",
    simpleExplanation: "ブランチの変更を本流に『統合』",
    detailedExplanation:
      "マージは、別のブランチで行った変更をメインのブランチに統合する操作です。新機能が完成したら、マージしてメインコードに組み込みます。",
    analogy: "別セーブスロットの内容をメインセーブに統合",
    icon: "🔀",
    type: "neutral",
  },
];

export default function GlossarySection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getTypeColor = (type: Term["type"]) => {
    switch (type) {
      case "local":
        return "border-l-4 border-blue-700 bg-blue-50";
      case "remote":
        return "border-l-4 border-green-700 bg-green-50";
      default:
        return "border-l-4 border-gray-400 bg-gray-50";
    }
  };

  return (
    <div className="container">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">基本用語を学ぶ</h2>
        <p className="text-lg text-gray-600">
          GitHubの重要な用語を図解付きで解説します。各用語をクリックして詳細を確認してください。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {terms.map((term) => (
          <div
            key={term.id}
            className={`rounded-lg p-6 cursor-pointer transition-all duration-300 ${getTypeColor(
              term.type
            )} hover:shadow-lg`}
            onClick={() => toggleExpand(term.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{term.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {term.title}
                  </h3>
                </div>
                <p className="text-gray-700 font-semibold mb-2">
                  {term.simpleExplanation}
                </p>
                <p className="text-sm text-gray-600 italic">
                  例：{term.analogy}
                </p>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-gray-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                  expandedId === term.id ? "rotate-180" : ""
                }`}
              />
            </div>

            {expandedId === term.id && (
              <div className="mt-4 pt-4 border-t border-gray-300">
                <p className="text-gray-700 leading-relaxed">
                  {term.detailedExplanation}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="font-bold text-gray-900 mb-4">凡例</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-blue-700 rounded"></div>
            <span className="text-gray-700">
              <strong>青</strong>：ローカル操作（あなたのPC）
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-green-700 rounded"></div>
            <span className="text-gray-700">
              <strong>緑</strong>：リモート操作（GitHub）
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-gray-400 rounded"></div>
            <span className="text-gray-700">
              <strong>グレー</strong>：両方に関連
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
