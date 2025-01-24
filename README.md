# prerequisite

- A Browserstack account that enables "Browserstack Automate"
- Download latest version of Browserstack local binary (8.9v) - https://www.browserstack.com/docs/local-testing/releases-and-downloads

## In wdio.conf.ts
- Adjust `global.GLOBAL_AGENT.HTTP_PROXY = process.env.HTTP_PROXY || 'http://XXXXXXXXX/';` according to your specifications
- Provide  `pac-file` and `config-file` according to your specifications

## Note
I'm getting this issue without setting up a proxy. According to this user https://github.com/webdriverio/webdriverio/issues/13722#issuecomment-2531256414, the problem is also present when using MacStadium CI.
To test this without setting a proxy, delete the `global-agent` import and avoid using pac- and config file. 
