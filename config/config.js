module.exports = {
    development: {
        app: {
            name: 'Passport SAML strategy example',
            port: process.env.PORT || 3000
        },
        passport: {
            strategy: 'saml',
            saml: {
                path: process.env.SAML_PATH || '/login/callback',
                entryPoint: process.env.SAML_ENTRY_POINT || 'https://repo.ngboss.com:9443/samlsso',
                issuer: 'passport-saml',
                identifierFormat:'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
                cert: process.env.SAML_CERT || null,
                acceptedClockSkewMs: 2000
            }
        }
    }
};