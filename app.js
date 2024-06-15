const question = 'ゲーム市場、最も売れたゲーム機は次の内どれ？'
const answers = [
    'スーパーファミコン',
    'プレイステーション２',
    'ニンテンドースイッチ',
    'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';

console.log();
document.getElementById('js-question').textContent = question

const $button = document.getElementsByTagName('button')
// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
}

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    if(correct === $button){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
});