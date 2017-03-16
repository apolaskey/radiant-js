module.exports = {
    "make_targets": {
        "win32": ["squirrel"],
        "darwin": ["zip"],
        "linux": ["deb","rpm"]
    },
    "electronPackagerConfig": {
        "asar": false,
        "ignore": [".idea", "\/build-configs", ".iml", ".compilerc", ".eslintrc", ".gitignore", "readme.md"]
    },
    "electronWinstallerConfig": {
        "name": "radiant_js",
        "loadingGif": ""
    },
    "electronInstallerDebian": {},
    "electronInstallerRedhat": {},
    "github_repository": {
        "owner": "",
        "name": ""
    },
    "windowsStoreConfig": {
        "packageName": "",
        "name": "radiantjs"
    }
};