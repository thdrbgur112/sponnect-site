var copyBtn = document.getElementById('copy');
if (copyBtn) copyBtn.addEventListener('click', function () {
  var status = document.getElementById('copy-status');
  var mail = document.getElementById('mail');
  function fallback() {
    var r = document.createRange(); r.selectNodeContents(mail);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    status.textContent = '주소를 선택했어요. 복사해서 쓰세요.';
  }
  try {
    navigator.clipboard.writeText(mail.textContent).then(function () { status.textContent = '복사했어요.'; }, fallback);
  } catch (e) { fallback(); }
});
