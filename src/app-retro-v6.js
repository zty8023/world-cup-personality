const teams = [
  {
    name: "巴西队",
    code: "BRA",
    archetype: "灵感型艺术家",
    profile: [94, 58, 68, 88],
    color: "#d49b19",
    description:
      "你相信足球首先是一种表达。越是局面混乱，你越能靠直觉、创造力和一点冒险精神找到出口。",
    strength: "把压力变成灵感，让团队看到别人没看到的路线。",
    warning: "灵感上头时，容易忘记给计划留一个稳妥的后手。",
    partner: "日本队",
    partnerReason: "你的即兴创造力遇上日本队的精密协作，灵感更容易被稳定地执行出来。",
  },
  {
    name: "阿根廷队",
    code: "ARG",
    archetype: "热血型领袖",
    profile: [88, 70, 76, 96],
    color: "#3684a8",
    description:
      "你会把重要比赛当成必须亲自回应的挑战。你的投入感很强，也擅长把情绪变成全队向前的动力。",
    strength: "关键时刻敢于接管局面，并让身边的人相信逆转。",
    warning: "过度投入时，可能把每一次分歧都看成必须赢下的对抗。",
    partner: "德国队",
    partnerReason: "你的情绪感染力负责点燃比赛，德国队的结构感负责把热血转化为持续推进。",
  },
  {
    name: "法国队",
    code: "FRA",
    archetype: "全能型强者",
    profile: [86, 82, 72, 68],
    color: "#174a86",
    description:
      "你不执着于唯一解法。速度、力量、技术和判断都能成为工具，你最擅长根据局势切换比赛方式。",
    strength: "适应力强，能快速识别对手弱点并调整打法。",
    warning: "选择太多时，偶尔会等到局势逼近才真正做出取舍。",
    partner: "西班牙队",
    partnerReason: "你的全面适应力搭配西班牙队的节奏控制，既能应变，也不会失去比赛主导权。",
  },
  {
    name: "西班牙队",
    code: "ESP",
    archetype: "耐心型掌控者",
    profile: [72, 94, 82, 54],
    color: "#a42a24",
    description:
      "你喜欢让复杂局面重新变得有序。比起仓促出手，你更愿意通过连续的小优势掌控节奏。",
    strength: "耐心拆解问题，用稳定传递把主动权握在手里。",
    warning: "追求完美控制时，可能错过最直接的进攻窗口。",
    partner: "巴西队",
    partnerReason: "你的耐心掌控遇上巴西队的大胆灵感，能补上临门一击所需要的突然性。",
  },
  {
    name: "德国队",
    code: "GER",
    archetype: "纪律型执行者",
    profile: [76, 92, 86, 42],
    color: "#24211d",
    description:
      "你相信准备和执行能降低不确定性。目标越清晰，你越能稳定地拆分任务、推进节奏并完成交付。",
    strength: "在压力下保持结构，让团队知道下一步该做什么。",
    warning: "计划被打乱时，需要提醒自己给即兴发挥留出空间。",
    partner: "阿根廷队",
    partnerReason: "你的纪律执行提供稳定底盘，阿根廷队的热血与担当则负责打破僵局。",
  },
  {
    name: "日本队",
    code: "JPN",
    archetype: "精密型协作者",
    profile: [64, 90, 96, 50],
    color: "#234d8d",
    description:
      "你重视细节、配合与整体效率。你不一定是声音最大的人，却经常是让团队顺畅运转的关键节点。",
    strength: "读懂队友，用精确配合把复杂比赛变成确定的机会。",
    warning: "太照顾整体时，可能低估自己站出来改变结果的能力。",
    partner: "巴西队",
    partnerReason: "你的精密协作让巴西队的灵感不至于失控，而对方的冒险精神也会推动你更主动。",
  },
  {
    name: "荷兰队",
    code: "NED",
    archetype: "理想型革新者",
    profile: [84, 84, 74, 72],
    color: "#c55a22",
    description:
      "你不满足于只是完成任务，还会追问能否用更漂亮、更先进的方式取胜。你喜欢重新定义规则。",
    strength: "敢于挑战惯例，为团队带来新的系统和视角。",
    warning: "对理想方案的坚持，有时会让简单问题变得过度复杂。",
    partner: "法国队",
    partnerReason: "你的革新想法搭配法国队的全能适应力，能让新体系在不同局面中真正落地。",
  },
  {
    name: "葡萄牙队",
    code: "POR",
    archetype: "目标型挑战者",
    profile: [90, 72, 58, 82],
    color: "#8d2730",
    description:
      "你对目标有强烈感知，愿意为关键结果持续投入。面对质疑时，你通常会把它转化为证明自己的动力。",
    strength: "自驱力强，在关键节点敢于承担决定比赛的责任。",
    warning: "专注结果时，别忘了让队友参与过程并共享胜利。",
    partner: "日本队",
    partnerReason: "你的目标感负责决定方向，日本队的团队协作负责让每一步执行得更稳、更细。",
  },
];

