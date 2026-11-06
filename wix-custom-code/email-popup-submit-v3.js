    // Send the signup to the WellnessRX Mailchimp audience (c405e59399, us9).
    // Mailchimp's public signup endpoint (JSONP), the same one Mailchimp's own embedded forms use.
    var MC_URL = 'https://wellnessrxpharmacy.us9.list-manage.com/subscribe/post-json?u=7c2c465b375cbb09b939dac37&id=c405e59399';
    var FAIL_MSG = 'Sorry, we couldn’t connect. Please try again, or call us at 905-775-7874.';
    function showError(msg) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send me the offer →';
      var err = document.getElementById('wrx-email-error');
      if (!err) {
        err = document.createElement('p');
        err.id = 'wrx-email-error';
        err.setAttribute('role', 'alert');
        err.style.cssText = 'color:#b42318;font-size:13px;line-height:1.4;margin:6px 0 0;';
        form.appendChild(err);
      }
      err.textContent = msg;
    }
    function showSuccess() {
      setStatus({ subscribed: true });
      if (window.gtag) window.gtag('event', 'newsletter_signup', { method: 'popup' });
      if (window.fbq) window.fbq('track', 'Lead', { content_name: 'newsletter_signup' });
      if (window.dataLayer) window.dataLayer.push({ event: 'newsletter_signup' });
      modal.querySelector('.wrx-email-visual').style.display = 'none';
      modal.querySelector('.wrx-email-form-side').style.display = 'none';
      success.classList.add('show');
    }
    var cbName = 'wrxMc' + Date.now();
    var tag = document.createElement('script');
    var timer = setTimeout(function(){ cleanup(); showError(FAIL_MSG); }, 12000);
    function cleanup() {
      clearTimeout(timer);
      try { delete window[cbName]; } catch(e) { window[cbName] = undefined; }
      if (tag.parentNode) tag.parentNode.removeChild(tag);
    }
    window[cbName] = function(res) {
      cleanup();
      var msg = (res && res.msg) ? String(res.msg).replace(/<[^>]*>/g, '').replace(/^\d+\s*-\s*/, '') : '';
      if (res && res.result === 'success') { showSuccess(); return; }
      if (/already subscribed/i.test(msg)) { showSuccess(); return; }
      showError(msg || 'Something went wrong. Please check your email and try again.');
    };
    tag.onerror = function(){ cleanup(); showError(FAIL_MSG); };
    tag.src = MC_URL + '&EMAIL=' + encodeURIComponent(email) + '&c=' + cbName;
    document.body.appendChild(tag);
  });
})();
</script>
