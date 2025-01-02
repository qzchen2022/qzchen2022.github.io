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
});