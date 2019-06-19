const { useState } = React

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const hasWinner = (values: number[]) => {
  for (const [i, j, k] of lines) {
    if (values[i]
      && values[i] === values[j]
      && values[j] === values[k]) return true;
  }
  return false;
};

const TicTacToe: React.FC = () => {
  const initValues = Array(9).fill('');
  const initPlayer = 'O';
  const initWinner = '';

  const [values, setValues] = useState(initValues);
  const [player, setPlayer] = useState(initPlayer);
  const [winner, setWinner] = useState(initWinner);

  const play = (index: number) => {
    if (winner) return;
    if (values[index]) return;

    const newValues = [
      ...values.slice(0, index),
      player,
      ...values.slice(index + 1),
    ];

    setValues(newValues);

    if (hasWinner(newValues)) {
      setWinner(player);
      return;
    }

    setPlayer(player === 'O' ? 'X' : 'O');
  };

  const reset = () => {
    setValues(initValues);
    setPlayer(initPlayer);
    setWinner(initWinner);
  };

  return (
    <div>
      <div className="grids">
        {values.map((value, index) => (
          <div role="button" tabIndex={0} key={index} 
             onClick={ () => play(index) }
             onKeyPress={ () => play(index) }
          >
            {value}
          </div>
        ))}
      </div>

      <div className="info">
        <button type="button" onClick={reset}>Reset</button>
      </div>

    </div>
  );
};

ReactDOM.render(<TicTacToe />, document.getElementById('app'));