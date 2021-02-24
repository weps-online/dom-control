# DOM-CONTROL
DOM-CONTROL library allows you to manipulate the DOM components according to a set of rules.
Each function works with a set of :
 - Triggers :(URL parameters, Cookie Values, Input Values, etc...)
 - Actions (Hide, Show, Delete, Etc ...)
 - Targets (Usually a CSS target like a class or an id)

Example usage would be as follow :

    <script>
    (function() {
    		var MyProject = new DomControl    
      

     MyProject.urlControl({
      urlParam: 'language',
      paramValue:'french',
      action:'Hide',
      target:'english-components'
      })
      
     MyProject.urlControl({
      urlParam: 'language',
      paramValue:'french',
      action:'showGrid',
      target:'french-components'
      })
      
     MyProject.cookieControl({
      cookieParam: 'subscription status',
      paramValue: 'subscribed',
      action: 'Hide',
      target: 'subscription-form'
      })
    })();
    </script>
