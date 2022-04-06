import React from 'react'

export default function ScreenPlayer(props) {
  const { player } = props;
  return (
    <div>
      <div className="scoreContent">
        <h2>{`PLAYER ${player}`}</h2>
        <h2 data-testid={`score-act-p${player}`}>score</h2>

        <h3>Total</h3>
        <h2 data-testid={`score-total-p${player}`}>score</h2>
      </div>
    </div>
  )
}
