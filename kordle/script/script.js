//설명 버튼 조작
const $qusBtn = document.querySelector(".qus-btn");
const $qus = document.querySelector(".quswrap");
const $exitBtn = document.querySelector(".exit");

$qusBtn.addEventListener("click", () => {
  $qus.classList.toggle("hide");
});
$exitBtn.addEventListener("click", () => {
  $qus.classList.add("hide");
});

// 6글자 자모 단어 리스트
const wordList = [
  ["ㄱ", "ㄱ", "ㅗ", "ㄷ", "ㅡ", "ㄹ"], // 꼬들
  ["ㄴ", "ㅏ", "ㅌ", "ㅁ", "ㅏ", "ㄹ"], // 낱말
  ["ㄱ", "ㅏ", "ㅁ", "ㅅ", "ㅏ", "ㅇ"], // 감사
  ["ㅅ", "ㅏ", "ㄴ", "ㅊ", "ㅐ", "ㄱ"], // 산책
  ["ㄱ", "ㅏ", "ㅁ", "ㅅ", "ㅏ", "ㅇ"], // 감상
  ["ㄱ", "ㅓ", "ㄱ", "ㅈ", "ㅓ", "ㅇ"], // 걱정
  ["ㅇ", "ㅏ", "ㄴ", "ㅈ", "ㅓ", "ㄴ"], // 안전
  ["ㅅ", "ㅓ", "ㅇ", "ㅇ", "ㅜ", "ㄴ"], // 성운
  ["ㅇ", "ㅣ", "ㄴ", "ㅊ", "ㅓ", "ㄴ"], // 인천
  ["ㅇ", "ㅜ", "ㄴ", "ㅈ", "ㅓ", "ㄴ"], // 운전
  ["ㅍ", "ㅏ", "ㅅ", "ㅗ", "ㅏ", "ㅣ"], // 파쇄
  ["ㅍ", "ㅗ", "ㅎ", "ㅗ", "ㅣ", "ㄱ"], // 포획
  ["ㅊ", "ㅗ", "ㅣ", "ㅈ", "ㅓ", "ㅇ"], // 최정
  ["ㅅ", "ㅓ", "ㅇ", "ㅎ", "ㅏ", "ㄴ"], // 성한
  ["ㅈ", "ㅜ", "ㄴ", "ㅈ", "ㅏ", "ㅣ"], // 준재
  ["ㅅ", "ㅓ", "ㄴ", "ㅎ", "ㅕ", "ㄱ"], // 선혁
  ["ㅁ", "ㅗ", "ㅌ", "ㅣ", "ㅂ", "ㅡ"], // 모티브
];

// 정답 랜덤 선택 함수
const selectRandomAnswer = () => {
  const idx = Math.floor(Math.random() * wordList.length);
  return wordList[idx];
};

// 정답 설정
let answer = selectRandomAnswer();
console.log("정답:", answer.join(""));

// 게임 보드 위 박스 만들기 6*6
const createBox = () => {
  for (let i = 0; i < 6; i++) {
    const $wrap = document.createElement("div");
    $wrap.classList.add("wrap");

    for (let j = 0; j < 6; j++) {
      const $box = document.createElement("div");
      $box.classList.add("box");
      $wrap.appendChild($box);
    }
    $gameboard.appendChild($wrap);
  }
};

//게임 보드 위 키보드 만들기
const $gameboard = document.querySelector("#gameboard");
const keyboardLayout = [
  ["ㅂ", "ㅈ", "ㄷ", "ㄱ", "ㅅ", "ㅛ", "ㅕ", "ㅑ"],
  ["ㅁ", "ㄴ", "ㅇ", "ㄹ", "ㅎ", "ㅗ", "ㅓ", "ㅏ", "ㅣ"],
  ["입력", "ㅋ", "ㅌ", "ㅊ", "ㅍ", "ㅠ", "ㅜ", "ㅡ", "삭제"],
];
const createKeyboard = () => {
  const $keyboard = document.querySelector("#keyboard");
  keyboardLayout.forEach((row) => {
    const $rowDiv = document.createElement("div");
    $rowDiv.classList.add("key-row");

    row.forEach((key) => {
      const $button = document.createElement("button");
      $button.textContent = key;
      $button.classList.add(`${key}-button`);
      $rowDiv.appendChild($button);

      if (key === "입력" || key === "삭제") {
        $button.classList.add("special-key");
      }

      //클릭 이벤트 리스너 추가
      $button.addEventListener("click", () => {
        handleKeyPress(key);
      });
    });
    $keyboard.appendChild($rowDiv);
  });
};

