/** Smoothly scrolls to a section by id, accounting for the sticky nav. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: 'smooth' });
}
