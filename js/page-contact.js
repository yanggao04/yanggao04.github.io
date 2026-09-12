/* Contact page */
window.PAGES = window.PAGES || {};

PAGES.contact = {
  label: "Contact",
  render() {
    return (
      `<h1>Contact</h1>` +
      `<p class="page-p">Email: ${PROFILE.email.map((e) =>
        `<a href="mailto:${esc(e)}">${esc(e)}</a>`).join(" \u00B7 ")}</p>` +
      `<p class="page-p">GitHub: <a href="${PROFILE.github}" target="_blank" rel="noopener">` +
      `${PROFILE.github.replace("https://", "")}</a></p>` +
      `<p class="page-p">LinkedIn: <a href="${PROFILE.linkedin}" target="_blank" rel="noopener">` +
      `${PROFILE.linkedin.replace("https://www.", "").replace(/\/$/, "")}</a></p>`
    );
  },
};
