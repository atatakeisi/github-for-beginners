import { useState } from "react";
import { Code, Copy, Check } from "lucide-react";

interface GuideStep {
  title: string;
  description: string;
  commands?: string[];
  tips?: string[];
}

const guideSteps: GuideStep[] = [
  {
    title: "Step 1: GitHubアカウント作成",
    description:
      "まずはGitHubのアカウントを作成しましょう。これがすべての始まりです。",
    tips: [
      "https://github.com にアクセス",
      "「Sign up」ボタンをクリック",
      "メールアドレスを入力",
      "パスワードを設定",
      "ユーザー名を決定",
      "メール認証を完了",
    ],
  },
  {
    title: "Step 2: リポジトリを作成",
    description:
      "GitHubにログイン後、新しいリポジトリを作成します。プロジェクトの入れ物を用意するイメージです。",
    tips: [
      "右上の『+』メニューをクリック",
      "『New repository』を選択",
      "リポジトリ名を入力（例：my-first-project）",
      "説明を追加（オプション）",
      "『Public』または『Private』を選択",
      "『Create repository』をクリック",
    ],
  },
  {
    title: "Step 3: リポジトリをClone",
    description:
      "GitHubのリポジトリをあなたのPCにコピーします。これで、PCで作業できるようになります。",
    commands: ["git clone https://github.com/[ユーザー名]/[リポジトリ名].git"],
    tips: [
      "リポジトリページの『Code』ボタンをクリック",
      "HTTPSのURLをコピー",
      "PCのターミナル（コマンドプロンプト）を開く",
      "作業フォルダに移動",
      "上記のコマンドを実行",
      "フォルダが作成されたら成功",
    ],
  },
  {
    title: "Step 4: ファイルを編集",
    description:
      "作成されたフォルダ内でファイルを作成・編集します。通常のファイル操作と同じです。",
    tips: [
      "エディタ（VS Code など）でフォルダを開く",
      "ファイルを作成または編集",
      "内容を保存",
      "複数のファイルを編集可能",
      "PCがインターネット接続していなくても作業可能",
    ],
  },
  {
    title: "Step 5: Add（ステージング）",
    description:
      "変更したファイルをコミットの準備をします。どのファイルを保存するかを指定する操作です。",
    commands: [
      "git add .",
      "git add [ファイル名]",
    ],
    tips: [
      "git add . で全ファイルを対象にするのが簡単",
      "特定のファイルだけを対象にすることも可能",
      "この段階ではまだ保存されていません",
      "次のCommitで初めて保存されます",
    ],
  },
  {
    title: "Step 6: Commit（記録）",
    description:
      "変更内容をローカルリポジトリに保存します。変更履歴が作成されます。",
    commands: [
      "git commit -m \"最初のコミット\"",
      "git commit -m \"機能を追加\"",
      "git commit -m \"バグを修正\"",
    ],
    tips: [
      "メッセージは分かりやすく、何を変更したかを説明する",
      "複数のコミットを作成することで、変更履歴が明確になる",
      "コミットはローカルのみで、まだGitHubには反映されていません",
      "メッセージは日本語でも英語でも大丈夫",
    ],
  },
  {
    title: "Step 7: Push（アップロード）",
    description:
      "ローカルの変更をGitHubにアップロードします。これで、チームメンバーがあなたの変更を見ることができます。",
    commands: ["git push"],
    tips: [
      "このコマンドでGitHubに変更が反映される",
      "GitHubのリポジトリページをリロードすると、変更が表示される",
      "チームメンバーもこの変更を見ることができる",
      "インターネット接続が必要です",
    ],
  },
];

export default function StepsSection() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className="container">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">実践的な操作ガイド</h2>
        <p className="text-lg text-gray-600">
          初めてGitHubを使う方向けの、ステップバイステップガイドです。各ステップをクリックして詳細を確認してください。
        </p>
      </div>

      <div className="space-y-4">
        {guideSteps.map((step, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <button
              onClick={() =>
                setExpandedStep(expandedStep === index ? null : index)
              }
              className="w-full p-6 bg-white hover:bg-gray-50 transition-colors text-left flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
              <div
                className={`w-6 h-6 text-gray-600 transition-transform ${
                  expandedStep === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </div>
            </button>

            {expandedStep === index && (
              <div className="bg-gray-50 border-t border-gray-300 p-6 space-y-6">
                {step.commands && (
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      コマンド例
                    </h4>
                    <div className="space-y-2">
                      {step.commands.map((command, i) => (
                        <div
                          key={i}
                          className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm flex items-center justify-between group"
                        >
                          <span>{command}</span>
                          <button
                            onClick={() => copyToClipboard(command)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            title="コピー"
                          >
                            {copiedCommand === command ? (
                              <Check className="w-5 h-5 text-green-400" />
                            ) : (
                              <Copy className="w-5 h-5 text-gray-400" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {step.tips && (
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">💡 ポイント</h4>
                    <ul className="space-y-2">
                      {step.tips.map((tip, i) => (
                        <li key={i} className="flex gap-3 text-gray-700">
                          <span className="text-blue-700 font-bold">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Success Message */}
      <div className="mt-12 p-8 bg-green-50 border border-green-300 rounded-lg">
        <h3 className="text-2xl font-bold text-green-900 mb-4">完了！</h3>
        <p className="text-green-800 mb-4">
          これで、GitHubの基本的な使い方が理解できました。あなたは今、GitHubユーザーです！
        </p>
        <p className="text-green-700 text-sm">
          次のステップ：チームメンバーとのコラボレーション、ブランチの使い方、プルリクエストなど、より高度な機能を学ぶことができます。
        </p>
      </div>
    </div>
  );
}
