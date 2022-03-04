import { createSettings} from "./settings-board/settings-board.js";
import { createBoard } from "./board/board.js";
import { createNav } from "./nav/nav.js";
import { settings } from "./settings-board/Settings.js";

createNav(); 
createBoard(settings);
createSettings();


