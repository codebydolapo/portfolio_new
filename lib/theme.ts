export const THEME_STORAGE_KEY = "theme";

/**
 * Runs synchronously in <head> before first paint. Applies the saved theme,
 * or falls back to the OS preference and keeps following it until the user
 * picks one explicitly.
 */
export const themeScript = `(function(){var d=document.documentElement,m=window.matchMedia("(prefers-color-scheme: dark)");function a(){var t=null;try{t=localStorage.getItem("${THEME_STORAGE_KEY}")}catch(e){}d.setAttribute("data-theme",t==="dark"||t==="light"?t:m.matches?"dark":"light")}a();m.addEventListener("change",a)})()`;
