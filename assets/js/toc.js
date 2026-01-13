document.addEventListener("DOMContentLoaded", function() {
    const postContent = document.querySelector('.post-content');
    if (!postContent) return;

    const content = postContent.querySelector('article');
    const toc = document.getElementById('toc');
    const headers = content.querySelectorAll('h2, h3, h4, h5, h6');

    if (headers.length > 0) {
        const ul = document.createElement('ul');
        let currentLevel = 2;
        let currentUl = ul;
        let sectionNumber = 1;

        headers.forEach(header => {
            const level = parseInt(header.tagName.substring(1));
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = header.textContent;
            a.href = `#${header.id || header.textContent.replace(/\s+/g, '-').toLowerCase()}`;
            li.appendChild(a);

            if (!header.id) {
                header.id = header.textContent.replace(/\s+/g, '-').toLowerCase();
            }

            if (level > currentLevel) {
                const newUl = document.createElement('ul');
                currentUl.lastElementChild.appendChild(newUl);
                currentUl = newUl;
            } else if (level < currentLevel) {
                while (level < currentLevel) {
                    currentUl = currentUl.parentElement.parentElement;
                    currentLevel--;
                }
            }
            currentUl.appendChild(li);

            // Add numbering for h2 and circle for h3
            if (level === 2) {
                a.textContent = `${sectionNumber}. ${a.textContent}`;
                sectionNumber++;
            } else if (level === 3) {
                li.style.listStyleType = 'circle';
            }

            currentLevel = level;
        });

        toc.appendChild(ul);
    }

    // 添加滚动时的动态加粗功能
    function updateActiveLink() {
        const tocLinks = document.querySelectorAll('#toc a');
        let activeLink = null;
        let maxOffset = -Infinity;

        headers.forEach(header => {
            const rect = header.getBoundingClientRect();
            // 检查标题是否在视口内或上方
            if (rect.top <= window.innerHeight / 2) {
                const offset = rect.top;
                if (offset > maxOffset) {
                    maxOffset = offset;
                    activeLink = document.querySelector(`#toc a[href="#${header.id}"]`);
                }
            }
        });

        // 移除所有链接的 active 类
        tocLinks.forEach(link => {
            link.classList.remove('active');
        });

        // 为当前活跃的链接添加 active 类
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // 监听滚动事件
    window.addEventListener('scroll', updateActiveLink);
    // 页面加载时初始化一次
    setTimeout(updateActiveLink, 100);
});


