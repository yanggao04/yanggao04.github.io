/* Router + render. Loaded last, after pages register into window.PAGES. */

const NAV = ["home", "cv", "contact"];

function renderNav(activeKey) {
  const nav = document.getElementById("nav");
  nav.innerHTML = NAV.map((k) => {
    const cls = k === activeKey ? ' class="active"' : "";
    return `<a href="#/${k}"${cls}>${PAGES[k].label}</a>`;
  }).join("");
}

function render() {
  const raw = location.hash.replace(/^#\/?/, "").split("?")[0];
  const key = raw in PAGES ? raw : "home";
  const page = PAGES[key];

  renderNav(key);

  const foot = document.getElementById("foot");
  foot.textContent = `\u00A9 ${new Date().getFullYear()} ${PROFILE.name}.`;

  const host = document.getElementById("page");
  host.innerHTML = page.render();

  document.title = key === "home" ? PROFILE.name : `${page.label} \u00B7 ${PROFILE.name}`;
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
render();
