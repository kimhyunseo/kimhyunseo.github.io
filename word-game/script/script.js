/**
 * 낱말 입력하는 input에서 입력 값 읽어오기 : ketword 변수에 저장
 * 입력 버튼을 눌렀을 때와 input에서 enter 키를 눌렀을 때
 */

/**
 * keyword 값을 p태그에 표시
 */

const $input = document.querySelector("#word");
const $p = document.querySelector("p");
const $btn = document.querySelector("#btn-input");
const $list = document.querySelector("#wordlist");
const $startInput = document.querySelector("#start-word");
const $startBtn = document.querySelector("#start-btn");
const $startDiv = document.querySelector(".start");
const $viewDiv = document.querySelector(".view");

//p태그의 textContent를 변경
const changPcontent = (keyWord) => {
  $p.textContent = `제시어: ${keyWord}`;
};

const createLi = (keyword) => {
  const $li = document.createElement("li");
  const $p = document.createElement("p");
  const $img = document.createElement("img");
  $img.src = "images/isa.png";
  $p.textContent = keyword;
  $li.appendChild($img);
  $li.appendChild($p);

  if ($list.children.length >= 8) {
    $list.removeChild($list.firstElementChild);
  }
  $list.appendChild($li);
};

/**
 * 시작버튼을 누르면, 입력값이 있는지 확인하고
 * 있으면 ul#wordlist에 추가
 */
const handleStartBtn = () => {
  const startWord = $startInput.value;
  if (startWord !== null && startWord !== "") {
    // const $li = document.createElement("li")
    // $li.textContent = startWord;
    // $list.appendChild($li);
    createLi(startWord);
    $startDiv.style.display = "none";
    $viewDiv.style.display = "block";
    $input.focus();
    changPcontent(startWord);
  } else {
    alert("시작 단어를 입력해주세요");
    return;
  }
};
$startBtn.addEventListener("click", handleStartBtn);
$startInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleStartBtn();
  }
});

//맞는 낱말인지 체크하기
const handleWorldInput = () => {
  const keyword = $input.value.trim();
  if (keyword === "") {
    alert("단어를 입력해주세요");
    return;
  }
  //이전 입력 문자
  const last = $list.lastElementChild.textContent;
  const lastword = last[last.length - 1];
  const firstword = keyword[0];
  //올바르게 입력되었는지 쳌
  if (lastword === firstword) {
    //끝말잇기 성공
    changPcontent(keyword);
    //ul > li로 추가
    // const elem = document.createElement("li");
    // elem.textContent = keyword;
    // $list.appendChild(elem);
    createLi(keyword);
  } else {
    //끝말잇기 실패
    alert(`${lastword}(으)로 시작하는 단어로 다시 입력해주세요`);
  }
  $input.value = "";
  $input.focus();
};

$btn.addEventListener("click", handleWorldInput);

$input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleWorldInput();
  }
});
