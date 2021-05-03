describe('Accessing the "Wikipedia" page', () => {
    beforeAll('Open browser', () => {
        return browser.url('https://google.com');
    });
    
    it('Searching "Wkipedia" on Google', () => {
        let input = $('input[name=q]');
        input.setValue('Wikipedia');
        browser.keys('Enter');
    });

    it('Clicking on the result with the "Wikipedia" text', () => {
        let link = $('h3=Wikipedia');
        link.click();
    });

    it('Checking the web\'s url', () => {
        expect(browser.getUrl()).toMatch('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    });
})