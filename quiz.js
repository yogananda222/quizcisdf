// let index = 0;
// let score = 0;
// let userAnswers = {};
// let questionScore = {};

// const quiz = document.getElementById("quiz");
// const progress = document.getElementById("progress");
// const scoreLive = document.getElementById("scoreLive");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");

// /* ---------- RENDER ---------- */
// function renderQuestion() {
//   const q = quizData[index];

//   progress.textContent = `Question ${index + 1}/${quizData.length}`;
//   scoreLive.textContent = `Score: ${score}`;

//   quiz.innerHTML = `<div class="question">${q.question}</div>`;

//   if (q.type !== "match") {
//     quiz.innerHTML += `
//       <div class="options">
//         ${q.options.map(o => `
//           <label>
//             <input type="${q.type === "multiple" ? "checkbox" : "radio"}"
//                    name="q${index}"
//                    value="${o}"
//                    ${userAnswers[index]?.includes(o) ? "checked" : ""}>
//             ${o}
//           </label>
//         `).join("")}
//       </div>
//     `;
//   } else {
//     renderMatch(q);
//   }

//   prevBtn.disabled = index === 0;
//   nextBtn.textContent = index === quizData.length - 1 ? "Submit" : "Next";
// }

// if (isStudyMode && q.answer) {
//   quiz.innerHTML += `
//     <div class="study-answer">
//       ✅ Correct Answer:
//       <b>${q.answer.join(", ")}</b>
//     </div>
//   `;
// }

// if (!isStudyMode) {
//   const correct = isCorrect(index);

//   if (correct && !questionScore[index]) score++;
//   if (!correct && questionScore[index]) score--;

//   questionScore[index] = correct;
// }

// /* ---------- MATCH ---------- */
// function renderMatch(q) {
//   quiz.innerHTML += `
//     <div class="match-container">
//       <div>
//         ${shuffle(q.options).map(opt => `
//           <div class="drag-item" draggable="true" data-val="${opt}">
//             ${opt}
//           </div>
//         `).join("")}
//       </div>

//       <div>
//         ${q.answers.map((a, i) => `
//           <div class="drop-zone" data-index="${i}">
          
//           </div>
//         `).join("")}
//       </div>

//       <div>
//         ${q.answers.map(a => `
//           <div class="static-desc">${a.label}</div>
//         `).join("")}
//       </div>
//     </div>
//   `;

//   enableDragMatch();
// }

// function enableDragMatch() {
//   document.querySelectorAll(".drag-item").forEach(item => {
//     item.ondragstart = e =>
//       e.dataTransfer.setData("text", item.dataset.val);
//   });

//   document.querySelectorAll(".drop-zone").forEach(zone => {
//     zone.ondragover = e => e.preventDefault();
//     zone.ondrop = e => {
//       e.preventDefault();
//       const val = e.dataTransfer.getData("text");
//       zone.innerHTML = `${zone.textContent.split("→")[0]} → <b>${val}</b>`;
//       userAnswers[index] ??= {};
//       userAnswers[index][zone.dataset.index] = val;
//     };
//   });
// }

// /* ---------- VALIDATION ---------- */
// function isAnswered() {
//   const q = quizData[index];
//   if (q.type === "match") {
//     return userAnswers[index] &&
//       Object.keys(userAnswers[index]).length === q.answers.length;
//   }
//   return document.querySelectorAll("input:checked").length > 0;
// }

// function saveAnswer() {
//   if (quizData[index].type !== "match") {
//     userAnswers[index] =
//       [...document.querySelectorAll("input:checked")].map(i => i.value);
//   }
// }

// function isCorrect(i) {
//   const q = quizData[i];

//   if (q.type === "match") {
//     if (!userAnswers[i]) return false;
//     return q.answers.every((a, idx) =>
//       userAnswers[i][idx] === a.correct
//     );
//   }

//   return q.answer.sort().toString() ===
//          (userAnswers[i] || []).sort().toString();
// }

// /* ---------- NAV ---------- */
// nextBtn.onclick = () => {
//   if (!isAnswered()) {
//     alert("Please answer the question before proceeding.");
//     return;
//   }

//   saveAnswer();
//   const correct = isCorrect(index);

//   if (correct && !questionScore[index]) score++;
//   if (!correct && questionScore[index]) score--;

//   questionScore[index] = correct;

//   if (index === quizData.length - 1) {
//     quiz.innerHTML =
//       `<div class="score-final">✅ Final Score: ${score}/${quizData.length}</div>`;
//     document.querySelector(".nav-buttons").style.display = "none";
//     return;
//   }

