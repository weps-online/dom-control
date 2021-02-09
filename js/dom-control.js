class DomControl {

    allowedParams = [
        'urlParam', 'paramValue', 'action', 'target'
    ];

    constructor() {
        this.queryString = window.location.search;
        this.urlParams = new URLSearchParams(this.queryString);
    }

    hideByClass(className) {
        var classElementArray = document.getElementsByClassName(className);
        var noElementFound = false;
        for (let element of classElementArray) {
            noElementFound = true;
            element.style.display = 'none';
        };
        if(!noElementFound){
            console.log('No elements found with class : '+className);
        }
    }

    hydeById(elementId) {
        var elementToHide = document.getElementById(elementId);
        if(elementToHide){
            elementToHide.style.display = 'none';
        }else{
            console.log('No elements found with ID : '+elementId);
        }
    }

    urlHasParams() {
        if (this.queryString) {
            return this.queryString;
        }
        return false;
    }

    urlHasParam(paramName){
        return this.urlParams.has(paramName);
    }

    checkParamsIndex(params) {
        return Object.keys(params).every(r => this.allowedParams.includes(r)) ? true : 'Undefined index in params';
    }

    urlControl(params) {
        if (this.checkParamsIndex(params)) {
            if(this.urlHasParam(params.urlParam)){
                if (params.action.toUpperCase() === 'HIDE') {
                    this.hideByClass(params.paramValue);
                    this.hydeById(params.paramValue);
                }
            }else{
                console.log('Param name not found in URL');
            }

        }
    }
}