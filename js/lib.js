/* Small render helpers shared by pages. */

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function entryHead(title, date, url) {
  const t = url
    ? `<span class="t"><a href="${esc(url)}" target="_blank" rel="noopener">${title}</a></span>`
    : `<span class="t">${title}</span>`;
  return `<div class="entry-head">${t}<span class="date">${date}</span></div>`;
}

function bullets(list) {
  return `<ul class="desc">${list.map((d) => `<li>${d}</li>`).join("")}</ul>`;
}

function metaLinks() {
  const items = PROFILE.email.map((e) => `<a href="mailto:${esc(e)}">${esc(e)}</a>`)
    .concat(PROFILE.links.map((l) =>
      `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`));
  return `<div class="metabar">${items.join(" \u00B7 ")}</div>`;
}

function paperList(list) {
  return list.map((p) =>
    `<div class="paper"><span class="authors">${esc(p.authors)}</span>, ` +
    `<span class="ptitle">&ldquo;${esc(p.title)}&rdquo;</span>, ` +
    `<strong>${esc(p.source)}</strong>, ${p.year}.</div>`).join("");
}
