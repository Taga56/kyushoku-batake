const planCrops = [
  {
    name: "玉ねぎ",
    quantity: "目標量を確認後に記載",
    place: "畝・株数を確認後に記載",
    milestones: ["播種", "定植", "収穫予定"],
  },
  {
    name: "小松菜",
    quantity: "目標量を確認後に記載",
    place: "畝・播種回数を確認後に記載",
    milestones: ["播種", "管理作業", "収穫予定"],
  },
  {
    name: "キャベツ",
    quantity: "目標量を確認後に記載",
    place: "畝・株数を確認後に記載",
    milestones: ["播種", "定植", "収穫予定"],
  },
];

const archiveColumns = [
  { month: "3月", week: "4週" },
  { month: "3月", week: "5週" },
  { month: "4月", week: "1週" },
  { month: "4月", week: "2週" },
  { month: "4月", week: "3週" },
  { month: "4月", week: "4週" },
  { month: "4月", week: "5週" },
  { month: "5月", week: "1週" },
  { month: "5月", week: "2週" },
  { month: "5月", week: "3週" },
  { month: "5月", week: "4週" },
  { month: "5月", week: "5週" },
  { month: "6月", week: "1週" },
  { month: "6月", week: "2週" },
  { month: "6月", week: "3週" },
  { month: "6月", week: "4週" },
  { month: "6月", week: "5週" },
  { month: "7月", week: "1週" },
  { month: "7月", week: "2週〜" },
];

const archiveRows = [
  {
    crop: "キャベツ①",
    task: "作業",
    bars: [
      { start: 1, span: 2, label: "除草", type: "work" },
      { start: 6, span: 2, label: "ネット外す", type: "work" },
      { start: 10, span: 2, label: "収穫", type: "harvest" },
    ],
  },
  {
    crop: "キャベツ①",
    task: "出荷",
    bars: [{ start: 12, span: 2, label: "出荷可能", type: "delivery" }],
  },
  {
    crop: "キャベツ②",
    task: "作業",
    bars: [
      { start: 1, span: 2, label: "植え付け", type: "work" },
      { start: 8, span: 2, label: "ネット外す", type: "work" },
      { start: 15, span: 1, label: "収穫", type: "harvest" },
    ],
  },
  {
    crop: "キャベツ②",
    task: "出荷",
    bars: [{ start: 13, span: 4, label: "出荷可能", type: "delivery" }],
  },
  {
    crop: "小松菜①",
    task: "作業",
    bars: [{ start: 1, span: 2, label: "除草", type: "work" }],
  },
  {
    crop: "小松菜①",
    task: "出荷",
    bars: [{ start: 6, span: 2, label: "出荷可能", type: "delivery" }],
  },
  {
    crop: "小松菜②",
    task: "作業",
    bars: [
      { start: 1, span: 2, label: "種まき", type: "work" },
      { start: 4, span: 2, label: "除草", type: "work" },
      { start: 9, span: 2, label: "収穫", type: "harvest" },
    ],
  },
  {
    crop: "小松菜②",
    task: "出荷",
    bars: [{ start: 8, span: 5, label: "出荷可能", type: "delivery" }],
  },
  {
    crop: "青梗菜",
    task: "作業",
    bars: [
      { start: 1, span: 2, label: "種まき", type: "work" },
      { start: 10, span: 2, label: "収穫", type: "harvest" },
    ],
  },
  {
    crop: "青梗菜",
    task: "出荷",
    bars: [{ start: 11, span: 2, label: "出荷可能", type: "delivery" }],
  },
  {
    crop: "じゃがいも",
    task: "作業",
    bars: [
      { start: 4, span: 1, label: "めくら除草", type: "work" },
      { start: 6, span: 3, label: "1回目 土寄せ", type: "work" },
      { start: 9, span: 2, label: "2回目 土寄せ", type: "work" },
      { start: 16, span: 1, label: "収穫", type: "harvest" },
    ],
  },
  {
    crop: "じゃがいも",
    task: "出荷",
    bars: [{ start: 18, span: 2, label: "出荷開始〜", type: "delivery" }],
  },
];

