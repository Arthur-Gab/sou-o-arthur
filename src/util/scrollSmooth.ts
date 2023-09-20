export function scrollSmooth(target: string) {
	const element = document.querySelector(target);
	if (element) {
		const y = element.getBoundingClientRect().top + window.scrollY;

		window.scrollTo({ top: y, behavior: 'smooth' });
	}
}
