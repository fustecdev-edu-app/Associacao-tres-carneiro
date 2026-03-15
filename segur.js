document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
  // Bloqueia F12
  if (e.keyCode == 123) {
    return false;
  }
  // Bloqueia Ctrl+Shift+I (Windows) ou Cmd+Option+I (Mac)
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  // Bloqueia Ctrl+Shift+J (Console)
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  // Bloqueia Ctrl+U (Ver Código Fonte)
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
};
