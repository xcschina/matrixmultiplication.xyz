import {MatrixID} from './index';

/**
 * This file defines "actions", which are events which may affect the state.
 */

export type Action =
  ResizeAction |
  StartMultiplyAction |
  NextStepAction |
  EndAction |
  ResetAction |
  AllowContinueAction;

export type Direction = 'row' | 'column';

export interface ResizeAction {
  type: 'RESIZE';
  payload: {
    target: MatrixID;
    resizeParam: {
      direction: Direction;
      amount: number;
    };
  }
}

export interface StartMultiplyAction {
  type: 'START_MULTIPLY';
  payload: null;
}

export interface NextStepAction {
  type: 'NEXT_STEP';
  payload: null;
}

export interface EndAction {
  type: 'END';
  payload: null;
}

export interface ResetAction {
  type: 'RESET';
  payload: null;
}

export interface AllowContinueAction {
  type: 'ALLOW_CONTINUE';
  payload: null;
}

/**
 * The functions below assist TypeScript's inference to know which action
 * sub-type we have based on the `type` field which is a string.
 */

export function isResizeAction(ac: Action): ac is ResizeAction {
  return ac.type === 'RESIZE';
}

export function isStartMultiplyAction(ac: Action): ac is StartMultiplyAction {
  return ac.type === 'START_MULTIPLY';
}

export function isNextStepAction(ac: Action): ac is NextStepAction {
  return ac.type === 'NEXT_STEP';
}

export function isEndAction(ac: Action): ac is EndAction {
  return ac.type === 'END';
}

export function isResetAction(ac: Action): ac is ResetAction {
  return ac.type === 'RESET';
}

export function isAllowContinueAction(ac: Action): ac is AllowContinueAction {
  return ac.type === 'ALLOW_CONTINUE';
}
