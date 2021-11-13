var inputs = document.getElementsByClassName('pwordinput');

for (var i = 0, l = inputs.length; i < l; i++) {
  inputs[i].removeAttribute('readonly');
}
