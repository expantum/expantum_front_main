const CLASS_ACTIVE = 'active';
const wrapList = document.querySelectorAll('.js-tabs');

const tabs = (() => {
    const tabsInit = () => {
        if (!wrapList.length) return;

        function attachEvents(parent) {
            const tabList = parent.querySelectorAll('[data-tab]');
            const contentList = parent.querySelectorAll('[data-content]');

            if (!tabList.length) return;

            tabList.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    tabList.forEach((btn2) => btn2.classList.remove(CLASS_ACTIVE));
                    e.currentTarget.classList.add(CLASS_ACTIVE);

                    const idContent = e.currentTarget.dataset.tab;

                    if (idContent === 'all') {
                        contentList.forEach((content) => content.classList.add(CLASS_ACTIVE));
                    } else {
                        const currentContentList = document.querySelectorAll(`[data-content="${idContent}"]`);

                        contentList.forEach((content) => content.classList.remove(CLASS_ACTIVE));

                        currentContentList.forEach((content) => content.classList.add(CLASS_ACTIVE));
                    }
                });
            });
        }

        wrapList.forEach((wrap) => attachEvents(wrap));
    };

    const init = () => {
        tabsInit();
    };

    return {
        init,
    };
})();

export default tabs;
