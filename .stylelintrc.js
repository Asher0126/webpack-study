module.exports = {
    // 继承业界的规则
    extends: "stylelint-config-standard",
    rules: {
        "color-no-invalid-hex": true,
        "color-hex-case": "lower",
        "unit-whitelist": ["em", "rem", "%", "s", "px"],
        // TODO: 下列配置并不生效
        // "at-rule-no-unknown": [
        //     true,
        //     { ignoreAtRules: ["mixin", "extend", "content", "include"] }
        // ]
    }
};