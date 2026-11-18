/* literature-reading · 可选的渐进增强脚本（原样内嵌到 <script data-literature-reading>）。
   1. 滚动时为左侧目录中当前所在章节/图号标记 aria-current="location"；
   2. 窄屏初次打开时自动折叠目录为细轨，给正文让出宽度。
   关闭脚本后页面仍可完整阅读与导航；脚本不修改任何字体、字号或排版。 */
(() => {
    const details = document.getElementById("reading-navigation");
    if (details && window.matchMedia("(max-width: 760px)").matches) {
        details.open = false;
    }

    const nav = document.querySelector(".navigation-links");
    if (!nav) return;
    const pairs = [...nav.querySelectorAll('a[href^="#"]')]
        .map((link) => {
            const id = decodeURIComponent(link.hash.slice(1));
            return [link, document.getElementById(id)];
        })
        .filter(([, target]) => target);
    if (!pairs.length) return;

    let active = null;
    let queued = false;
    const update = () => {
        queued = false;
        const line = window.innerHeight * 0.3;
        let next = pairs[0][0];
        for (const [link, target] of pairs) {
            if (target.getBoundingClientRect().top <= line) next = link;
        }
        if (next === active) return;
        if (active) active.removeAttribute("aria-current");
        next.setAttribute("aria-current", "location");
        const box = nav.getBoundingClientRect();
        const item = next.getBoundingClientRect();
        if (item.top < box.top || item.bottom > box.bottom) {
            nav.scrollTop += item.top - box.top - box.height / 2;
        }
        active = next;
    };
    const queue = () => {
        if (!queued) {
            queued = true;
            requestAnimationFrame(update);
        }
    };
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    update();
})();
