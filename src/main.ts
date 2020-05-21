import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Constructing tracking code
const piwikTrackCode = `<script type=”text/javascript”>
var _paq = _paq || [];
/* tracker methods like “setCustomDimension” should be called before “trackPageView” */
//_paq.push([‘trackPageView’]);//Needs to be commented for angulartics2
_paq.push([‘enableLinkTracking’]);
(function() {
var u=”${environment.piwikServer}” //piwik server URL
_paq.push([‘setTrackerUrl’, u+’piwik.php’]);
_paq.push([‘setSiteId’, ‘1’]);
var d=document, g=d.createElement(‘script’), s=d.getElementsByTagName(‘script’)[0];
g.type=’text/javascript’; g.async=true; g.defer=true; g.src=u+’piwik.js’; s.parentNode.insertBefore(g,s);
})();
</script>`;
// Dynamically injecting to index.html
if (environment.piwikServer) {
  document.write(piwikTrackCode);
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
