const planCrops = [
  {
    name: "玉ねぎ",
    theme: "onion",
    quantity: "北部向け・大玉 300kg以上",
    place: "3畝・3,300株予定",
    usage: "西部：783〜1,148.5kg／月　北部：313〜418.5kg／月（4〜11月）",
    milestones: ["植え付け 11月中旬（予定）"],
  },
  {
    name: "小松菜",
    theme: "komatsuna",
    quantity: "77kgを目標（12月分）",
    place: "1畝",
    usage: "西部 35kg／北部 22kg（12月平均・計57kg）",
    milestones: ["播種 10/7〜10", "収穫予定 12月"],
  },
  {
    name: "キャベツ",
    theme: "cabbage",
    quantity: "秀品 400kgを目標（2月分）",
    place: "畝・株数を確認後に記載",
    usage: "西部 394kg／北部 122.5kg（2月平均・計516.5kg）",
    milestones: ["植え付け 10/2（完了）", "収穫予定 2月"],
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
  { crop: "キャベツ①", filter: "cabbage", task: "作業", bars: [{ start: 1, span: 2, label: "除草", type: "work" }, { start: 6, span: 2, label: "ネット外す", type: "work" }, { start: 10, span: 2, label: "収穫", type: "harvest" }] },
  { crop: "キャベツ①", filter: "cabbage", task: "出荷", bars: [{ start: 12, span: 2, label: "出荷可能", type: "delivery" }] },
  { crop: "キャベツ②", filter: "cabbage", task: "作業", bars: [{ start: 1, span: 2, label: "植え付け", type: "work" }, { start: 8, span: 2, label: "ネット外す", type: "work" }, { start: 15, span: 1, label: "収穫", type: "harvest" }] },
  { crop: "キャベツ②", filter: "cabbage", task: "出荷", bars: [{ start: 13, span: 4, label: "出荷可能", type: "delivery" }] },
  { crop: "小松菜①", filter: "komatsuna", task: "作業", bars: [{ start: 1, span: 2, label: "除草", type: "work" }] },
  { crop: "小松菜①", filter: "komatsuna", task: "出荷", bars: [{ start: 6, span: 2, label: "出荷可能", type: "delivery" }] },
  { crop: "小松菜②", filter: "komatsuna", task: "作業", bars: [{ start: 1, span: 2, label: "種まき", type: "work" }, { start: 4, span: 2, label: "除草", type: "work" }, { start: 9, span: 2, label: "収穫", type: "harvest" }] },
  { crop: "小松菜②", filter: "komatsuna", task: "出荷", bars: [{ start: 8, span: 5, label: "出荷可能", type: "delivery" }] },
  { crop: "青梗菜", filter: "chingensai", task: "作業", bars: [{ start: 1, span: 2, label: "種まき", type: "work" }, { start: 10, span: 2, label: "収穫", type: "harvest" }] },
  { crop: "青梗菜", filter: "chingensai", task: "出荷", bars: [{ start: 11, span: 2, label: "出荷可能", type: "delivery" }] },
  { crop: "じゃがいも", filter: "potato", task: "作業", bars: [{ start: 4, span: 1, label: "めくら除草", type: "work" }, { start: 6, span: 3, label: "1回目 土寄せ", type: "work" }, { start: 9, span: 2, label: "2回目 土寄せ", type: "work" }, { start: 16, span: 1, label: "収穫", type: "harvest" }] },
  { crop: "じゃがいも", filter: "potato", task: "出荷", bars: [{ start: 18, span: 2, label: "出荷開始〜", type: "delivery" }] },
];

const archiveMonths = [
  { month: "3月", periods: [{ when: "4週〜5週", items: ["キャベツ②　植え付け（3月25日）", "キャベツ①　除草（3月31日）", "小松菜①　除草", "青梗菜・小松菜②　種まき"] }] },
  { month: "4月", periods: [{ when: "2週目頃", items: ["じゃがいも　めくら除草"] }, { when: "2週〜3週", items: ["小松菜②　除草"] }, { when: "4週〜5週", items: ["小松菜①　出荷可能", "キャベツ①　ネットを外す（生育のようすによる）"] }, { when: "4月4週〜5月2週", items: ["じゃがいも　1回目土寄せ後、修正と芽かき"] }] },
  { month: "5月", periods: [{ when: "1週〜5週", items: ["小松菜②　出荷可能"] }, { when: "2週〜3週", items: ["じゃがいも　2回目土寄せと修正", "キャベツ②　ネットを外す", "キャベツ①・小松菜②・青梗菜　収穫"] }, { when: "4週〜5週", items: ["青梗菜・キャベツ①　出荷可能"] }] },
  { month: "6月", periods: [{ when: "1週〜4週", items: ["キャベツ②　出荷可能"] }, { when: "3週（中旬）", items: ["キャベツ②　収穫"] }, { when: "20日頃", items: ["じゃがいも　収穫イベント"] }] },
  { month: "7月", periods: [{ when: "1週目以降", items: ["じゃがいも　出荷可能"] }] },
];

function renderPlanCrops() {
  const container = document.querySelector("#plan-crops");
  container.innerHTML = planCrops
    .map((crop, index) => `
      <article class="crop-entry crop-entry--${crop.theme}">
        <div>
          <span class="crop-entry__number">栽培予定</span>
          <div class="crop-entry__name"><h3>${crop.name}</h3><span class="crop-glyph" aria-hidden="true"></span></div>
        </div>
        <dl>
          <div><dt>目標量</dt><dd>${crop.quantity}</dd></div>
          <div><dt>栽培場所</dt><dd>${crop.place}</dd></div>
          <div><dt>使用量の目安</dt><dd>${crop.usage}</dd></div>
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

  const monthHeader = monthGroups.map((group) => `<span style="grid-column: span ${group.span}">${group.month}</span>`).join("");
  const weekHeader = archiveColumns.map((column) => `<span>${column.week}</span>`).join("");
  const rows = archiveRows.map((row, index) => `
    <div class="gantt-row ${index % 2 ? "gantt-row--sub" : ""}" data-crop="${row.filter}">
      <div class="gantt-row__label">
        <strong>${index > 0 && archiveRows[index - 1].crop === row.crop ? "" : row.crop}</strong>
        <span>${row.task}</span>
      </div>
      <div class="gantt-track" style="--columns: ${archiveColumns.length}">
        ${row.bars.map((bar) => `<span class="gantt-bar gantt-bar--${bar.type}" style="grid-column: ${bar.start} / span ${bar.span}">${bar.label}</span>`).join("")}
      </div>
    </div>`).join("");

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
  list.innerHTML = archiveMonths.map((month) => `
    <article class="month-record">
      <h4>${month.month}</h4>
      <div>
        ${month.periods.map((period) => `
          <div class="month-record__period">
            <p>${period.when}</p>
            <ul>${period.items.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>`).join("")}
      </div>
    </article>`).join("");
}

function selectSeason(tab) {
  const target = tab.dataset.seasonTab;
  const tabs = document.querySelectorAll("[data-season-tab]");
  const panels = document.querySelectorAll("[data-season-panel]");
  tabs.forEach((item) => {
    const active = item === tab;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-selected", String(active));
    item.tabIndex = active ? 0 : -1;
  });
  panels.forEach((panel) => { panel.hidden = panel.dataset.seasonPanel !== target; });
}

function setupTabs() {
  const tabs = [...document.querySelectorAll("[data-season-tab]")];
  tabs.forEach((tab, index) => {
    tab.tabIndex = index === 0 ? 0 : -1;
    tab.addEventListener("click", () => selectSeason(tab));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      tabs[nextIndex].focus();
      selectSeason(tabs[nextIndex]);
    });
  });
}

function setupCropFilter() {
  const container = document.querySelector("#crop-filter-buttons");
  const options = [
    ["all", "すべて"],
    ["cabbage", "キャベツ"],
    ["komatsuna", "小松菜"],
    ["chingensai", "青梗菜"],
    ["potato", "じゃがいも"],
  ];
  container.innerHTML = options.map(([value, label], index) => `<button type="button" data-crop-filter="${value}" aria-pressed="${index === 0}">${label}</button>`).join("");
  container.addEventListener("click", (event) => {
    const button = event.target.closest("[data-crop-filter]");
    if (!button) return;
    const selected = button.dataset.cropFilter;
    container.querySelectorAll("button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    document.querySelectorAll(".gantt-row").forEach((row) => {
      row.classList.toggle("is-filtered", selected !== "all" && row.dataset.crop !== selected);
    });
  });
}

renderPlanCrops();
renderArchiveGantt();
renderArchiveList();
setupTabs();
setupCropFilter();
