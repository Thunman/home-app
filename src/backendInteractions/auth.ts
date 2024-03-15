export const login = async (username: string, password: string) => {
	return fetch("https://thunman.servebeer.com/api/users/login", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ username, password }),
	});
};

export const logout = async () => {
	return fetch("https://thunman.servebeer.com/api/users/logout", {
		method: "POST",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	});
};
