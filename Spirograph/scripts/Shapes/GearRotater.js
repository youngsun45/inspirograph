﻿/// <reference path='../definitions/references.d.ts' />
var Spirograph;
(function (Spirograph) {
    (function (Shapes) {
        'use strict';

        var GearRotater = (function () {
            function GearRotater(fixedGearOptions) {
                this._teethBuffer = 2;
                this._fixedGearOptions = fixedGearOptions;
            }
            GearRotater.prototype.rotate = function (rotatingGearOptions, mouseAngleAsDegrees, holeOptions, toothOffset) {
                var radius = this._fixedGearOptions.radius + rotatingGearOptions.radius + this._teethBuffer;

                //TODO: normalize tooth height handling
                radius += this._fixedGearOptions.toothHeight;

                var gearX = radius * Math.cos(Spirograph.Utility.toRadians(mouseAngleAsDegrees)) + Spirograph.getSvgCenterX();
                var gearY = -1 * radius * Math.sin(Spirograph.Utility.toRadians(mouseAngleAsDegrees)) + Spirograph.getSvgCenterY();

                //TODO: normalize tooth height handling
                var gearRotation = -360 * (((mouseAngleAsDegrees / 360) * 2 * Math.PI * (this._fixedGearOptions.radius)) / (2 * Math.PI * rotatingGearOptions.radius));
                gearRotation -= (mouseAngleAsDegrees);

                // move the gear's rotation by half a tooth width, so the teeth visually mesh
                if (rotatingGearOptions.toothCount % 2 === 0) {
                    gearRotation += (360 / rotatingGearOptions.toothCount) / 2;
                }

                gearRotation += toothOffset * (-360 / rotatingGearOptions.toothCount);

                var penXModifer = holeOptions.positionRadius * Math.cos(Spirograph.Utility.toRadians(holeOptions.angle) + Spirograph.Utility.toRadians(gearRotation));
                var penYModifier = holeOptions.positionRadius * Math.sin(Spirograph.Utility.toRadians(holeOptions.angle) + Spirograph.Utility.toRadians(gearRotation));

                return {
                    x: gearX,
                    y: gearY,
                    angle: gearRotation,
                    penX: gearX + penXModifer,
                    penY: gearY + penYModifier
                };
            };
            return GearRotater;
        })();
        Shapes.GearRotater = GearRotater;
    })(Spirograph.Shapes || (Spirograph.Shapes = {}));
    var Shapes = Spirograph.Shapes;
})(Spirograph || (Spirograph = {}));
//# sourceMappingURL=GearRotater.js.map
