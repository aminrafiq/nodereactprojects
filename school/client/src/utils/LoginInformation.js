const isAuthenticated = JSON.parse(localStorage.getItem('userData'));
export const TOKEN = isAuthenticated ? isAuthenticated.token : null;
