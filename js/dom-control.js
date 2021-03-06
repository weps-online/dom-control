class DomControl {

    allowedParams = [
        'urlParam', 'paramValue', 'action', 'target', 'cookieParam', 'dateParam'
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
        if (!noElementFound) {
            console.log('No elements found with class : ' + className);
        }
    }

    hideById(elementId) {
        var elementToHide = document.getElementById(elementId);
        if (elementToHide) {
            elementToHide.style.display = 'none';
        } else {
            console.log('No elements found with ID : ' + elementId);
        }
    }

    showByClass(className, action) {
        var classElementArray = document.getElementsByClassName(className);
        var noElementFound = false;
        for (let element of classElementArray) {
            noElementFound = true;
            element.style.display = this.getShowMethod(action);
        };
        if (!noElementFound) {
            console.log('No elements found with class : ' + className);
        }
    }

    showById(elementId, action) {
        var elementToHide = document.getElementById(elementId);
        if (elementToHide) {
            elementToHide.style.display = this.getShowMethod(action);
        } else {
            console.log('No elements found with ID : ' + elementId);
        }
    }

    getShowMethod(action) {
        return action.replace('show', '').toLowerCase();
    }

    urlHasParams() {
        if (this.queryString) {
            return this.queryString;
        }
        return false;
    }

    urlHasParam(paramName) {
        return this.urlParams.has(paramName);
    }

    checkParamsIndex(params) {
        return Object.keys(params).every(r => this.allowedParams.includes(r)) ? true : 'Undefined index in params';
    }

    isString(val) {
        return (typeof val === "string");
    }

    isStrArray(val) {
        return Array.isArray(val) && val.every(this.isString);
    }

    urlControl(params) {
        if (this.checkParamsIndex(params)) {
            if (this.urlHasParam(params.urlParam) && this.urlParams.get(params.urlParam) === params.paramValue) {
                if (params.action.toUpperCase() === 'HIDE') {
                    if (typeof (params.target) == "string") {
                        this.hideByClass(params.target);
                        this.hideById(params.target);
                    } else if (this.isStrArray(params.target)) {
                        params.target.forEach(param => {
                            this.hideByClass(param);
                            this.hideById(param);
                        });
                    } else {
                        console.log('Error on target param type')
                    }
                } else {
                    if (typeof (params.target) == "string") {
                        this.showByClass(params.target, params.action);
                        this.showById(params.target, params.action);
                    } else if (this.isStrArray(params.target)) {
                        params.target.forEach(param => {
                            this.showByClass(param, params.action);
                            this.showById(param, params.action);
                        });
                    } else {
                        console.log('Error on target param type')
                    }
                }
            } else {
                console.log('Param name not found in URL');
            }

        }
    }

    getCookieKey(params) {
        const regex = new RegExp('(.*)' + params.cookieParam + '(=+)', 'g');
        return document.cookie.match(regex);
    }

    getCookieValueByKey(params) {
        const regex = new RegExp('(?:' + params.cookieParam + ')=(.*)(;*)');
        return document.cookie.match(regex)[1].split(';')[0];
    }

    isTodayDateInInterval(interval) {
        var today = new Date().getTime();
        var from = new Date(interval[0]).getTime();
        var to = new Date(interval[1]).getTime();
        if (today >= from && today <= to) {
            return true
        }
        return false;
    }

    cookieControl(params) {
        if (this.checkParamsIndex(params)) {
            if (this.getCookieKey(params) && this.getCookieValueByKey(params) === params.paramValue) {
                if (params.action.toUpperCase() === 'HIDE') {
                    if (typeof (params.target) == "string") {
                        this.hideByClass(params.target);
                        this.hideById(params.target);
                    } else if (this.isStrArray(params.target)) {
                        params.target.forEach(param => {
                            this.hideByClass(param);
                            this.hideById(param);
                        });
                    } else {
                        console.log('Error on target param type')
                    }
                } else {
                    if (typeof (params.target) == "string") {
                        this.showByClass(params.target, params.action);
                        this.showById(params.target, params.action);
                    } else if (this.isStrArray(params.target)) {
                        params.target.forEach(param => {
                            this.showByClass(param, params.action);
                            this.showById(param, params.action);
                        });
                    } else {
                        console.log('Error on target param type')
                    }
                }
            } else {
                console.log('Cookie Key "' + params.cookieParam + '" doesn\'t exist !');
            }
        }
    }

    domAction(action, target) {
        if (action.toUpperCase() === 'HIDE') {
            if (typeof (target) == "string") {
                this.hideByClass(target);
                this.hideById(target);
            } else if (this.isStrArray(target)) {
                target.forEach(param => {
                    this.hideByClass(param);
                    this.hideById(param);
                });
            } else {
                console.log('Error on target param type')
            }
        } else {
            if (typeof (target) == "string") {
                this.showByClass(target, action);
                this.showById(target, action);
            } else if (this.isStrArray(target)) {
                target.forEach(param => {
                    this.showByClass(param, action);
                    this.showById(param, action);
                });
            } else {
                console.log('Error on target param type')
            }
        }

    }

    dateControl(params) {
        if (this.checkParamsIndex(params)) {
            switch (params.dateParam) {
                case 'date':
                    if (new Date().toISOString().slice(0, 10) == params.paramValue) {
                        this.domAction(params.action, params.target);
                    }
                    break;
                case 'single period':
                    if(this.isTodayDateInInterval(params.paramValue)){
                        this.domAction(params.action, params.target);
                    }
                    break;
                case 'multiple period':
                    params.paramValue.forEach(interval => {
                        if(this.isTodayDateInInterval(interval)){
                            this.domAction(params.action, params.target);
                            return true;
                        }
                    });
                    break;
                default:
                    break;
            }
        }
    }
}