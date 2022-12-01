(function(){
    var factory = function (exports) {
        var lang = {
            name : "jp",
            description : "Open source online Markdown editor.",
            tocTitle    : "目次",
            toolbar     : {
                undo             : "元に戻す（Ctrl+Z）",
                redo             : "繰り返す（Ctrl+Y）",
                bold             : "太字",
                del              : "取消線",
                italic           : "斜体",
                quote            : "引用",
                ucwords          : "選択した各単語の先頭文字を大文字にする",
                uppercase        : "選択したテキストを大文字にする",
                lowercase        : "選択したテキストを小文字にする",
                h1               : "h1タグ",
                h2               : "h２タグ",
                h3               : "h３タグ",
                h4               : "h４タグ",
                h5               : "h５タグ",
                h6               : "h６タグ",
                "list-ul"        : "ULリスト",
                "list-ol"        : "OLリスト",
                hr               : "HRタグ",
                link             : "リンク",
                "reference-link" : "リファレンスリンク",
                image            : "画像",
                code             : "インライン・コード",
                "preformatted-text" : "整形済みテキスト / コードブロック（TABインデント）",
                "code-block"     : "コードブロック（多言語）",
                table            : "表の追加",
                datetime         : "日付",
                emoji            : "絵文字",
                "html-entities"  : "HTML エンティティ",
                pagebreak        : "改ページ",
                watch            : "ライブプレビュー",
                unwatch          : "ライブプレビュー停止",
                preview          : "HTML全画面プレビュー（ Shift + ESC　停止 ）",
                fullscreen       : "全画面（ ESC 停止）",
                clear            : "クリア",
                search           : "検索",
                help             : "ヘルプ",
                info             : "About" + exports.title
            },
            buttons : {
                enter  : "確認",
                cancel : "取消",
                close  : "閉じる"
            },
            dialog : {
                link   : {
                    title    : "リンク",
                    url      : "リンクのアドレス",
                    urlTitle : "タイトル",
                    urlEmpty : "エラー：リンクアドレスを入力してください。"
                },
                referenceLink : {
                    title    : "参照リンク",
                    name     : "参照リンク名",
                    url      : "アドレス",
                    urlId    : "ID",
                    urlTitle : "タイトル",
                    nameEmpty: "エラー: リンク名を入力してください。",
                    idEmpty  : "エラー: IDを入力してください。",
                    urlEmpty : "エラー: アドレスを入力してください。"
                },
                image  : {
                    title    : "画像",
                    url      : "ファイル",
                    link     : "画像のURL",
                    alt      : "画像説明",
                    uploadButton     : "アップロード",
                    imageURLEmpty    : "エラー:画像のURLを入力してください。",
                    uploadFileEmpty  : "エラー:ファイルをアップロードしてください。",
                    formatNotAllowed : "エラー: 使えないファイル形式です！使える画像ファイル形式は:"
                },
                preformattedText : {
                    title             : "整形済みテキスト・コード", 
                    emptyAlert        : "整形済みのテキストまたはコードを入力してください。",
                    placeholder       : "coding now...."
                },
                codeBlock : {
                    title             : "コードブロック",                 
                    selectLabel       : "プログラミング言語：",
                    selectDefaultText : "プログラミング言語を選ぶ…",
                    otherLanguage     : "その他",
                    unselectedLanguageAlert : "エラー: プログラミング言語を選択してください。",
                    codeEmptyAlert    : "エラー: 内容を入力してください",
                    placeholder:      : "coding now...."
                },
                htmlEntities : {
                    title : "HTML エンティティ"
                },
                help : {
                    title : "ヘルプ"
                }
            }
        };
        
        exports.defaults.lang = lang;
    };
    
	// CommonJS/Node.js
	if (typeof require === "function" && typeof exports === "object" && typeof module === "object")
    { 
        module.exports = factory;
    }
	else if (typeof define === "function")  // AMD/CMD/Sea.js
    {
		if (define.amd) { // for Require.js

			define(["editormd"], function(editormd) {
                factory(editormd);
            });

		} else { // for Sea.js
			define(function(require) {
                var editormd = require("../editormd");
                factory(editormd);
            });
		}
	} 
	else
	{
        factory(window.editormd);
	}
    
})();
