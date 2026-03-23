import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  location: "GitHub" | "Local";
  action: string;
  details: string[];
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: "リポジトリ作成",
    description: "GitHub上に新しいプロジェクトを作成",
    location: "GitHub",
    action: "Create Repository",
    details: [
      "GitHubにログイン",
      "「New Repository」ボタンをクリック",
      "リポジトリ名を入力",
      "「Create repository」をクリック",
    ],
  },
  {
    id: 2,
    title: "Clone（複製）",
    description: "GitHubのリポジトリをあなたのPCにコピー",
    location: "Local",
    action: "git clone",
    details: [
      "リポジトリのURLをコピー",
      "PCのターミナルを開く",
      "git clone [URL] を実行",
      "PCにフォルダが作成される",
    ],
  },
  {
    id: 3,
    title: "ファイル編集",
    description: "あなたのPC内でファイルを作成・編集",
    location: "Local",
    action: "Edit Files",
    details: [
      "エディタでファイルを作成",
      "コードを書く",
      "ファイルを保存",
      "複数のファイルを編集可能",
    ],
  },
  {
    id: 4,
    title: "Commit（記録）",
    description: "変更内容をローカルリポジトリに記録",
    location: "Local",
    action: "git commit",
    details: [
      "git add . で変更を準備",
      'git commit -m \"メッセージ\" を実行',
      "変更履歴が作成される",
      "メッセージは分かりやすく",
    ],
  },
  {
    id: 5,
    title: "Push（アップロード）",
    description: "ローカルの変更をGitHubにアップロード",
    location: "GitHub",
    action: "git push",
    details: [
      "git push を実行",
      "GitHubに変更が反映される",
      "チームメンバーが変更を見ることができる",
      "変更履歴が保存される",
    ],
  },
];

export default function WorkflowSection() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <div className="container">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          GitHubの5ステップワークフロー
        </h2>
        <p className="text-lg text-gray-600">
          GitHubでファイルを管理する基本的な流れを、ステップバイステップで解説します。
        </p>
      </div>

      {/* Visual Flow Diagram */}
      <div className="mb-12 p-8 bg-white rounded-lg border border-gray-200">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663460905191/hVkjNkDQLUV7ZauvXFbZtC/github-workflow-diagram-7CseefKyMVJ6n5Bwmyw4ar.webp"
          alt="GitHub 5-step workflow"
          className="w-full"
        />
      </div>

      {/* Detailed Steps */}
      <div className="space-y-4">
        {workflowSteps.map((step, index) => (
          <div key={step.id}>
            <button
              onClick={() =>
                setExpandedStep(expandedStep === step.id ? null : step.id)
              }
              className={`w-full p-6 rounded-lg border-2 transition-all duration-300 ${
                step.location === "GitHub"
                  ? "border-green-700 bg-green-50 hover:bg-green-100"
                  : "border-blue-700 bg-blue-50 hover:bg-blue-100"
              } ${expandedStep === step.id ? "shadow-lg" : ""}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1 text-left">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg ${
                      step.location === "GitHub"
                        ? "bg-green-700"
                        : "bg-blue-700"
                    }`}
                  >
                    {step.id}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-gray-600 font-semibold">
                      {step.location === "GitHub" ? "🌐 GitHub上" : "💻 あなたのPC"}
                    </p>
                    <p className="text-sm font-mono text-gray-700">
                      {step.action}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-6 h-6 transition-transform duration-300 ${
                      expandedStep === step.id ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </div>

              {expandedStep === step.id && (
                <div className="mt-6 pt-6 border-t-2 border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-3">詳細な手順：</h4>
                  <ol className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="font-bold text-gray-600 min-w-6">
                          {i + 1}.
                        </span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </button>

            {index < workflowSteps.length - 1 && (
              <div className="flex justify-center py-2">
                <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-300"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Key Concepts */}
      <div className="mt-12 p-8 bg-gray-100 rounded-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          重要なポイント
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-2">💻 ローカル操作</h4>
            <p className="text-gray-700 text-sm">
              Clone、Edit、CommitはあなたのPC内で行われます。インターネット接続がなくても作業できます。
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">🌐 リモート操作</h4>
            <p className="text-gray-700 text-sm">
              Create RepositoryとPushはGitHub上で行われます。チームメンバーとの共有に必要です。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
