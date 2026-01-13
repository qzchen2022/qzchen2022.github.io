document.addEventListener("DOMContentLoaded", function() {
  // 获取当前页面的 URL
  const currentUrl = window.location.pathname;

  // 获取导航栏中的所有链接
  const tocLinks = document.querySelectorAll('.sidebar nav#toc a');

  tocLinks.forEach(link => {
    // 获取链接的 href
    const linkHref = link.getAttribute('href');

    // 检查是否是当前页面的链接
    if (linkHref && linkHref.startsWith('#')) {
      // 这是页面内的锚点链接，检查是否在当前页面
      const isCurrentPage = currentUrl.includes(window.location.pathname);
      if (isCurrentPage) {
        link.classList.add('active');
      }
    }
  });
});
