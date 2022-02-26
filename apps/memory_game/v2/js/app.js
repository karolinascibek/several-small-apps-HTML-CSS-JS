import { createSettings, settings } from "./settings-board/settings-board.js";
import { createBoard } from "./board/board.js";
import {createNav} from "./nav/nav.js";


createNav();
createBoard(settings);
createSettings();


