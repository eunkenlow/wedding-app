import React, { useState } from "react";
import useKeyPress from "../hooks/useKeyPress";
import useInterval from "../hooks/useInterval";

const Snake = () => {
	const GRID_SIZE = { x: 500, y: 500 };
	const BOX_SIZE = 20;
	const TICK_RATE = 100;

	const initialState = {
		direction: 'right',
		snake: [
			{ x: 7 * BOX_SIZE, y: 4 * BOX_SIZE, direction: 'right' },
			{ x: 6 * BOX_SIZE, y: 4 * BOX_SIZE, direction: 'right' },
			{ x: 5 * BOX_SIZE, y: 4 * BOX_SIZE, direction: 'right' },
			{ x: 4 * BOX_SIZE, y: 4 * BOX_SIZE, direction: 'right' },
			{ x: 3 * BOX_SIZE, y: 4 * BOX_SIZE, direction: 'right' },
		],
		food: null,
		score: 0,
		gameOver: true,
	}

	const mod = (n, m) => ((n % m) + m) % m;

	const [direction, setDirection] = useState(initialState.direction);
	const [snake, setSnake] = useState(initialState.snake);
	const [snakeMoving, setSnakeMoving] = useState(false);
	const [food, setFood] = useState(initialState.food);
	const [score, setScore] = useState(initialState.score);
	const [gameOver, setGameOver] = useState(initialState.gameOver);

	const getSnakeHead = () => snake[0];
	const getSnakeTail = () => snake[snake.length - 1];

	const generateFood = () => {
		const x = Math.floor(Math.random() * 25) * BOX_SIZE;
		const y = Math.floor(Math.random() * 25) * BOX_SIZE;
		if (snake.filter(s => s.x === x && s.y === y).length > 1) {
			return generateFood();
		}
		setFood({ x, y });
	};

	const isGameOver = () => {
		const head = getSnakeHead();
		return snake.filter(s => s.x === head.x && s.y === head.y).length > 1;
	};

	const changeDirection = (newDirection) => {
		if (newDirection !== direction && !snakeMoving) {
			switch (direction) {
				case 'up':
					if (newDirection !== 'down') setDirection(newDirection);
					break;
				case 'down':
					if (newDirection !== 'up') setDirection(newDirection);
					break;
				case 'left':
					if (newDirection !== 'right') setDirection(newDirection);
					break;
				case 'right':
					if (newDirection !== 'left') setDirection(newDirection);
					break;
			}
			setSnakeMoving(true);
		}
	}

	const moveSnake = () => {
		let { x, y } = getSnakeHead();
		switch (direction) {
			case 'up':
				y = mod(y - BOX_SIZE, GRID_SIZE.y);
				break;
			case 'down':
				y = mod(y + BOX_SIZE, GRID_SIZE.y);
				break;
			case 'left':
				x = mod(x - BOX_SIZE, GRID_SIZE.x);
				break;
			case 'right':
				x = mod(x + BOX_SIZE, GRID_SIZE.x);
				break;
		}
		const newSnake = [{ x, y, direction }];
		for (let i = 1; i < snake.length; i++) {
			newSnake.push({ ...snake[i - 1] });
		}
		setSnake(newSnake);
	};

	const isFoodEaten = () => {
		const head = getSnakeHead();
		if (head.x === food.x && head.y === food.y) {
			setScore(score + 10);
			growSnake();
			generateFood();
		};
	}

	const growSnake = () => {
		let { x, y, direction } = getSnakeTail();
		switch (direction) {
			case 'up':
				y = mod(y + BOX_SIZE, GRID_SIZE.y);
				break;
			case 'down':
				y = mod(y - BOX_SIZE, GRID_SIZE.y);
				break;
			case 'left':
				x = mod(x + BOX_SIZE, GRID_SIZE.x);
				break;
			case 'right':
				x = mod(x - BOX_SIZE, GRID_SIZE.x);
				break;
		}
		snake.push({ x, y, direction });
	}

	const gameTick = () => {
		if (isGameOver()) {
			setGameOver(initialState.gameOver);
			return;
		}
		isFoodEaten();
		moveSnake();
		setSnakeMoving(false);
	};

	const startGame = () => {
		if (gameOver) {
			setScore(initialState.score);
			setDirection(initialState.direction);
			setSnake(initialState.snake);
			generateFood();
			setGameOver(false);
		}
	}

	useKeyPress("ArrowUp", () => changeDirection("up"));
	useKeyPress("ArrowRight", () => changeDirection("right"));
	useKeyPress("ArrowDown", () => changeDirection("down"));
	useKeyPress("ArrowLeft", () => changeDirection("left"));

	useInterval(gameTick, gameOver ? null : TICK_RATE);

	return (
		<div>
			<p>
				Use the arrow keys to consume as many food as you can.
          	</p>
			<div
				className="snake-grid"
				style={{
					width: GRID_SIZE.x + "px",
					height: GRID_SIZE.y + "px"
				}}
			>
				{/* Score */}
				<div className="snake-score">
					Score: {score}
				</div>
				{/* Food */}
				{food ?
					<div
						className="snake-food"
						style={{
							left: food.x + "px",
							top: food.y + "px",
							width: BOX_SIZE + "px",
							height: BOX_SIZE + "px"
						}}
					/> : null}
				{/* Snake */}
				{snake &&
					snake.map((s, i) => (
						<div
							key={i}
							className="snake"
							style={{
								left: s.x + "px",
								top: s.y + "px",
								width: BOX_SIZE + "px",
								height: BOX_SIZE + "px",
								background: i % 2 === 0 ? '#5c0d09' : '#d44601'
							}}
						/>
					))}
				{/* Play */}
				{gameOver ?
					<div className="snake-screen">
						<div>
							<h3>Game over :(</h3>
							<h4>Final score: {score}</h4>
							<form>
								<div className="fields">
									<div className="field">
										<input type="text" placeholder="Player name" name="name" id="name" />
									</div>
								</div>
								<ul className="actions">
									<li>
										<input type="button" className="primary" value="Submit" />
									</li>
									<li>
										<input type="button" value="Play again" onClick={startGame} />
									</li>
								</ul>
							</form>
						</div>
					</div> : null
				}
			</div>
			<br></br>
			<h3 className="major">Top 10 Leaderboard</h3>
		</div>
	);
};

export default Snake;
