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
      
     MyProject.dateControl({
      dateParam: 'date',
      paramValue:'01/01/2021',
      action:'showBlock',
      target:'promotion-block'
      })
      
     MyProject.dateControl({
      dateParam: 'single period',
      paramValue: ['01/01/2021','10/01/2021'],
      action:'showBlock',
      target:'promotion-block'
      })
      
     MyProject.dateControl({
      dateParam: 'multiple period',
      paramValue: [['01/01/2021','10/01/2021'],['01/03/2021','10/03/2021']],
      action:'showBlock',
      target:'promotion-block'
      })
      
     MyProject.cookieControl({
      cookieParam: 'subscription status',
      paramValue: 'subscribed',
      action: 'Hide',
      target: 'subscription-form'
      })
    })();
    </script>