const questions = [
  {
    eyebrow: "逆风时刻",
    text: "球队先丢一球，你的第一反应是？",
    answers: [
      ["直接提速，用进攻把气势抢回来", [96, 52, 62, 90]],
      ["先稳住阵型，再寻找对方漏洞", [58, 94, 84, 42]],
      ["把大家叫到一起，重新统一节奏", [62, 78, 98, 70]],
      ["观察两分钟，根据对手变化再决定", [70, 92, 72, 48]],
    ],
  },
  {
    eyebrow: "团队关系",
    text: "队友发生争执，你通常怎么化解？",
    answers: [
      ["让双方先把情绪说完，再找共识", [58, 70, 92, 88]],
      ["明确目标，迅速划分下一步任务", [66, 94, 84, 42]],
      ["开个玩笑松动气氛，边踢边解决", [82, 54, 78, 92]],
      ["直接指出问题，重要的是马上改正", [88, 76, 54, 76]],
    ],
  },
  {
    eyebrow: "比赛计划",
    text: "面对陌生对手，你更相信什么？",
    answers: [
      ["临场直觉，机会出现就大胆尝试", [96, 48, 56, 88]],
      ["赛前数据，先把所有可能性算清楚", [54, 98, 72, 34]],
      ["固定体系，所有人按熟悉方式行动", [62, 90, 96, 42]],
      ["混合策略，随比赛走势快速切换", [86, 86, 72, 64]],
    ],
  },
  {
    eyebrow: "场上角色",
    text: "在一支球队里，你更像哪种角色？",
    answers: [
      ["创造机会的核心，享受最后一传", [90, 72, 68, 78]],
      ["掌控节奏的中场，让比赛保持有序", [66, 96, 84, 42]],
      ["覆盖全场的连接者，哪里需要去哪里", [72, 84, 98, 58]],
      ["决定胜负的终结者，关键球交给我", [98, 64, 50, 90]],
    ],
  },
  {
    eyebrow: "高压瞬间",
    text: "点球大战前，你会如何面对压力？",
    answers: [
      ["享受聚光灯，越关键越兴奋", [94, 58, 56, 98]],
      ["重复准备过的动作，不被环境影响", [68, 98, 84, 34]],
      ["先鼓励队友，让所有人保持信心", [62, 72, 98, 84]],
      ["观察门将习惯，在最后一秒做选择", [84, 92, 62, 56]],
    ],
  },
  {
    eyebrow: "决胜信条",
    text: "哪句话最像你的足球信条？",
    answers: [
      ["漂亮地赢，也是一种胜利", [94, 66, 68, 86]],
      ["体系不会辜负认真执行的人", [58, 98, 90, 36]],
      ["十一人的默契，比一个英雄更重要", [62, 78, 100, 62]],
      ["比分没定格，就永远还有下一次冲击", [96, 62, 56, 96]],
    ],
  },
];