const archiveMonths = [
  {
    month: "3月",
    periods: [
      {
        when: "4週〜5週",
        items: [
          "キャベツ②　植え付け（3月25日）",
          "キャベツ①　除草（3月31日）",
          "小松菜①　除草",
          "青梗菜・小松菜②　種まき",
        ],
      },
    ],
  },
  {
    month: "4月",
    periods: [
      { when: "2週目頃", items: ["じゃがいも　めくら除草"] },
      { when: "2週〜3週", items: ["小松菜②　除草"] },
      { when: "4週〜5週", items: ["小松菜①　出荷可能", "キャベツ①　ネットを外す（生育のようすによる）"] },
      { when: "4月4週〜5月2週", items: ["じゃがいも　1回目土寄せ後、修正と芽かき"] },
    ],
  },
  {
    month: "5月",
    periods: [
      { when: "1週〜5週", items: ["小松菜②　出荷可能"] },
      {
        when: "2週〜3週",
        items: ["じゃがいも　2回目土寄せと修正", "キャベツ②　ネットを外す", "キャベツ①・小松菜②・青梗菜　収穫"],
      },
      { when: "4週〜5週", items: ["青梗菜・キャベツ①　出荷可能"] },
    ],
  },
  {
    month: "6月",
    periods: [
      { when: "1週〜4週", items: ["キャベツ②　出荷可能"] },
      { when: "3週（中旬）", items: ["キャベツ②　収穫"] },
      { when: "20日頃", items: ["じゃがいも　収穫イベント"] },
    ],
  },
  {
    month: "7月",
    periods: [{ when: "1週目以降", items: ["じゃがいも　出荷可能"] }],
  },
];

function renderPlanCrops() {
  const container = document.querySelector("#plan-crops");
  container.innerHTML = planCrops
    .map(
      (crop) => `
        <article class="crop-entry">
          <div class="crop-entry__name"><h3>${crop.name}</h3><span>栽培予定</span></div>
          <dl>
            <div><dt>目標量</dt><dd>${crop.quantity}</dd></div>
            <div><dt>栽培場所</dt><dd>${crop.place}</dd></div>
            <div class="crop-entry__milestones"><dt>記録する時期</dt><dd>${crop.milestones.map((item) => `<span>${item}</span>`).join("")}</dd></div>
          </dl>
        </article>`,
    )
    .join("");
}

function renderArchiveGantt() {
  const chart = document.querySelector("#archive-gantt");
  const monthGroups = [];
  archiveColumns.forEach((column) => {
    const previous = monthGroups.at(-1);
    if (previous && previous.month === column.month) previous.span += 1;
    else monthGroups.push({ month: column.month, span: 1 });
  });

  const monthHeader = monthGroups
    .map((group) => `<span style="grid-column: span ${group.span}">${group.month}</span>`)
    .join("");
  const weekHeader = archiveColumns.map((column) => `<span>${column.week}</span>`).join("");
  const rows = archiveRows
    .map(
      (row, index) => `
        <div class="gantt-row ${index % 2 ? "gantt-row--sub" : ""}">
          <div class="gantt-row__label">
            <strong>${index > 0 && archiveRows[index - 1].crop === row.crop ? "" : row.crop}</strong>
            <span>${row.task}</span>
          </div>
          <div class="gantt-track" style="--columns: ${archiveColumns.length}">
            ${row.bars
              .map(
                (bar) => `<span class="gantt-bar gantt-bar--${bar.type}" style="grid-column: ${bar.start} / span ${bar.span}">${bar.label}</span>`,
              )
              .join("")}
          </div>
        </div>`,
    )
    .join("");

  chart.innerHTML = `
    <div class="gantt-header">
      <span>品目・項目</span>
      <div class="gantt-header__months" style="--columns: ${archiveColumns.length}">${monthHeader}</div>
    </div>
    <div class="gantt-header gantt-header--weeks">
      <span>週</span>
      <div class="gantt-header__weeks" style="--columns: ${archiveColumns.length}">${weekHeader}</div>
    </div>
    ${rows}`;
}

function renderArchiveList() {
  const list = document.querySelector("#archive-list");
  list.innerHTML = archiveMonths
    .map(
      (month) => `
        <article class="month-record">
          <h4>${month.month}</h4>
          <div>
            ${month.periods
              .map(
                (period) => `
                  <div class="month-record__period">
                    <p>${period.when}</p>
                    <ul>${period.items.map((item) => `<li>${item}</li>`).join("")}</ul>
                  </div>`,
              )
              .join("")}
          </div>
        </article>`,
    )
    .join("");
}

function setupTabs() {
  const tabs = document.querySelectorAll("[data-season-tab]");
  const panels = document.querySelectorAll("[data-season-panel]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.seasonTab;
      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
      });
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.seasonPanel !== target;
      });
    });
  });
}

renderPlanCrops();
renderArchiveGantt();
renderArchiveList();
setupTabs();
