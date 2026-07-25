import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "docs");
const publicUrl = "https://manualalan.github.io/mr-pp-manifesto-2060/";

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(path.join(root, "public"), out, { recursive: true });

const cssFiles = (await readdir(path.join(root, "dist/server/assets")))
  .filter((name) => name.endsWith(".css"));
if (cssFiles.length !== 1) {
  throw new Error(`Expected one compiled stylesheet, found ${cssFiles.length}.`);
}
await cp(
  path.join(root, "dist/server/assets", cssFiles[0]),
  path.join(out, "styles.css"),
);

const response = await fetch("http://localhost:3001/");
if (!response.ok) throw new Error(`Local site returned ${response.status}.`);
let html = await response.text();

html = html
  .replace(/<script[\s\S]*?<\/script>/g, "")
  .replace(/<link[^>]+(?:modulepreload|data-rsc-css-href)[^>]*>/g, "")
  .replace(/<link[^>]+href="\/assets\/_vinext_fonts[^>]*>/g, "")
  .replace(/<style data-vinext-fonts>[\s\S]*?<\/style>/g, "")
  .replaceAll("http://localhost:3001/", publicUrl)
  .replace(/(src|href)="\/(?!\/)/g, '$1="./')
  .replace("</head>", '<link rel="stylesheet" href="./styles.css"/></head>')
  .replace("</body>", '<script src="./site.js"></script></body>');

await writeFile(path.join(out, "index.html"), html);
await writeFile(
  path.join(out, "site.js"),
  `(() => {
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
})();\n`,
);
await writeFile(path.join(out, ".nojekyll"), "");
console.log(`Exported GitHub Pages site to ${out}`);
