import React, { useState } from "react";
import styled from "styled-components";
import { ReactLightsOffProps } from "..";

const ThemeSwtich = styled("div")`
  display: inline-block;
  position: relative;
`;

const ThemeSwitchLabel = styled("label")`
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 90px;
  height: 50px;
  background-color: #83d8ff;
  border-radius: 84px;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  margin: 0;
  padding: 0;
`;

const ThemeSwitchHandle = styled("span")`
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 3px;
  left: 3px;
  width: 44px;
  height: 44px;
  background-color: #ffcf96;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: rotate(-45deg);
`;

const Crater = styled("span")`
  position: absolute;
  background-color: #e8cda5;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  border-radius: 100%;
  &.crater-0 {
    top: 18px;
    left: 10px;
    width: 4px;
    height: 4px;
  }
  &.crater-1 {
    top: 28px;
    left: 22px;
    width: 6px;
    height: 6px;
  }
  &.crater-2 {
    top: 18px;
    left: 25px;
    width: 8px;
    height: 8px;
  }
`;

const StarCloud = styled("span")`
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
  &.star-0 {
    top: 10px;
    left: 35px;
    z-index: 0;
    width: 30px;
    height: 3px;
  }
  &.star-1 {
    top: 18px;
    left: 28px;
    z-index: 1;
    width: 30px;
    height: 3px;
  }
  &.star-2 {
    top: 27px;
    left: 40px;
    z-index: 0;
    width: 30px;
    height: 3px;
  }
  &.star-3,
  &.star-4,
  &.star-5 {
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
  &.star-3 {
    top: 16px;
    left: 11px;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
  }
  &.star-4 {
    top: 32px;
    left: 17px;
    z-index: 0;
    width: 3px;
    height: 3px;
    transform: translate3d(3px, 0, 0);
  }
  &.star-5 {
    top: 36px;
    left: 28px;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
  }
`;

const ThemeSwitchInput = styled("input")`
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 9;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    border: none;
    outline: none;
  }
  &:checked {
    + ${ThemeSwitchLabel} {
      background-color: #749dd6;
      &:before {
        color: #749ed7;
      }
      &:after {
        color: #ffffff;
      }
      ${ThemeSwitchHandle} {
        background-color: #ffe5b5;
        transform: translate3d(40px, 0, 0) rotate(0);
        ${Crater} {
          opacity: 1;
        }
      }
      ${StarCloud} {
        &.star-0 {
          width: 2px;
          height: 2px;
        }
        &.star-1 {
          width: 4px;
          height: 4px;
          transform: translate3d(-5px, 0, 0);
        }
        &.star-2 {
          width: 2px;
          height: 2px;
          transform: translate3d(-7px, 0, 0);
        }
        &.star-3,
        &.star-4,
        &.star-5 {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
        &.star-3 {
          transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
        &.star-4 {
          transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
        &.star-5 {
          transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
      }
    }
  }
`;

export const ReactLightsOff: React.FC<ReactLightsOffProps> = ({
  lightsOff,
  onChange,
}) => {
  const [status, setStatus] = useState<boolean>(lightsOff);

  const handleChange = (evt) => {
    setStatus(evt.target.checked);
    onChange && onChange(evt.target.checked);
  };

  return (
    <ThemeSwtich>
      <ThemeSwitchInput
        type="checkbox"
        checked={status}
        name="react-theme-switcher"
        onChange={(evt) => handleChange(evt)}
        value={""}
      />
      <ThemeSwitchLabel htmlFor="react-theme-switcher">
        <ThemeSwitchHandle>
          {Array.from({ length: 3 }, (_, index) => (
            <Crater key={index} className={`crater-${index}`}></Crater>
          ))}
        </ThemeSwitchHandle>
        {Array.from({ length: 6 }, (_, index) => (
          <StarCloud key={index} className={`star-${index}`}></StarCloud>
        ))}
      </ThemeSwitchLabel>
    </ThemeSwtich>
  );
};
