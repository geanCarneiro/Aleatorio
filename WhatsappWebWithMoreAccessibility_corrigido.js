// ==UserScript==
// @name         WhatsappWebWithMoreAccessibility_corrigido
// @namespace    https://github.com/juliano-lopes/accessibility-by-force/
// @version      6.1
// @description  versão corrigida do script de acessibilidade feita por Juliano Lopes (https://github.com/juliano-lopes/) a fim de atender a versão mais recente do WhatsApp Web
// @author       Autor Original Juliano Lopes, corrigido por Gean G. Carneiro
// @match        https://web.whatsapp.com
// @downloadURL https://raw.githubusercontent.com/geanCarneiro/Aleatorio/main/WhatsappWebWithMoreAccessibility.js
// @updateURL https://raw.githubusercontent.com/geanCarneiro/Aleatorio/main/WhatsappWebWithMoreAccessibility.js
// @grant GM_xmlhttpRequest
// @connect github.com
// @connect githubusercontent.com
// ==/UserScript==

(function() {
    'use strict';

    includeBaseScript();

    function includeBaseScript() {
        const baseScript = "https://raw.githubusercontent.com/geanCarneiro/Aleatorio/main/WhatsappWebWithMoreAccessibility.js";

        GM_xmlhttpRequest({
            method: "GET",
            url: baseScript,
            responseType: "text",
            onload: function (res) {
                let script = document.createElement("script");
                script.textContent = res.responseText;
                document.body.appendChild(script);
            }
        });
    }
})();