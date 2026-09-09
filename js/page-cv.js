/* CV page */
window.PAGES = window.PAGES || {};

PAGES.cv = {
  label: "CV",
  render() {
    let out = `<h1>Curriculum Vitae</h1>` + metaLinks();
    out += `<button class="print-fab" type="button" onclick="window.print()" title="Print / Save as PDF">Print</button>`;

    out += `<h2>Education</h2>`;
    out += EDUCATION.map((e) =>
      `<div class="entry">${entryHead(e.title, e.date)}` +
      `<div class="sub">${e.org}</div>${e.tag ? `<div class="tag">${e.tag}</div>` : ""}</div>`).join("");

    out += `<h2>Experience</h2>`;
    out += EXPERIENCE.map((e) =>
      `<div class="entry">${entryHead(e.title, e.date)}` +
      `<div class="sub">${e.org}</div></div>`).join("");

    out += `<h2>Projects</h2>`;
    out += PROJECTS.map((p) =>
      `<div class="entry">${entryHead(p.title, p.date, p.url)}` +
      `${p.desc ? bullets(p.desc) : ""}</div>`).join("");

    out += `<h2>Publications</h2>`;
    out += paperList(PUBLICATIONS);

    out += `<h2>Awards</h2>`;
    out += awardList(AWARDS);

    return out;
  },
};
