"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadSegment = exports.DamageEffectType = exports.CurrencyType = void 0;
var CurrencyType;
(function (CurrencyType) {
    CurrencyType[CurrencyType["RUB"] = 0] = "RUB";
    CurrencyType[CurrencyType["USD"] = 1] = "USD";
    CurrencyType[CurrencyType["EUR"] = 2] = "EUR";
})(CurrencyType = exports.CurrencyType || (exports.CurrencyType = {}));
var DamageEffectType;
(function (DamageEffectType) {
    DamageEffectType[DamageEffectType["Fracture"] = 0] = "Fracture";
    DamageEffectType[DamageEffectType["HeavyBleeding"] = 1] = "HeavyBleeding";
    DamageEffectType[DamageEffectType["LightBleeding"] = 2] = "LightBleeding";
    DamageEffectType[DamageEffectType["Contusion"] = 3] = "Contusion";
    DamageEffectType[DamageEffectType["Intoxication"] = 4] = "Intoxication";
    DamageEffectType[DamageEffectType["RadExposure"] = 5] = "RadExposure";
    DamageEffectType[DamageEffectType["Pain"] = 6] = "Pain";
    DamageEffectType[DamageEffectType["DestroyedPart"] = 7] = "DestroyedPart";
})(DamageEffectType = exports.DamageEffectType || (exports.DamageEffectType = {}));
var HeadSegment;
(function (HeadSegment) {
    HeadSegment[HeadSegment["Top"] = 0] = "Top";
    HeadSegment[HeadSegment["Nape"] = 1] = "Nape";
    HeadSegment[HeadSegment["Ears"] = 2] = "Ears";
    HeadSegment[HeadSegment["Eyes"] = 3] = "Eyes";
    HeadSegment[HeadSegment["Jaws"] = 4] = "Jaws";
})(HeadSegment = exports.HeadSegment || (exports.HeadSegment = {}));
