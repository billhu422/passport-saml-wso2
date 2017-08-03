const SamlStrategy = require('passport-saml').Strategy;

module.exports = function (passport, config) {

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    passport.use(new SamlStrategy({
            path: config.passport.saml.path,
            entryPoint: config.passport.saml.entryPoint,
            issuer: config.passport.saml.issuer,
            identifierFormat: config.passport.saml.identifierFormat,
            acceptedClockSkewMs: config.passport.saml.acceptedClockSkewMs,
            cert: config.passport.saml.cert
        },
        function (profile, done) {
            return done(null, {
                id: profile['http://wso2.org/claims/userid'],
                email: profile['http://wso2.org/claims/emailaddress'],
                displayName: profile['http://wso2.org/claims/displayName'],
                firstName: profile['http://wso2.org/claims/givenname'],
                lastName: profile['http://wso2.org/claims/lastname']
            });
        })
    );

};