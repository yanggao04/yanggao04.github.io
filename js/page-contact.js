/* Contact page */
window.PAGES = window.PAGES || {};

PAGES.contact = {
  label: "Contact",
  render() {
    return (
      `<h1>Contact</h1>` +
      `<p class="page-p">The quickest way to reach me is by email. I'm also on GitHub and LinkedIn.</p>` +
      `<div class="contact-icons">${socialLinks()}</div>`
    );
  },
};
