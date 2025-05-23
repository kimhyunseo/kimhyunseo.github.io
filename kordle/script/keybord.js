const $gameboard = document.querySelector("#gameboard");

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

const keyboardLayout = [
  ["ㅂ", "ㅈ", "ㄷ", "ㄱ", "ㅅ", "ㅆ", "ㅑ", "ㅕ"],
  ["ㅁ", "ㄴ", "ㅇ", "ㄹ", "ㅎ", "ㅗ", "ㅓ", "ㅣ"],
  ["입력", "ㅋ", "ㅌ", "ㅊ", "ㅍ", "ㅠ", "ㅡ", "삭제"],
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
    });
    
    // 버튼 클릭 이벤트
      $button.addEventListener("click", () => handleKeyPress(key));
    });


    $keyboard.appendChild($rowDiv);
  });
};

createKeyboard();
createBox();
