(() => {
  const menuButton = document.querySelector(".menuButton");
  const navLinks = document.querySelector(".navLinks");
  menuButton?.addEventListener("click", () => {
    const open = !navLinks.classList.contains("open");
    navLinks.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    const icon = menuButton.querySelector(".uiIcon");
    if (icon) icon.textContent = open ? "×" : "≡";
  });
  navLinks?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    const icon = menuButton?.querySelector(".uiIcon");
    if (icon) icon.textContent = "≡";
  }));

  const tabs = [...document.querySelectorAll(".chapterNav [role=tab]")];
  const panels = [...document.querySelectorAll(".chapterPanels [role=tabpanel]")];
  const activate = (id) => {
    tabs.forEach((tab, index) => {
      const active = panels[index]?.id === id;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
      panels[index]?.classList.toggle("active", active);
    });
  };
  tabs.forEach((tab, index) => tab.addEventListener("click", () => activate(panels[index]?.id)));
  document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener("click", () => {
    const id = link.getAttribute("href").slice(1);
    if (panels.some((panel) => panel.id === id)) activate(id);
  }));
})();
