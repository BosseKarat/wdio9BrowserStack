import { expect } from '@wdio/globals'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        await expect(true).toBe(true);
    })
})

