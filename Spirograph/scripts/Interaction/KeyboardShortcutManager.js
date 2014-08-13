﻿/// <reference path='../definitions/references.d.ts' />
var Spirograph;
(function (Spirograph) {
    (function (Interaction) {
        (function (KeyboardShortcutManager) {
            'use strict';

            (function (Key) {
                Key[Key["Enter"] = 13] = "Enter";
                Key[Key["Shift"] = 16] = "Shift";
                Key[Key["Ctrl"] = 17] = "Ctrl";
                Key[Key["Escape"] = 27] = "Escape";
                Key[Key["LeftArrow"] = 37] = "LeftArrow";
                Key[Key["UpArrow"] = 38] = "UpArrow";
                Key[Key["RightArrow"] = 39] = "RightArrow";
                Key[Key["DownArrow"] = 40] = "DownArrow";
            })(KeyboardShortcutManager.Key || (KeyboardShortcutManager.Key = {}));
            var Key = KeyboardShortcutManager.Key;
            ;

            var keydownCallbacks = {}, keyupCallbacks = {};

            function add(key, keydownCallback, keyupCallback) {
                if (!(key in keydownCallbacks)) {
                    keydownCallbacks[key] = new Array();
                }
                if (!(key in keyupCallbacks)) {
                    keyupCallbacks[key] = new Array();
                }

                if (keydownCallback)
                    keydownCallbacks[key].push(keydownCallback);

                if (keyupCallback)
                    keyupCallbacks[key].push(keyupCallback);
            }
            KeyboardShortcutManager.add = add;

            function remove(key, callback) {
                var keepGoing = true;
                while (keepGoing) {
                    var indexToRemove = keydownCallbacks[key].indexOf(callback);
                    if (indexToRemove !== -1) {
                        keydownCallbacks[key].splice(indexToRemove, 1);
                    } else {
                        keepGoing = false;
                    }
                }
            }
            KeyboardShortcutManager.remove = remove;

            (function () {
                $(window).on('keydown', function (e) {
                    if (e.which in keydownCallbacks) {
                        keydownCallbacks[e.which].forEach(function (callback) {
                            return callback();
                        });
                    }
                });

                $(window).on('keyup', function (e) {
                    if (e.which in keyupCallbacks) {
                        keyupCallbacks[e.which].forEach(function (callback) {
                            return callback();
                        });
                    }
                });
            })();
        })(Interaction.KeyboardShortcutManager || (Interaction.KeyboardShortcutManager = {}));
        var KeyboardShortcutManager = Interaction.KeyboardShortcutManager;
    })(Spirograph.Interaction || (Spirograph.Interaction = {}));
    var Interaction = Spirograph.Interaction;
})(Spirograph || (Spirograph = {}));
//# sourceMappingURL=KeyboardShortcutManager.js.map
