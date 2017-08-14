module.exports = {
    "plugins": [
        "stylelint-order"
    ],
    "extends": "stylelint-config-standard", 
    "rules": {
        "indentation": 4,
        "at-rule-blacklist": [],
        "at-rule-no-unknown": [true, { ignoreAtRules: ["/.*/"] }],
        "string-quotes": "double",
        "no-duplicate-selectors": true,
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "color-named": "never",
        "color-no-hex": [true, { "severity": "warning" }],
        "selector-no-qualifying-type": true,
        "selector-max-id": 0,
        "selector-combinator-space-after": "always",
        "selector-attribute-quotes": "always",
        "selector-attribute-operator-space-before": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-brackets-space-inside": "never",
        "declaration-block-trailing-semicolon": "always",
        "declaration-no-important": true,
        "declaration-colon-space-before": "never",
        "declaration-colon-space-after": "always",
        "number-leading-zero": "always",
        "function-url-quotes": "always",
        "font-weight-notation": "numeric",
        "font-family-name-quotes": "always-unless-keyword",
        "comment-whitespace-inside": "always",
        "rule-empty-line-before": ["always", {
            except: [
                "first-nested"
            ]
        }],
        "selector-pseudo-element-colon-notation": "double",
        "media-feature-parentheses-space-inside": "never",
        "media-feature-colon-space-before": "never",
        "media-feature-colon-space-after": "always",
        "order/properties-alphabetical-order": true,
        "declaration-block-no-redundant-longhand-properties": null,
        "block-no-empty": [true, { "severity": "warning" }],
        "shorthand-property-no-redundant-values": null
    }
}
