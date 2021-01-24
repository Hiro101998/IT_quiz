const quiz = [
  {
    question:'HTMLを使用して作成できるものはどれか。',
    answers:['Webブラウザ',
    'Webページ',
    '音声ファイル',
    '動画ファイル'],
    correct:'Webページ'
  },
    {
      question:'インターネットのドメイン名とIPアドレスを対応付ける仕組みはどれか。',
      answers:['DNS',
      'FPS',
      'SSD',
      'DOM'],
      correct:'DNS'
    },
    {
    question:'文書の構造などに関する指定を記述する，"<" と ">"に囲まれるタグを，利用者が目的に応じて定義して使うことができる言語はどれか。',
    answers:['COBOL',
    'HTML',
    'Java',
    'XML'],
    correct:'XML'
  },
  {
  question:'Webサイトによっては，ブラウザで閲覧したときの情報を，ブラウザを介して閲覧者のPCに保存することがある。以後このWebサイトにアクセスした際は保存された情報を使い，閲覧の利便性を高めることができる。このような目的で利用される仕組みはどれか。',
  answers:['Cookie',
  'SQL',
  'URL',
  'XML'],
  correct:'Cookie'
},
{
question:'クロスサイトスクリプティングなどの攻撃でCookieが漏えいすることによって受ける被害の例はどれか。',
answers:['PCがウイルスに感染する。',
'PC内のファイルを外部に送信される。',
'Webサービスのアカウントを乗っ取られる。',
'無線LANを介してネットワークに侵入される。'],
correct:'Webサービスのアカウントを乗っ取られる。'
},
  {
question:'コンピュータに対する命令を，プログラム言語を用いて記述したものを何と呼ぶか。',
answers:['PINコード',
'ソースコード',
'バイナリコード',
'文字コード'],
correct:'ソースコード'
},
{
question:'ネットワークを介してコンピュータ間で通信を行うとき，通信路を流れるデータのエラー検出，再送制御，通信経路の選択などについて，双方が守るべき約束事を何というか。',
answers:['アドレス',
'インタフェース',
'ドメイン',
'プロトコル'],
correct:'プロトコル'
},
{
question:'プロトコルに関する記述のうち，適切なものはどれか。',
answers:['HTMLは，Webデータを送受信するためのプロトコルである。',
'HTTPは，ネットワーク監視のためのプロトコルである。',
'POPは，離れた場所にあるコンピュータを遠隔操作するためのプロトコルである。',
'SMTPは，電子メールを送信するためのプロトコルである。'],
correct:'SMTPは，電子メールを送信するためのプロトコルである。'
},
{
question:'ネットワークに接続されているコンピュータ同士が，それぞれのもつデータなどの資源をお互いに対等な関係で利用する形態はどれか。',
answers:['クライアントサーバ',
'ストリーミング',
'ピアツーピア',
'メーリングリスト'],
correct:'ピアツーピア'
},
{
question:'Webページの来訪者数カウンタなどのように，訪問者が訪れるごとに新たなページを生成する機能を実現できる仕組みはどれか。',
answers:['CGI',
'cookie',
'HTML',
'SQL'],
correct:'CGI'
},

  ];


const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength =$button.length;
//クイズの選択肢を定義
const setupQuiz = () =>{
  document.getElementById('js-question').textContent=quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
  }
}
setupQuiz();

const clickHandler =(e) =>{
  if(quiz[quizIndex].correct===e.target.textContent){
       window.alert('正解です!');
       score++
    }else{
           window.alert('不正解です…');
   }
   quizIndex++;

   if(quizIndex < quizLength){
     //問題文がまだあればこっちを実行
     setupQuiz();
   }else{
     //なければこっちを実行
     window.alert('終了です。あなたの正解数は全' + quizLength + '問中' + score + '問です。');
     window.location.href = 'index.html';
   }
  };

let handleIndex = 0
while(handleIndex<buttonLength){
  $button[handleIndex].addEventListener('click',(e) => {
   clickHandler(e);
  });
  handleIndex++;
  }


//ボタンをクリックしたら正誤判定
