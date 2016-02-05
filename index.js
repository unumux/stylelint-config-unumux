module.exports = {
    "rules": {
        "at-rule-empty-line-before": ["always", {
            except: ["blockless-group", "first-nested"],
            ignore: ["after-comment"],
        }],
        "block-closing-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always-multi-line",
        "block-closing-brace-space-before": "always-single-line",
        "block-no-empty": true,
        "block-opening-brace-newline-after": "always-multi-line",
        "block-opening-brace-space-after": "always-single-line",
        "block-opening-brace-space-before": "always",
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "color-no-invalid-hex": true,
        "comment-empty-line-before": ["always", {
            except: ["first-nested"],
            ignore: ["stylelint-commands"],
        }],
        "comment-whitespace-inside": "always",
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-semicolon-newline-after": "always-multi-line",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": 1,
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-after": "always-single-line",
        "declaration-colon-space-before": "never",
        "function-calc-no-unspaced-operator": true,
        "function-comma-newline-after": "always-multi-line",
        "function-comma-space-after": "always-single-line",
        "function-comma-space-before": "never",
        "function-parentheses-newline-inside": "always-multi-line",
        "function-parentheses-space-inside": "never-single-line",
        "function-whitespace-after": "always",
        "function-url-quotes": "double",
        "indentation": 4,
        "max-empty-lines": 1,
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-query-list-comma-newline-after": "always-multi-line",
        "media-query-list-comma-space-after": "always-single-line",
        "media-query-list-comma-space-before": "never",
        "media-query-parentheses-space-inside": "never",
        "no-eol-whitespace": true,
        "no-missing-eof-newline": true,
        "number-leading-zero": "always",
        "number-no-trailing-zeros": true,
        "number-zero-length-no-unit": true,
        "rule-no-shorthand-property-overrides": true,
        "rule-non-nested-empty-line-before": ["always-multi-line", {
            ignore: ["after-comment"],
        }],
        "rule-trailing-semicolon": "always",
        "selector-class-pattern": "^[a-z\-]+$",
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-list-comma-newline-after": "always",
        "selector-list-comma-space-before": "never",
        "selector-pseudo-element-colon-notation": "double",
        "string-quotes": "double",
        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never",
    },
}
