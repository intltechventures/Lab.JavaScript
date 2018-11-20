
Progressive Web Appplications (PWAs) 
==== 

### References
* W3C
  * https://github.com/w3c/manifest
  * https://www.w3.org/TR/appmanifest/
    * This specification defines a JSON-based manifest file that provides developers with a centralized place to put metadata associated with a web application. This metadata includes, but is not limited to, the web application's name, links to icons, as well as the preferred URL to open when a user launches the web application. The manifest also allows developers to declare a default orientation for their web application, as well as providing the ability to set the display mode for the application (e.g., in fullscreen). Additionally, the manifest allows a developer to "scope" a web application to a URL. This restricts the URLs to which the manifest is applied and provides a means to "deep link" into a web application from other applications.
    * Using this metadata, user agents can provide developers with means to create user experiences that are more comparable to that of a native application.
    * This specification also defines the manifest link type as a declarative means to associate a document with a manifest. 
    * "Implementors need to be aware that this specification is not stable. However, aspects of this specification are shipping in at least one browser (see links to implementation status at the top of this document). Implementors who are not taking part in the discussions will find the specification changing out from under them in incompatible ways."

* Mozilla
  * https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive
  * https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive#Core_PWA_guides
    * https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Introduction
    * https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/App_structure
    * https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Offline_Service_workers
    * https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Installable_PWAs
    * https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Loading
    * https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Re-engageable_Notifications_Push
  * https://hacks.mozilla.org/?s=PWA
  * https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/


* Google
  * https://developers.google.com/web/progressive-web-apps/
    * https://developers.google.com/web/progressive-web-apps/checklist
    * https://developers.google.com/web/fundamentals/web-app-manifest/
  * https://developers.google.com/web/tools/lighthouse/
  * https://developers.google.com/web/tools/workbox/
    * "a set of libraries and Node modules that make it easy to cache assets and take full advantage of features used to build Progressive Web Apps."
  * https://developers.google.com/web/fundamentals/primers/async-functions


* Microsoft
  * https://developer.microsoft.com/en-us/windows/pwa
  * https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps/
    * When installed on Windows 10, PWAs run as Universal Windows Platform apps and gain these technical advantages over running in the browser:
      * Standalone window
      * Independent process from browser (isolated cache, less overhead)
      * No storage quota (for IndexedDB, local storage, etc.)=
      * Offline and background processes
      * Access to native Windows Runtime (WinRT) APIs via JavaScript
      * Appearance in "app" contexts such as the Windows Start menu and Cortana search results
  * https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps/get-started/
  * https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps#requirements
  * https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps#current-availability
    * "Browser engine support for Progressive Web Apps calls for a number of architectural components, the most significant being the networking infrastructure underlying the Fetch API. "   * See "current status of standards-based PWA technologies in EdgeHTML and Windows"


### Tutorials / Online Courses / Videos 
* https://dzone.com/articles/a-step-by-step-tutorial-for-developing-a-progressi
* https://vaadin.com/pwa/build
* https://medium.freecodecamp.org/how-you-can-make-a-progressive-web-app-in-an-hour-7e36d560610e
* [Vaadin: Progressive Web App tutorial – learn to build a PWA from scratch](https://www.youtube.com/watch?v=gcx-3qi7t7c)
  * https://github.com/marcushellberg/alternative-news
* https://gamedevacademy.org/phaser-progressive-web-apps-tutorial/
* Udemy
  * https://www.udemy.com/progressive-web-app-pwa-the-complete-guide/
  * https://www.udemy.com/progressive-web-apps/
  * https://www.udemy.com/progressive-web-app-development-a-complete-guide-2-in-1/
  * https://www.udemy.com/progressive-web-app-with-react-jumpstart/
  * https://www.udemy.com/angular-pwa-course/
  * https://www.udemy.com/progressive-web-application-development/
  * https://www.udemy.com/progressive-web-apps-pwa-from-beginner-to-expert/
* https://coursetro.com/posts/code/167/Building-Your-First-Angular-PWA-from-Scratch-(Angular-6)-
* https://www.udacity.com/course/intro-to-progressive-web-apps--ud811
* https://www.smashingmagazine.com/2018/09/pwa-angular-6/
* https://pusher.com/tutorials/pwa-react/
* Creating a Progressive Web App with a Headless CMS — Part 1
  * https://hackernoon.com/creating-a-progressive-web-app-with-a-headless-cms-part-1-85ede9dba59b
  * https://hackernoon.com/creating-a-progressive-web-app-with-a-headless-cms-part-2-88ffee198ff6
  * https://hackernoon.com/creating-a-progressive-web-app-with-a-headless-cms-part-3-a6bb538084


### Posible PWA Tooling Resources 
* https://app-manifest.firebaseapp.com/
* https://www.ampproject.org/docs/integration/pwa-amp
* https://www.pwabuilder.com/



### Github Resources
* https://github.com/jeffposnick/create-react-pwa
* https://github.com/angular/mobile-toolkit
* https://github.com/codebusking/react-pwa-guide-app
* https://github.com/IncredibleWeb/maltajs
  * A progressive web app that was used during the MaltaJS presentation that demonstrates the use of Service Workers, Cache API and offline functionality; the use of a Manifest for Web and Add to Homescreen.
* "Awesome" PWA lists
  * https://github.com/hemanth/awesome-pwa
  * https://github.com/TalAter/awesome-progressive-web-apps
  * 


### PWA Exemplars
* https://pwa.rocks/


### Articles
* https://en.wikipedia.org/wiki/Progressive_web_applications
* 2018
  * DZone
    * https://dzone.com/articles/pwa-technology
    * https://dzone.com/articles/pwa-progressive-web-all-the-things
    * https://dzone.com/articles/progressive-web-apps-building-compelling-apps-with
    * https://dzone.com/articles/planning-to-move-your-app-to-a-pwa-all-you-need-to
    * https://dzone.com/articles/build-a-basic-pwa-with-angular-and-spring-boot
  * https://blog.mozilla.org/firefox/progressive-web-apps-whats-big-deal/
  * https://hacks.mozilla.org/2018/05/progressive-web-apps-core-guides-on-mdn-web-docs/
  * https://www.androidpolice.com/2018/07/26/facebook-testing-proper-progressive-web-app-mobile-website/
* 2017
  * DZone
    * https://dzone.com/articles/building-progressive-web-applications-pwa-with-vis
* 2016 
  * https://medium.com/web-on-the-edge/progressive-web-apps-on-windows-8d8eb68d524e



