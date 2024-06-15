//問題文
const question = 'ゲーム市場、最も売れたゲーム機は次の内どれ？'
//選択肢
const answers = [
    'スーパーファミコン',
    'プレイステーション２',
    'ニンテンドースイッチ',
    'ニンテンドーDS'
];
//正解
const correct = 'ニンテンドーDS';
//buttonの定義
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = question
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

//関数clickHandlerで、「マウスで選んだ箇所のテキストがcorrectと同じなら正解、違うなら不正解をalertする」を定義する。
const clickHandler = (e) => {
    if(correct === e.target.textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}