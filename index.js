module.exports = {
    book: {
        assets: "./book",
        js: [
            "plugin.js"
        ],
        html: {
            "body:end": function() {
                var config = this.options.pluginsConfig.yametrika || {};
                
                if (!config.number) {
                	throw "Need to option 'number' for Yandex Metrika plugin";
                }

                if (config.webvisor === true) {
                    webvisor = ', webvisor:true'
                } 

                if (config.clickmap === true) {
                    clickmap = ', clickmap:true'
                } 

                if (config.trackLinks === true) {
                    trackLinks = ', trackLinks:true'
                } 

                return "<!-- Yandex.Metrika counter --><script type='text/javascript'>(function (d, w, c) 
                    { (w[c] = w[c] || []).push(function() { try { w.yaCounter"+config.number+" = new Ya.Metrika({id:"+config.number+""+config.webvisor+""+config.clickmap+""+config.trackLinks+" accurateTrackBounce:true}); } catch(e) { } }); 
                    var n = d.getElementsByTagName('script')[0], s = d.createElement('script'), f = function () 
                    { n.parentNode.insertBefore(s, n); }; s.type = 'text/javascript'; s.async = true; s.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + 
                    '//mc.yandex.ru/metrika/watch.js'; if (w.opera == '[object Opera]') { d.addEventListener('DOMContentLoaded', f, false); } else { f(); } })
                    (document, window, 'yandex_metrika_callbacks');</script><noscript><div><img src='//mc.yandex.ru/watch/"+config.number+"' style='position:absolute; 
                    left:-9999px;' alt='' /></div></noscript><!-- /Yandex.Metrika counter -->";
            }
        }
    }
};