import React from 'react';
import { storiesOf } from '@storybook/react';
import InlineList from '../doit-ui/InlineList';
import { css } from '../doit-ui/withStyles';

function RedBox({ children }) {
  return (
    <div {...css({ backtroundColor: 'red', padding: 30, height: Math.random() * 100 })}>
      {children}
    </div>
  );
}

storiesOf('Doit-UI/InlineList', module)
  .add('기본설정', () => (
    <InlineList>
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ))
  .add('align=center', () => (
    <InlineList align="center">
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ))
  .add('align=right', () => (
    <InlineList align="right">
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ))
  .add('verticalAlign=top', () => (
    <InlineList verticalAlign="top">
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ))
  .add('verticalAlign=bottom', () => (
    <InlineList verticalAlign="bottom">
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ));