const dimensions = [
  ["进攻欲", "敢于主动创造机会"],
  ["战术感", "阅读局势与执行计划"],
  ["团队性", "连接队友并共同推进"],
  ["情绪值", "用热情影响比赛"],
];

let state = {
  screen: "intro",
  index: 0,
  answers: [],
  result: null,
};
let isTransitioning = false;

const app = document.querySelector("#app");

function averageVectors(vectors) {
  return vectors[0].map((_, index) =>
    Math.round(vectors.reduce((sum, vector) => sum + vector[index], 0) / vectors.length),
  );
}

function getResult() {
  const score = averageVectors(state.answers.map((answer) => answer.vector));
  const ranked = teams
    .map((team) => {
      const distance = Math.sqrt(
        team.profile.reduce(
          (sum, value, index) => sum + Math.pow(value - score[index], 2),
          0,
        ),
      );
      return { team, distance };
    })
    .sort((a, b) => a.distance - b.distance);

  const match = Math.max(76, Math.min(96, Math.round(98 - ranked[0].distance * 0.42)));
  return { ...ranked[0].team, score, match };
}

function setScreen(screen) {
  state.screen = screen;
  window.scrollTo({ top: 0, behavior: "smooth" });
  render();
}

function startQuiz() {
  state = { screen: "question", index: 0, answers: [], result: null };
  isTransitioning = false;
  render();
}

function chooseAnswer(optionIndex) {
  if (isTransitioning) return;
  isTransitioning = true;
  const answer = questions[state.index].answers[optionIndex];
  state.answers[state.index] = {
    optionIndex,
    vector: answer[1],
  };
  render();

  isTransitioning = false;
  if (state.index < questions.length - 1) {
    state.index += 1;
    render();
  } else {
    state.result = getResult();
    setScreen("result");
  }
}

function goBack() {
  isTransitioning = false;
  if (state.index === 0) {
    setScreen("intro");
    return;
  }
  state.index -= 1;
  render();
}

function shell(content, screenClass = "") {
  return `
    <main class="page-shell ${screenClass}">
      <div class="edge edge-left" aria-hidden="true"></div>
      <div class="edge edge-right" aria-hidden="true"></div>
      <header class="brand-strip">
        <span>FOOTBALL PERSONALITY / 2026</span>
        <span class="edition">PLAYER CARD</span>
      </header>
      ${content}
      <footer class="footer-mark">
        <span>FOOTBALL<br>IS WHO<br>WE ARE</span>
        <span>06 QUESTIONS</span>
      </footer>
    </main>
  `;
}

function renderIntro() {
  app.innerHTML = `
    <main class="poster-stage">
      <section class="poster-card" aria-label="世界杯球迷人格测试">
        <img
          class="poster-art"
          src="./assets/football-personality-poster-v3.png"
          alt="你是哪支球队？回答 6 道题，发现你的国家队人格。"
        />
        <button
          class="poster-start"
          data-action="start"
          aria-label="开始测试"
        ></button>
      </section>
    </main>
  `;
}

function renderQuestion() {
  const question = questions[state.index];
  const selected = state.answers[state.index]?.optionIndex;
  const progress = ((state.index + 1) / questions.length) * 100;

  app.innerHTML = shell(
    `
      <section class="quiz">
        <div class="quiz-blue-swipe" aria-hidden="true"></div>
        <img
          class="quiz-player-art"
          src="./assets/retro-player-crop.png"
          alt=""
          aria-hidden="true"
        />
        <button class="back-button" data-action="back" aria-label="返回上一题">←</button>
        <div class="progress-copy">
          <span>${String(state.index + 1).padStart(2, "0")} / 06</span>
          <span>${question.eyebrow}</span>
        </div>
        <div class="progress-track" aria-label="答题进度">
          <i style="width: ${progress}%"></i>
        </div>

        <div class="question-number" aria-hidden="true">
          ${String(state.index + 1).padStart(2, "0")}
        </div>
        <p class="question-label">QUESTION ${String(state.index + 1).padStart(2, "0")}</p>
        <h2>${question.text}</h2>
        <p class="question-hint">别想太久，第一反应通常最像你。</p>

        <div class="answer-list">
          ${question.answers
            .map(
              ([label], index) => `
                <button
                  class="answer ${selected === index ? "selected" : ""}"
                  data-answer="${index}"
                >
                  <span>${String.fromCharCode(65 + index)}</span>
                  <strong>${label}</strong>
                  <i aria-hidden="true"></i>
                </button>
              `,
            )
            .join("")}
        </div>
        <div class="quiz-poster-note" aria-hidden="true">
          <span>TRUST YOUR</span>
          <strong>FIRST TOUCH</strong>
        </div>
        <img
          class="quiz-crowd-art"
          src="./assets/retro-ball-crowd.png"
          alt=""
          aria-hidden="true"
        />
      </section>
    `,
    "question-screen",
  );
}

