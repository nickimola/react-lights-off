var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useState } from "react";
import styled from "styled-components";
var ThemeSwtich = styled("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n"], ["\n  display: inline-block;\n  position: relative;\n"])));
var ThemeSwitchLabel = styled("label")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  width: 90px;\n  height: 50px;\n  background-color: #83d8ff;\n  border-radius: 84px;\n  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  margin: 0;\n  padding: 0;\n"], ["\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  width: 90px;\n  height: 50px;\n  background-color: #83d8ff;\n  border-radius: 84px;\n  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  margin: 0;\n  padding: 0;\n"])));
var ThemeSwitchHandle = styled("span")(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  z-index: 1;\n  top: 3px;\n  left: 3px;\n  width: 44px;\n  height: 44px;\n  background-color: #ffcf96;\n  border-radius: 50px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transform: rotate(-45deg);\n"], ["\n  display: inline-block;\n  position: relative;\n  z-index: 1;\n  top: 3px;\n  left: 3px;\n  width: 44px;\n  height: 44px;\n  background-color: #ffcf96;\n  border-radius: 50px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transform: rotate(-45deg);\n"])));
var Crater = styled("span")(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  background-color: #e8cda5;\n  opacity: 0;\n  transition: opacity 200ms ease-in-out;\n  border-radius: 100%;\n  &.crater-0 {\n    top: 18px;\n    left: 10px;\n    width: 4px;\n    height: 4px;\n  }\n  &.crater-1 {\n    top: 28px;\n    left: 22px;\n    width: 6px;\n    height: 6px;\n  }\n  &.crater-2 {\n    top: 18px;\n    left: 25px;\n    width: 8px;\n    height: 8px;\n  }\n"], ["\n  position: absolute;\n  background-color: #e8cda5;\n  opacity: 0;\n  transition: opacity 200ms ease-in-out;\n  border-radius: 100%;\n  &.crater-0 {\n    top: 18px;\n    left: 10px;\n    width: 4px;\n    height: 4px;\n  }\n  &.crater-1 {\n    top: 28px;\n    left: 22px;\n    width: 6px;\n    height: 6px;\n  }\n  &.crater-2 {\n    top: 18px;\n    left: 25px;\n    width: 8px;\n    height: 8px;\n  }\n"])));
var StarCloud = styled("span")(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  background-color: #ffffff;\n  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  border-radius: 50%;\n  &.star-0 {\n    top: 10px;\n    left: 35px;\n    z-index: 0;\n    width: 30px;\n    height: 3px;\n  }\n  &.star-1 {\n    top: 18px;\n    left: 28px;\n    z-index: 1;\n    width: 30px;\n    height: 3px;\n  }\n  &.star-2 {\n    top: 27px;\n    left: 40px;\n    z-index: 0;\n    width: 30px;\n    height: 3px;\n  }\n  &.star-3,\n  &.star-4,\n  &.star-5 {\n    opacity: 0;\n    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  }\n  &.star-3 {\n    top: 16px;\n    left: 11px;\n    z-index: 0;\n    width: 2px;\n    height: 2px;\n    transform: translate3d(3px, 0, 0);\n  }\n  &.star-4 {\n    top: 32px;\n    left: 17px;\n    z-index: 0;\n    width: 3px;\n    height: 3px;\n    transform: translate3d(3px, 0, 0);\n  }\n  &.star-5 {\n    top: 36px;\n    left: 28px;\n    z-index: 0;\n    width: 2px;\n    height: 2px;\n    transform: translate3d(3px, 0, 0);\n  }\n"], ["\n  position: absolute;\n  background-color: #ffffff;\n  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  border-radius: 50%;\n  &.star-0 {\n    top: 10px;\n    left: 35px;\n    z-index: 0;\n    width: 30px;\n    height: 3px;\n  }\n  &.star-1 {\n    top: 18px;\n    left: 28px;\n    z-index: 1;\n    width: 30px;\n    height: 3px;\n  }\n  &.star-2 {\n    top: 27px;\n    left: 40px;\n    z-index: 0;\n    width: 30px;\n    height: 3px;\n  }\n  &.star-3,\n  &.star-4,\n  &.star-5 {\n    opacity: 0;\n    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  }\n  &.star-3 {\n    top: 16px;\n    left: 11px;\n    z-index: 0;\n    width: 2px;\n    height: 2px;\n    transform: translate3d(3px, 0, 0);\n  }\n  &.star-4 {\n    top: 32px;\n    left: 17px;\n    z-index: 0;\n    width: 3px;\n    height: 3px;\n    transform: translate3d(3px, 0, 0);\n  }\n  &.star-5 {\n    top: 36px;\n    left: 28px;\n    z-index: 0;\n    width: 2px;\n    height: 2px;\n    transform: translate3d(3px, 0, 0);\n  }\n"])));
var ThemeSwitchInput = styled("input")(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  z-index: 9;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  &:focus {\n    border: none;\n    outline: none;\n  }\n  &:checked {\n    + ", " {\n      background-color: #749dd6;\n      &:before {\n        color: #749ed7;\n      }\n      &:after {\n        color: #ffffff;\n      }\n      ", " {\n        background-color: #ffe5b5;\n        transform: translate3d(40px, 0, 0) rotate(0);\n        ", " {\n          opacity: 1;\n        }\n      }\n      ", " {\n        &.star-0 {\n          width: 2px;\n          height: 2px;\n        }\n        &.star-1 {\n          width: 4px;\n          height: 4px;\n          transform: translate3d(-5px, 0, 0);\n        }\n        &.star-2 {\n          width: 2px;\n          height: 2px;\n          transform: translate3d(-7px, 0, 0);\n        }\n        &.star-3,\n        &.star-4,\n        &.star-5 {\n          opacity: 1;\n          transform: translate3d(0, 0, 0);\n        }\n        &.star-3 {\n          transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n        }\n        &.star-4 {\n          transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n        }\n        &.star-5 {\n          transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n        }\n      }\n    }\n  }\n"], ["\n  position: absolute;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  z-index: 9;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  &:focus {\n    border: none;\n    outline: none;\n  }\n  &:checked {\n    + ", " {\n      background-color: #749dd6;\n      &:before {\n        color: #749ed7;\n      }\n      &:after {\n        color: #ffffff;\n      }\n      ", " {\n        background-color: #ffe5b5;\n        transform: translate3d(40px, 0, 0) rotate(0);\n        ", " {\n          opacity: 1;\n        }\n      }\n      ", " {\n        &.star-0 {\n          width: 2px;\n          height: 2px;\n        }\n        &.star-1 {\n          width: 4px;\n          height: 4px;\n          transform: translate3d(-5px, 0, 0);\n        }\n        &.star-2 {\n          width: 2px;\n          height: 2px;\n          transform: translate3d(-7px, 0, 0);\n        }\n        &.star-3,\n        &.star-4,\n        &.star-5 {\n          opacity: 1;\n          transform: translate3d(0, 0, 0);\n        }\n        &.star-3 {\n          transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n        }\n        &.star-4 {\n          transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n        }\n        &.star-5 {\n          transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n        }\n      }\n    }\n  }\n"])), ThemeSwitchLabel, ThemeSwitchHandle, Crater, StarCloud);
export var ReactLightsOff = function (_a) {
    var lightsOff = _a.lightsOff, onChange = _a.onChange;
    var _b = useState(lightsOff), status = _b[0], setStatus = _b[1];
    var handleChange = function (evt) {
        setStatus(evt.target.checked);
        onChange && onChange(evt.target.checked);
    };
    return (React.createElement(ThemeSwtich, null,
        React.createElement(ThemeSwitchInput, { type: "checkbox", checked: status, name: "react-theme-switcher", onChange: function (evt) { return handleChange(evt); }, value: "" }),
        React.createElement(ThemeSwitchLabel, { htmlFor: "react-theme-switcher" },
            React.createElement(ThemeSwitchHandle, null, Array.from({ length: 3 }, function (_, index) { return (React.createElement(Crater, { key: index, className: "crater-" + index })); })),
            Array.from({ length: 6 }, function (_, index) { return (React.createElement(StarCloud, { key: index, className: "star-" + index })); }))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=ReactLightsOff.js.map