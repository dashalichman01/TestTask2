const { $ } = require('@wdio/globals')
const Page = require('./page');


class SecurePage extends Page {

    get errrorMessage () {
        return $('.error-message-container.error');
    }
}

module.exports = new SecurePage();
