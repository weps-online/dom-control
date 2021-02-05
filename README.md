# DOM-CONTROL
DOM-CONTROL library allows you to manipulate the DOM components according to a set of rules.
Each function works with a set of :
 - Triggers (URL parameters, Input Values, Keyboard or other DOM interactions)
 - Actions (Hide, Show, Delete, Etc ...)
 - Targets (Usually a CSS target like a class or an id)

Example usage would be as follow :

    <script>
    (function() {
    		var MyProject = new dom-control    
      

     MyProject.url-control({
    		urlParam: 'language',
        paramValue:'french',
        action:'Hide',
        target:'.english-components'
      })
    })();
    </script>
