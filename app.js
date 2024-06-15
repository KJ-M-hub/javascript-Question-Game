//問題文
const quiz = [
    {
        question:'ゲームの市場、最も売れたゲーム機は次のうちどれ？',
        answers: [
            'スーパーファミコン',
            'プレイステーション２',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS'
    },
    {
        question:'糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: [
            'MOTHER2',
            'スーパーマリオブラザーズ３',
            'スーパードンキーコング',
            '星のカービィ'
        ],
        correct: 'MOTHER2'
    },
    {
        question:'ファイナルファンタジーⅣの主人公の名前は？',
        answers: [
            'フリオニール',
            'クラウド',
            'ティーダ',
            'セシル'
        ],
        correct: 'セシル'
    }
];
const quizLength = quiz.length
let quizIndex = 0;





//buttonの定義
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};
setupQuiz();

//関数clickHandlerで、「マウスで選んだ箇所のテキストがcorrectと同じなら正解、違うなら不正解をalertする」を定義する。
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
    quizIndex++;

    if (quizIndex < quizLength) {
        //問題数があればこちらを実行
        setupQuiz();
    } else {
        //問題数がなければこちらを実行
        window.alert('終了！');
    }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}