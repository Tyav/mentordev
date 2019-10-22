export function makeBold() {
  return document.execCommand('bold', false, '');
}

export function makeItalic() {
  return document.execCommand('italic', false, '');
}

export function strikeThrough() {
  return document.execCommand('strikeThrough', false, '');
}

export function underLineText() {
  return document.execCommand('underline', false, '');
}

export function justifyRight() {
  return document.execCommand('justifyRight', false, '');
}

export function justifyLeft() {
  return document.execCommand('justifyLeft', false, '');
}

export function justifyCenter() {
  return document.execCommand('justifyCenter', false, '');
}

export function undoChange() {
  return document.execCommand('undo', false, '');
}

export function redoChange() {
  return document.execCommand('redo', false, '');
}
