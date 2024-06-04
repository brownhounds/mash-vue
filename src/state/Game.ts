import { GameState } from './GameState';

export class Game {
    constructor(public game = new GameState()) {}

    public newGame() {
        this.game = new GameState();
    }
}
