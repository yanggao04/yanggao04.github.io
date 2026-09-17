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

/* Compact single-line awards list. */
function awardList(list) {
  return `<ul class="awards">` + list.map((a) =>
    `<li><span class="aw-name">${esc(a.title)}</span>` +
    `<span class="aw-mid">${a.org ? `&middot; ${esc(a.org)}` : ""}</span>` +
    `<span class="aw-date">${esc(a.date)}</span></li>`).join("") + `</ul>`;
}

/* Inline social icons (theme-colored). */
const ICONS = {
  github:
    `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>`,
  linkedin:
    `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>`,
  email:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>`,
};

function socialLinks() {
  const items = [
    { name: "Email", url: `mailto:${PROFILE.email[0]}`, icon: ICONS.email },
    { name: "GitHub", url: PROFILE.github, icon: ICONS.github },
    { name: "LinkedIn", url: PROFILE.linkedin, icon: ICONS.linkedin },
  ];
  return `<div class="social">` + items.map((s) =>
    `<a href="${s.url}"${s.url.startsWith("mailto:") ? "" : ' target="_blank" rel="noopener"'} title="${s.name}" aria-label="${s.name}">${s.icon}</a>`).join("") + `</div>`;
}