//   index++;
//   renderQuestion();
// };

// prevBtn.onclick = () => {
//   index--;
//   renderQuestion();
// };

// /* ---------- INIT ---------- */
// quizData.sort(() => Math.random() - 0.5);
// renderQuestion();

let index = 0;
let score = 0;
let userAnswers = {};
let questionScore = {};

const quiz = document.getElementById("quiz");
const progress = document.getElementById("progress");
const scoreLive = document.getElementById("scoreLive");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

/* ---------- RENDER ---------- */
function renderQuestion() {
  const q = quizData[index];
  if (!q) return;

  progress.textContent = `Question ${index + 1}/${quizData.length}`;
  scoreLive.textContent = isStudyMode ? "Study Mode" : `Score: ${score}`;

  quiz.innerHTML = `<div class="question">${q.question}</div>`;

  if (q.type !== "match") {
    quiz.innerHTML += `
      <div class="options">
        ${q.options.map(o => `
          <label>
            <input type="${q.type === "multiple" ? "checkbox" : "radio"}"
                   name="q${index}"
                   value="${o}"
                   ${userAnswers[index]?.includes(o) ? "checked" : ""}>
            ${o}
          </label>
        `).join("")}
      </div>
    `;
  } else {
    renderMatch(q);
  }

  /* ✅ STUDY MODE ANSWER DISPLAY */
  if (isStudyMode && q.answer) {
    quiz.innerHTML += `
      <div class="study-answer">
        ✅ Correct Answer:
        <b>${q.answer.join(", ")}</b>
      </div>
    `;
  }

  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === quizData.length - 1 ? "Finish" : "Next";
}

/* ---------- MATCH ---------- */
function renderMatch(q) {
  quiz.innerHTML += `
    <div class="match-container">
      <div>
        ${shuffle(q.options).map(opt => `
          <div class="drag-item" draggable="true" data-val="${opt}">
            ${opt}
          </div>
        `).join("")}
      </div>

      <div>
        ${q.answers.map((_, i) => `
          <div class="drop-zone" data-index="${i}"></div>
        `).join("")}
      </div>

      <div>
        ${q.answers.map(a => `
          <div class="static-desc">${a.label}</div>
        `).join("")}
      </div>
    </div>
  `;
  enableDragMatch();
}

function enableDragMatch() {
  document.querySelectorAll(".drag-item").forEach(item => {
    item.ondragstart = e =>
      e.dataTransfer.setData("text", item.dataset.val);
  });

  document.querySelectorAll(".drop-zone").forEach(zone => {
    zone.ondragover = e => e.preventDefault();
    zone.ondrop = e => {
      e.preventDefault();
      const val = e.dataTransfer.getData("text");
      zone.innerHTML = `<b>${val}</b>`;
      userAnswers[index] ??= {};
      userAnswers[index][zone.dataset.index] = val;
    };
  });
}

/* ---------- VALIDATION ---------- */
function isAnswered() {
  const q = quizData[index];
  if (isStudyMode) return true;

  if (q.type === "match") {
    return userAnswers[index] &&
      Object.keys(userAnswers[index]).length === q.answers.length;
  }
  return document.querySelectorAll("input:checked").length > 0;
}

function saveAnswer() {
  if (quizData[index].type !== "match") {
    userAnswers[index] =
      [...document.querySelectorAll("input:checked")].map(i => i.value);
  }
}

function isCorrect(i) {
  const q = quizData[i];
  if (!q) return false;

  if (q.type === "match") {
    return q.answers.every((a, idx) =>
      userAnswers[i]?.[idx] === a.correct
    );
  }

  return q.answer.sort().join() ===
         (userAnswers[i] || []).sort().join();
}

/* ---------- NAV ---------- */
nextBtn.onclick = () => {
  if (!isAnswered()) {
    alert("Please answer before proceeding.");
    return;
  }

  saveAnswer();

  if (!isStudyMode) {
    const correct = isCorrect(index);
    if (correct && !questionScore[index]) score++;
    if (!correct && questionScore[index]) score--;
    questionScore[index] = correct;
  }

  if (index === quizData.length - 1) {
    quiz.innerHTML = `
      <div class="score-final">
        ✅ ${isStudyMode ? "End of Study Mode" : `Score: ${score}/${quizData.length}`}
      </div>
    `;
    document.querySelector(".nav-buttons").style.display = "none";
    return;
  }

  index++;
  renderQuestion();
};

prevBtn.onclick = () => {
  index--;
  renderQuestion();
};
