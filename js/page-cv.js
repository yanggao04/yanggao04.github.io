/* CV page — bilingual (English default, Chinese toggle). CV only. */
window.PAGES = window.PAGES || {};

PAGES.cv = {
  label: "CV",
  lang: "en",

  /* Entering the page always starts in English. */
  reset() {
    this.lang = "en";
  },

  toggle() {
    this.lang = this.lang === "zh" ? "en" : "zh";
    document.getElementById("page").innerHTML = this.render();
  },

  render() {
    const zh = this.lang === "zh";
    const H = zh ? CV_ZH.headings : {
      education: "Education", experience: "Experience",
      projects: "Projects", awards: "Awards",
    };
    const education = zh ? CV_ZH.education : EDUCATION;
    const experience = zh ? CV_ZH.experience : EXPERIENCE;
    const projects = zh ? CV_ZH.projects : PROJECTS;
    const awards = zh ? CV_ZH.awards : AWARDS;

    let out = `<div class="cv-top"><div>` +
      `<h1>${PROFILE.name}</h1>` + metaLinks() + `</div>` +
      `<button class="lang-btn" type="button" onclick="PAGES.cv.toggle()" ` +
      `title="${zh ? "Switch to English" : "\u5207\u6362\u5230\u4e2d\u6587"}" ` +
      `aria-label="${zh ? "Switch to English" : "\u5207\u6362\u5230\u4e2d\u6587"}">` +
      `${zh ? "EN" : "\u4e2d\u6587"}</button></div>`;

    out += `<button class="print-fab" type="button" onclick="window.print()" ` +
      `title="${zh ? "\u6253\u5370 / \u5bfc\u51fa\u4e3a PDF" : "Print / Save as PDF"}">` +
      `${zh ? "\u6253\u5370" : "Print"}</button>`;

    out += `<h2>${H.education}</h2>`;
    out += education.map((e) =>
      `<div class="entry">${entryHead(e.title, e.date)}` +
      `<div class="sub">${e.org}${e.loc ? ` \u00B7 ${e.loc}` : ""}</div>` +
      `${e.tag ? `<div class="tag">${e.tag}</div>` : ""}</div>`).join("");

    out += `<h2>${H.experience}</h2>`;
    out += experience.map((e) =>
      `<div class="entry">${entryHead(e.title, e.date)}` +
      `<div class="sub">${e.org}</div></div>`).join("");

    out += `<h2>${H.projects}</h2>`;
    out += projects.map((p) =>
      `<div class="entry">${entryHead(p.title, p.date, p.url)}` +
      `${p.desc ? bullets(p.desc) : ""}</div>`).join("");

    out += `<h2>${H.awards}</h2>`;
    out += awardList(awards);

    return out;
  },
};
