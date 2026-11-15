// 全站目錄註冊表 (未來新增頁面時，只需在此處登記即可自動同步全站側邊欄)
const navData = [
  {
    category: "劇情大綱與時間線",
    items: [
      { title: "全劇時代演變與時間線", url: "timeline-episodes.html" }
    ]
  },
  {
    category: "主要角色檔案",
    items: [
      { title: "汪達·馬克希莫夫 (緋紅女巫)", url: "char-wanda.html" },
      { title: "幻視 (Vision)", url: "char-vision.html" },
      { title: "阿嘉莎·哈克尼斯", url: "char-agatha.html" }
    ]
  },
  {
    category: "西景鎮異常現象研究",
    items: [
      { title: "六角形結界 (The Hex) 機制", url: "lore-hex-anomaly.html" }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const sidebarContainer = document.getElementById("sidebar-container");
  if (!sidebarContainer) return;

  // 判斷當前頁面是否在 pages 資料夾內，以自動調整相對路徑
  const isInPages = window.location.pathname.includes("/pages/");
  const homePath = isInPages ? "../index.html" : "index.html";

  let navHTML = `
    <div class="sidebar-header">
      <h2><span>WandaVision</span> Wiki</h2>
    </div>
    <div class="nav-category">導覽總覽</div>
    <ul class="nav-links">
      <li><a href="${homePath}" class="${window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/") ? "active" : ""}">首頁說明</a></li>
    </ul>
  `;

  navData.forEach(cat => {
    navHTML += `<div class="nav-category">${cat.category}</div><ul class="nav-links">`;
    cat.items.forEach(item => {
      // 計算相對於當前頁面的連結網址
      const itemUrl = isInPages ? item.url : `pages/${item.url}`;
      // 判斷是否為當前頁面以加上 active 樣式
      const isActive = window.location.pathname.endsWith(item.url);
      
      navHTML += `<li><a href="${itemUrl}" class="${isActive ? "active" : ""}">${item.title}</a></li>`;
    });
    navHTML += `</ul>`;
  });

  sidebarContainer.innerHTML = navHTML;
});