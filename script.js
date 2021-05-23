function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'pt-BR', 
        layout: google.translate.TranslateElement.InlineLayout.NEW
    }, 'google_translate_element');
  }

  /* Gtag manager */
  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-997HGRT6T4');