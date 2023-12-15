import {Key} from "./constants.js"
import globals from "./globals.js"


export function keyDownHandeler(event){

    switch(event.keyCode){
        case Key.UP:
            globals.action.moveUp = true;
            break;

            case Key.DOWN:
                globals.action.moveDown = true;
                break;
            case Key.LEFT:
                    globals.action.moveLeft = true;
                    break;
            case Key.RIGHT:
                    globals.action.moveRight = true;
                    
                    break;
    }
}


export function keyupHandeler(event){

    switch(event.keyCode){
        case Key.UP:
            globals.action.moveUp = false;
            break;

            case Key.DOWN:
                globals.action.moveDown = false;
                break;
            case Key.LEFT:
                    globals.action.moveLeft = false;
                    console.log("levantar");
                    break;
            case Key.RIGHT:
                    globals.action.moveRight = false;
                    break;
    }
}