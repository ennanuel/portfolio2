export const fetchProjects = () => new Promise(
    async function (resolve, reject) {
        try {
            const URL = import.meta.env.VITE_API_URL + '/projects';
            const response = await fetch(URL);
            const res = await response.json();
            if (response.status !== 200) throw res;
            resolve(res)
        } catch (error) {
            console.error(error);
            reject(error.message);
        }
    }
);

export const sendEmail = (values) => new Promise(
    async function (resolve, reject) {
        try {
            const headers = new Headers;
            headers.append('Content-Type', 'application/json');
            const body = JSON.stringify(values);
            const options = { body, headers, method: 'POST' };
            const URL = import.meta.env.VITE_API_URL + '/mail';
            const response = await fetch(URL, options);
            const res = await response.json();
            if (res.status !== 200) throw new Error(res.message);
            resolve();
        } catch (error) {
            console.error(error);
            reject(error.message);
        }
    }
)

export function delayElementsInView() {
    const elementsInView = document.querySelectorAll('.delay');
    [...elementsInView].forEach(setElementAnimationDelay);
};

export const observeSectionIntersections = (sections = [], setPage) => {
    if (!setPage) return;
    const pageSections = [...sections];
    const sectionObserver = new IntersectionObserver(entries => {
        [...entries].forEach((entry) => {
            if (!entry.isIntersecting) return;
            const link = `#${entry.target.id}`;
            const current = entry.target.getAttribute('i')
            setPage({ link, current });
        })
    });
    pageSections.forEach((section, i) => {
        section.setAttribute('i', i);
        sectionObserver.observe(section);
    });
}

function setElementAnimationDelay(element, i) {
    const animationDelay = `${(i / 10).toFixed(1)}s`;
    element.style.animationDelay = animationDelay;
};