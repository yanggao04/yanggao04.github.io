/* Home page */
window.PAGES = window.PAGES || {};

PAGES.home = {
  label: "Home",
  render() {
    let out =
      `<h1>${PROFILE.name}</h1>` +
      `<p class="role">${PROFILE.role}</p>` +
      metaLinks();

    out += `<h2>About</h2>`;
    out += ABOUT.map((p) => `<p class="page-p">${p}</p>`).join("");

    out += `<h2>Selected Projects</h2>`;
    out += PROJECTS.map((p) =>
      `<div class="entry">${entryHead(p.title, p.date, p.url)}</div>`).join("");

    out += `<h2>Publications</h2>`;
    out += paperList(HOME_PUBLICATIONS);

    return out;
  },
};
