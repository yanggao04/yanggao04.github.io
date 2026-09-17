/* Research page */
window.PAGES = window.PAGES || {};

PAGES.research = {
  label: "Research",
  render() {
    let out = `<h1>Research</h1>`;
    if (typeof RESEARCH_INTRO !== "undefined" && RESEARCH_INTRO) {
      out += `<p class="page-p research-intro">${RESEARCH_INTRO}</p>`;
    }

    out += RESEARCH.map((r) => {
      let s = `<section class="research-item">`;
      s += `<h2 class="research-title">${r.title}</h2>`;
      if (r.meta) s += `<p class="research-meta">${r.meta}</p>`;

      (r.blocks || []).forEach((b) => {
        if (b.p) {
          s += `<p class="page-p">${b.p}</p>`;
        } else if (b.fig) {
          const f = b.fig;
          const cls = "fig" + (f.small ? " small" : "") + (f.medium ? " medium" : "");
          s += `<figure class="${cls}">` +
            `<img src="${f.src}" alt="${esc(f.alt || f.caption)}" />` +
            `<figcaption>${f.caption}</figcaption></figure>`;
        }
      });

      s += `</section>`;
      return s;
    }).join("");

    return out;
  },
};
