import NaomisConfig from "@nhcarrigan/eslint-config";

export default [
    ...NaomisConfig,
    {
        "rules": {
            "jsdoc/check-values": [
                "warn",
                { allowedLicenses: ["BSD-3"]}
            ]
        }
    }
]