function renderResult() {
  const result = state.result;
  app.innerHTML = shell(
    `
      <section class="result">
        <div class="result-blue-swipe" aria-hidden="true"></div>
        <div class="result-round-stamp" aria-hidden="true">MATCH<br>REPORT</div>
        <img
          class="result-player-art"
          src="./assets/retro-player-crop.png"
          alt=""
          aria-hidden="true"
        />
        <div class="result-kicker">YOUR FOOTBALL DNA</div>
        <p class="result-label">你的灵魂主队是</p>
        <h1 style="--team-color: ${result.color}">${result.name}</h1>
        <p class="archetype">${result.archetype}</p>

        <div class="match-block">
          <strong>${result.match}</strong>
          <div><span>%</span><b>匹配</b></div>
          <small>${result.code} / PERSONALITY CARD</small>
        </div>

        <div class="result-summary">
          <p>${result.description}</p>
        </div>

        <div class="metrics">
          ${dimensions
            .map(
              ([label, hint], index) => `
                <div class="metric">
                  <div class="metric-copy">
                    <strong>${label}</strong>
                    <span>${hint}</span>
                    <b>${result.score[index]}</b>
                  </div>
                  <div class="metric-track">
                    <i style="width: ${result.score[index]}%; --team-color: ${result.color}"></i>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>

        <div class="scouting-notes">
          <div>
            <span>你的强项</span>
            <p>${result.strength}</p>
          </div>
          <div>
            <span>战术提醒</span>
            <p>${result.warning}</p>
          </div>
          <div>
            <span>最佳拍档</span>
            <p>
              <strong>${result.partner}</strong>
              <small>${result.partnerReason}</small>
            </p>
          </div>
        </div>

        <div class="result-actions">
          <button class="primary-button" data-action="share">
            生成复古分享卡 <span aria-hidden="true">→</span>
          </button>
          <button class="secondary-button" data-action="restart">再测一次</button>
        </div>
        <p class="download-note" role="status" aria-live="polite"></p>
        <img
          class="result-collage"
          src="./assets/retro-ball-crowd.png"
          alt=""
          aria-hidden="true"
        />
      </section>
      <div class="share-modal" data-share-modal hidden>
        <button class="share-backdrop" data-action="close-share" aria-label="关闭分享面板"></button>
        <section class="share-sheet" role="dialog" aria-modal="true" aria-labelledby="share-title">
          <div class="share-sheet-head">
            <div>
              <span>PLAYER CARD READY</span>
              <h2 id="share-title">你的复古分享卡</h2>
            </div>
            <button data-action="close-share" aria-label="关闭">×</button>
          </div>
          <img class="share-preview" data-share-preview alt="足球人格分享卡预览" />
          <div class="share-grid">
            <button data-action="system-share">系统分享</button>
            <button data-action="wechat-share">发到微信</button>
            <button data-action="copy-link">复制结果链接</button>
            <button data-action="download-card">下载图片</button>
          </div>
          <p class="share-help">
            微信内打开时可使用右上角分享；其他浏览器会调用系统分享，或复制链接后粘贴到微信。
          </p>
        </section>
      </div>
      <div class="toast" data-toast role="status" aria-live="polite" hidden></div>
    `,
    "result-screen",
  );
}

function render() {
  if (state.screen === "intro") renderIntro();
  if (state.screen === "question") renderQuestion();
  if (state.screen === "result") renderResult();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const chars = [...text];
  let line = "";
  let lineIndex = 0;

  for (const char of chars) {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y + lineIndex * lineHeight);
      line = char;
      lineIndex += 1;
      if (lineIndex >= maxLines - 1) break;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y + lineIndex * lineHeight);
}

let currentShareCanvas = null;
let currentShareBlob = null;

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function canvasToBlob(canvas) {
  return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
}

async function createShareCard() {
  const result = state.result;
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1440;
  const ctx = canvas.getContext("2d");

  try {
    const background = await loadImage("./assets/ui-v6/share-card-bg.png");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  } catch {
    ctx.fillStyle = "#f2e5ca";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  ctx.fillStyle = "#1b1916";
  ctx.font = "900 22px Arial, sans-serif";
  ctx.fillText("WORLD CUP FAN PERSONALITY / 2026", 150, 105);

  ctx.fillStyle = "#8d2730";
  ctx.font = "900 114px Arial, sans-serif";
  ctx.fillText(result.name, 150, 340);

  ctx.fillStyle = "#1b1916";
  ctx.font = "900 42px Arial, sans-serif";
  ctx.fillText(result.archetype, 155, 414);
  ctx.fillStyle = "#d49b19";
  ctx.fillRect(155, 432, 270, 11);

  ctx.fillStyle = "#174a86";
  ctx.font = "900 245px Arial, sans-serif";
  ctx.fillText(String(result.match), 155, 735);
  ctx.fillStyle = "#1b1916";
  ctx.font = "900 34px Arial, sans-serif";
  ctx.fillText("人格匹配", 540, 720);
  ctx.font = "650 27px Arial, sans-serif";
  wrapText(ctx, result.description, 165, 805, 600, 42, 3);

  const metricY = 950;
  dimensions.forEach(([label], index) => {
    const x = 150 + index * 166;
    ctx.fillStyle = index % 2 === 0 ? "#8d2730" : "#174a86";
    ctx.font = "900 24px Arial, sans-serif";
    ctx.fillText(label, x, metricY);
    ctx.fillStyle = "#174a86";
    ctx.font = "900 48px Arial, sans-serif";
    ctx.fillText(String(result.score[index]), x, metricY + 72);
    ctx.fillStyle = "#d49b19";
    ctx.fillRect(x, metricY + 92, 112 * (result.score[index] / 100), 8);
  });

  ctx.fillStyle = "#8d2730";
  ctx.font = "900 24px Arial, sans-serif";
  ctx.fillText("最佳拍档", 150, 1190);
  ctx.fillStyle = "#1b1916";
  ctx.font = "900 38px Arial, sans-serif";
  ctx.fillText(result.partner, 150, 1240);
  ctx.font = "650 21px Arial, sans-serif";
  wrapText(ctx, result.partnerReason, 300, 1192, 430, 32, 3);

  return canvas;
}

function buildShareUrl() {
  const result = state.result;
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("result", result.code);
  url.searchParams.set("match", String(result.match));
  url.searchParams.set("scores", result.score.join(","));
  return url.toString();
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.hidden = true;
  }, 2800);
}

async function copyResultLink() {
  const url = buildShareUrl();
  try {
    await navigator.clipboard.writeText(url);
  } catch {
    const input = document.createElement("textarea");
    input.value = url;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }
  showToast("结果链接已复制，可以直接粘贴到微信。");
}

async function openShareCard() {
  const modal = document.querySelector("[data-share-modal]");
  const preview = document.querySelector("[data-share-preview]");
  const note = document.querySelector(".download-note");
  if (note) note.textContent = "正在生成复古分享卡…";

  currentShareCanvas = await createShareCard();
  currentShareBlob = await canvasToBlob(currentShareCanvas);
  preview.src = currentShareCanvas.toDataURL("image/png");
  modal.hidden = false;
  document.body.classList.add("modal-open");
  if (note) note.textContent = "";
  showToast("分享卡已生成，选择一种分享方式。");
}

function closeShareCard() {
  const modal = document.querySelector("[data-share-modal]");
  if (modal) modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function downloadCurrentCard() {
  if (!currentShareCanvas) return;
  const link = document.createElement("a");
  link.download = `我的足球人格-${state.result.name}.png`;
  link.href = currentShareCanvas.toDataURL("image/png");
  link.click();
  showToast("图片已下载，可以保存或发送给朋友。");
}

async function systemShare() {
  if (!currentShareBlob || !navigator.share) {
    await copyResultLink();
    showToast("当前浏览器不支持系统分享，已为你复制链接。");
    return;
  }

  const file = new File(
    [currentShareBlob],
    `我的足球人格-${state.result.name}.png`,
    { type: "image/png" },
  );
  const shareData = {
    title: `我的足球人格是${state.result.name}`,
    text: `我有 ${state.result.match}% 像${state.result.name}，你是哪支球队？`,
    url: buildShareUrl(),
    files: [file],
  };

  try {
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share(shareData);
    } else {
      delete shareData.files;
      await navigator.share(shareData);
    }
    showToast("分享面板已打开。");
  } catch (error) {
    if (error?.name !== "AbortError") {
      await copyResultLink();
    }
  }
}

async function shareToWechat() {
  const isWechat = /MicroMessenger/i.test(navigator.userAgent);
  if (isWechat) {
    showToast("请点击微信右上角“…”发送给朋友或朋友圈。");
    return;
  }
  if (navigator.share) {
    await systemShare();
    return;
  }
  await copyResultLink();
}

app.addEventListener("click", async (event) => {
  const actionTarget = event.target.closest("[data-action]");
  const answerTarget = event.target.closest("[data-answer]");

  if (answerTarget) {
    chooseAnswer(Number(answerTarget.dataset.answer));
    return;
  }

  if (!actionTarget) return;
  const action = actionTarget.dataset.action;
  if (action === "start") startQuiz();
  if (action === "back") goBack();
  if (action === "restart") startQuiz();
  if (action === "share") await openShareCard();
  if (action === "close-share") closeShareCard();
  if (action === "download-card") downloadCurrentCard();
  if (action === "copy-link") await copyResultLink();
  if (action === "system-share") await systemShare();
  if (action === "wechat-share") await shareToWechat();
});

const pageParams = new URLSearchParams(window.location.search);
const sharedResultCode = pageParams.get("result");
const sharedTeam = teams.find((team) => team.code === sharedResultCode);

if (sharedTeam) {
  const sharedScores = (pageParams.get("scores") || "")
    .split(",")
    .map(Number)
    .filter(Number.isFinite);
  state = {
    screen: "result",
    index: 5,
    answers: [],
    result: {
      ...sharedTeam,
      score: sharedScores.length === 4 ? sharedScores : sharedTeam.profile,
      match: Math.max(76, Math.min(96, Number(pageParams.get("match")) || 88)),
    },
  };
}

const previewState = pageParams.get("preview");
if (previewState === "question") {
  state = {
    screen: "question",
    index: 2,
    answers: [
      { optionIndex: 0, vector: questions[0].answers[0][1] },
      { optionIndex: 2, vector: questions[1].answers[2][1] },
    ],
    result: null,
  };
}
if (previewState === "result" || previewState === "share") {
  state = {
    screen: "result",
    index: 5,
    answers: questions.map((question, index) => ({
      optionIndex: index % 4,
      vector: question.answers[index % 4][1],
    })),
    result: null,
  };
  state.result = getResult();
}

render();

if (previewState === "share") {
  window.setTimeout(() => {
    openShareCard();
  }, 100);
}
