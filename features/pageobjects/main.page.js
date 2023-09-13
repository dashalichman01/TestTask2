const { $ } = require('@wdio/globals')
const Page = require('./page');

class MainPage extends Page {

    get btnSubmit () {
        return $('#login-button');
    }

    async submit(){
        await this.btnSubmit.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new MainPage();
