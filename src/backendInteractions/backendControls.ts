export const startMongo = async () => {
	return fetch("https://thunman.servebeer.com/api/users/startMongo", {
		method: "POST",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	});
};

export const stopMongo = async () => {
	return fetch("https://thunman.servebeer.com/api/users/stopMongo", {
		method: "POST",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	});
};

export const hibernatePC = async () => {
	return fetch("https://thunman.servebeer.com/api/users/hibernate", {
		method: "POST",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	});
};

export const getStatusOffBackend = async () => {
	return fetch("https://thunman.servebeer.com/api/users/getStatus", {
		method: "GET",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	});
};

export const getLogs = async () => {
	return fetch("https://thunman.servebeer.com/api/users/getLogs", {
		method: "GET",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	});
};

export const wakePC = async () => {
	return fetch("https://thunman.servebeer.com/api/users/wakePC", {
		method: "POST",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	});
};
