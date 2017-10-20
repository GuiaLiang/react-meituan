import createBrowserHistory from 'history/createBrowserHistory'
import createHashHistory from 'history/createHashHistory'

export function throttle(fn) {
	let timer = null;

	return () => {
		if(timer) {
			clearTimeout(timer)
		}

		timer = setTimeout(fn, 50)
	}
}

let history = null;

export function createHistory(isHash) {
	history = isHash? createHashHistory() : createBrowserHistory();
}

export function getHistory() {
	if(history) return history

	createHistory(true)

	return history
}