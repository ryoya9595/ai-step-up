async function copyText(text, target) {
  let ok = false;
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      ok = true;
    }
  } catch { ok = false; }
  if (!ok && target) {
    const range = document.createRange();
    range.selectNodeContents(target);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    try { ok = document.execCommand("copy"); } catch { ok = false; }
    sel.removeAllRanges();
  }
  return ok;
}

document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.target);
    const text = target ? target.textContent : "";
    const ok = await copyText(text, target);
    button.textContent = ok ? "コピーしました" : "手動でコピーしてください";
    button.classList.toggle("copied", ok);
    setTimeout(() => {
      button.textContent = "コピー";
      button.classList.remove("copied");
    }, 2000);
  });
});
