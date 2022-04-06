/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
// import { fireEvent, screen } from '@testing-library/dom';
import App from '../App';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';

// import { renderWithRouterAndStore } from './testConfig';

// afterEach(() => jest.clearAllMocks());

const SCORE_ACTUAL_PLAYER1 = 'score-act-p1';
const SCORE_ACTUAL_PLAYER2 = 'score-act-p2';
const SCORE_TOTAL_PLAYER1 = 'score-total-p1';
const SCORE_TOTAL_PLAYER2 = 'score-total-p2';
const BUTTON_NEW_GAME = 'btn-new-game';
const BUTTON_ROLL_DICE = 'btn-roll-dice';
const BUTTON_HOLD_SCORE = 'btn-hold-score';

describe('1. CONTRUÇÃO - os elementos requeridos devem estar na página', () => {
  it('Verifica se existe a pontuação ATUAL do player 1', async () => {
    act(() => {
      render(<App />);
    });
    const result = await screen.findByTestId(SCORE_ACTUAL_PLAYER1);
    expect(result).toBeInTheDocument();
  });

  it('Verifica se existe a pontuação ATUAL do player 2', async () => {
    act(() => {
      render(<App />);
    });
    const result = await screen.findByTestId(SCORE_ACTUAL_PLAYER2);
    expect(result).toBeInTheDocument();
  });

  it('Verifica se existe a pontuação TOTAL do player 1', async () => {
    act(() => {
      render(<App />);
    });
    const result = await screen.findByTestId(SCORE_TOTAL_PLAYER1);
    expect(result).toBeInTheDocument();
  });

  it('Verifica se existe a pontuação TOTAL do player 2', async () => {
    act(() => {
      render(<App />);
    });
    const result = await screen.findByTestId(SCORE_TOTAL_PLAYER2);
    expect(result).toBeInTheDocument();
  });

  it('Verifica se existe o botão NEW GAME', async () => {
    act(() => {
      render(<App />);
    });
    const result = await screen.findByTestId(BUTTON_NEW_GAME);
    expect(result).toBeInTheDocument();
  });

  it('Verifica se existe o botão ROLL DICE', async () => {
    act(() => {
      render(<App />);
    });
    const result = await screen.findByTestId(BUTTON_ROLL_DICE);
    expect(result).toBeInTheDocument();
  });

  it('Verifica se existe o botão HOLD', async () => {
    act(() => {
      render(<App />);
    });
    const result = await screen.findByTestId(BUTTON_HOLD_SCORE);
    expect(result).toBeInTheDocument();
  });
});

