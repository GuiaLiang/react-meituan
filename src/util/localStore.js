export default {
	getItem(key) {
		let value;
		try {
			value = localStorage.getItem(key);
		} catch(err) {
			if(process.env.NODE_ENV !== 'production') {
				console.error(`localStorage.getItem error: ${err}`)
			}
		} finally {
			return value;
		}
	},

	setItem(key, value) {
		try {
			localStorage.setItem(key, value);
		} catch(err) {
			if(process.env.NODE_ENV !== 'production') {
				console.error(`localStorage.getItem error: ${err}`)
			}
		}
	}
}