
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-contacts.Contact",
          "file": "plugins/cordova-plugin-contacts/www/Contact.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "Contact"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactAddress",
          "file": "plugins/cordova-plugin-contacts/www/ContactAddress.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactAddress"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactError",
          "file": "plugins/cordova-plugin-contacts/www/ContactError.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactError"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactField",
          "file": "plugins/cordova-plugin-contacts/www/ContactField.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactField"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactFindOptions",
          "file": "plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactFindOptions"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactName",
          "file": "plugins/cordova-plugin-contacts/www/ContactName.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactName"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactOrganization",
          "file": "plugins/cordova-plugin-contacts/www/ContactOrganization.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactOrganization"
        ]
        },
      {
          "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
          "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
          "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
          "cordova.plugins.barcodeScanner"
        ]
        },
      {
          "id": "cordova-plugin-contacts.contacts",
          "file": "plugins/cordova-plugin-contacts/www/contacts.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "navigator.contacts"
        ]
        },
      {
          "id": "cordova-plugin-admob-free.AdMob",
          "file": "plugins/cordova-plugin-admob-free/www/admob.js",
          "pluginId": "cordova-plugin-admob-free",
        "clobbers": [
          "admob",
          "AdMob",
          "plugins.AdMob"
        ]
        },
      {
          "id": "cordova-plugin-inappbrowser.inappbrowser",
          "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
          "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
          "cordova.InAppBrowser.open",
          "window.open"
        ]
        },
      {
          "id": "cordova-plugin-contacts.convertUtils",
          "file": "plugins/cordova-plugin-contacts/www/convertUtils.js",
          "pluginId": "cordova-plugin-contacts"
        },
      {
          "id": "cordova-plugin-contacts.ContactFieldType",
          "file": "plugins/cordova-plugin-contacts/www/ContactFieldType.js",
          "pluginId": "cordova-plugin-contacts",
        "merges": [
          ""
        ]
        },
      {
          "id": "cordova-promise-polyfill.Promise",
          "file": "plugins/cordova-promise-polyfill/www/Promise.js",
          "pluginId": "cordova-promise-polyfill",
        "runs": true
        },
      {
          "id": "cordova-promise-polyfill.promise.min",
          "file": "plugins/cordova-promise-polyfill/www/promise.min.js",
          "pluginId": "cordova-promise-polyfill"
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-admob-sdk": "0.24.1",
      "cordova-plugin-admob-free": "0.27.0",
      "cordova-plugin-contacts": "3.0.1",
      "cordova-plugin-inappbrowser": "3.2.0",
      "cordova-promise-polyfill": "0.0.2",
      "phonegap-plugin-barcodescanner": "8.1.0"
    };
    // BOTTOM OF METADATA
    });
    