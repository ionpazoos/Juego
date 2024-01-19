import {Key} from "./constants.js"
import globals from "./globals.js"


export function keyDownHandeler(event){

    switch(event.keyCode){
        case Key.UP:
            globals.action.moveUp = true;
            console.log("up");
            break;

            case Key.DOWN:
                globals.action.moveDown = true;
                break;
            case Key.LEFT:
                    globals.action.moveLeft = true;
                    break;
            case Key.RIGHT:
                    globals.action.moveRight = true;

            case Key.Space:
                globals.action.space = true;
                break;
            case Key.esc:
                    globals.action.esc = true;
                        
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
                    break;
            case Key.RIGHT:
                    globals.action.moveRight = false;
                    break;

            case Key.Space:
                globals.action.space = false;
                    
                    break;
            case Key.esc:
                        globals.action.esc = false;
                            
                            break;
    }
}