import React from "react";

export const If = props => {
  React.Children.map(props.children, child =>
    React.cloneElement(child, { condition: props.condition })
  );
};

const render = (condition = false, children = null) => {
  return !!condition ? children : null;
};

export const When = props => render(props.condition, props.children);
export const Unless = props => render(!props.condition, props.children);
export const Then = props => render(props.condition, props.children);
export const Else = props => render(!props.condition, props.children);
