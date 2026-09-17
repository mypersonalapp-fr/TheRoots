// The Roots — écrans pas encore construits (prochains lots de développement).

export function renderPlaceholder(container, title, note) {
  container.innerHTML = `
    <div class="card" style="text-align:center;padding:40px 20px">
      <div style="font-size:32px;margin-bottom:10px">🚧</div>
      <div style="font-weight:800;font-size:16px">${title}</div>
      <div style="color:var(--ink-soft);margin-top:8px;font-size:14px">${note}</div>
    </div>
  `;
}