// 키 입력
const inputWord = [];
let currentRow = 0; //가로
let currentCol = 0; // 세로
const handleKeyPress = (key) => {
  const $rows = document.querySelectorAll("#gameboard .wrap");
  if (key === "삭제") {
    if (currentCol > 0) {
      currentCol--;
      $rows[currentRow].children[currentCol].textContent = "";
      inputWord.pop(); // 배열에서 빼기
    }
  } else if (key === "입력") {
    if (inputWord.length === 6) {
      checkWord(inputWord);
      currentRow++;
      currentCol = 0;
      inputWord.length = 0;
    } else {
      alert("6글자를 모두 입력해주세요!");
    }
  } else {
    if (currentCol < 6) {
      $rows[currentRow].children[currentCol].textContent = key;
      inputWord.push(key);
      currentCol++;
    }
  }
};

// 단어 체크하기
const checkWord = (input) => {
  const $rows = document.querySelectorAll("#gameboard .wrap");
  const $boxes = $rows[currentRow].children;

  const inputArr = [...input];
  const answerCopy = [...answer];
  const result = Array(6).fill("absent"); // 회색으로 채우기

  const $keyboardButtons = document.querySelectorAll("#keyboard button");

  // 위치 일치 검사
  for (let i = 0; i < 6; i++) {
    if (inputArr[i] === answer[i]) {
      result[i] = "correct"; //초록색
      answerCopy[i] = null;
      inputArr[i] = null;
    }
  }

  // 위치 다르지만 존재하는 글자 검사
  for (let i = 0; i < 6; i++) {
    if (inputArr[i] && answerCopy.includes(inputArr[i])) {
      result[i] = "present"; // 노란색
      answerCopy[answerCopy.indexOf(inputArr[i])] = null;
    }
  }

  // 색상 적용
  for (let i = 0; i < 6; i++) {
    $boxes[i].classList.add(result[i]);
  }

  if (result.every((r) => r === "correct")) {
    alert("🎉 정답입니다!");
  } else if (currentRow === 5) {
    alert(`💡 실패! 정답은 ${answer.join("")} 였습니다.`);
  }
  
  const keyStatus = {};

  for (let i = 0; i < 6; i++) {
    const char = input[i];
    const status = result[i];
    if (!char) continue;

    // 상태 우선순위: correct > present > absent
    const prev = keyStatus[char];
    if (prev === "correct") continue;
    if (prev === "present" && status === "absent") continue;

    keyStatus[char] = status;
  }

  // 한번에 버튼 업데이트
  $keyboardButtons.forEach(($btn) => {
    const char = $btn.textContent;
    const status = keyStatus[char];
    if (!status) return;

    $btn.classList.remove("correct", "present", "absent");
    $btn.classList.add(status);
  });
};

document.addEventListener("keydown", (event) => {
  const englishToHangul = {
    r: "ㄱ",
    s: "ㄴ",
    e: "ㄷ",
    f: "ㄹ",
    a: "ㅁ",
    q: "ㅂ",
    t: "ㅅ",
    d: "ㅇ",
    w: "ㅈ",
    c: "ㅊ",
    z: "ㅋ",
    x: "ㅌ",
    v: "ㅍ",
    g: "ㅎ",
    k: "ㅏ",
    o: "ㅐ",
    i: "ㅑ",
    j: "ㅓ",
    p: "ㅔ",
    u: "ㅕ",
    h: "ㅗ",
    y: "ㅛ",
    n: "ㅜ",
    b: "ㅠ",
    m: "ㅡ",
    l: "ㅣ",
  };
  const key = event.key;
  if (key === "Enter") {
    handleKeyPress("입력");
  } else if (key === "Backspace") {
    handleKeyPress("삭제");
  } else {
    const hangul = englishToHangul[key];
    if (hangul) {
      handleKeyPress(hangul);
    }
  }
});

createBox();
createKeyboard();
