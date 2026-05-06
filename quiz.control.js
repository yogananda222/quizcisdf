let originalData = [...quizData];
let isStudyMode = false;

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function startQuiz(count) {
  isStudyMode = false;

  let data;
  if (count === 'all') {
    data = shuffleArray(originalData);
  } else if (count === 'sequence') {
    data = [...originalData];
  } else if (count === 'infinite') {
    data = shuffleArray(originalData);
  } else {
    data = shuffleArray(originalData).slice(0, count);
  }

  prepareQuiz(data);
}

function startStudy() {
  isStudyMode = true;

  quizData.length = 0;
  quizData.push(...originalData);

  document.getElementById("home").classList.add("hidden");
  document.getElementById("quizApp").classList.remove("hidden");

  renderStudyMode();
}

function prepareQuiz(selected) {
  quizData.length = 0;
  quizData.push(...selected);

  index = 0;
  score = 0;
  userAnswers = {};
  questionScore = {};

  document.getElementById("home").classList.add("hidden");
  document.getElementById("quizApp").classList.remove("hidden");

  renderQuestion();
}

// function renderStudyMode() {
//   const quiz = document.getElementById("quiz");

//   document.getElementById("progress").textContent = "Study Mode";
//   document.getElementById("scoreLive").textContent = "";
//   document.querySelector(".nav-buttons").style.display = "none";

//   quiz.innerHTML = `
//     <div class="study-container">
//       ${quizData.map((q, i) => `
//         <div class="study-question">
//           <div class="study-q">
//             ${i + 1}. ${q.question}
//           </div>

//           <div class="study-options">
//             ${
//               q.options
//                 ?.map(opt => {
//                   const isCorrect = q.answer?.includes(opt);
//                   return `
//                     <div class="study-option ${isCorrect ? "correct" : ""}">
//                       ${opt}
//                     </div>
//                   `;
//                 })
//                 .join("") ?? ""
//             }
//           </div>
//         </div>
//       `).join("")}
//     </div>
//   `;
// }
function renderStudyMode() {
  const quiz = document.getElementById("quiz");

  document.getElementById("progress").textContent = "Study Mode";
  document.getElementById("scoreLive").textContent = "";
  document.querySelector(".nav-buttons").style.display = "none";

  quiz.innerHTML = `
    <div class="study-container">
      ${quizData.map((q, i) => {

        /* ---------- MATCH QUESTIONS ---------- */
        if (q.type === "match") {
          return `
            <div class="study-question">
              <div class="study-q">
                ${i + 1}. ${q.question}
              </div>

              <div class="study-match">
                ${
                  q.answers.map(a => `
                    <div class="study-match-row">
                      <span class="match-label">${a.label}</span>
                      <span class="match-arrow">→</span>
                      <span class="match-answer">${a.correct}</span>
                    </div>
                  `).join("")
                }
              </div>
            </div>
          `;
        }

        /* ---------- MCQ / MULTIPLE ---------- */
        return `
          <div class="study-question">
            <div class="study-q">
              ${i + 1}. ${q.question}
            </div>

            <div class="study-options">
              ${
                q.options.map(opt => {
                  const isCorrect = q.answer?.includes(opt);
                  return `
                    <div class="study-option ${isCorrect ? "correct" : ""}">
                      ${opt}
                    </div>
                  `;
                }).join("")
              }
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}