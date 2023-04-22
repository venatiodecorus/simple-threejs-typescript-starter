import { EventEmitter } from './utilities/EventEmitter'
import { Engine } from './Engine'

export class Input extends EventEmitter {
  static keys: { [key: string]: boolean } = {}

  constructor(private engine: Engine) {
    super()

    document.onkeydown = document.onkeyup = (event) => {
      Input.keys[event.key] = event.type === 'keydown'

      if (event.type === 'keydown') {
        this.emit('keydown', Input.keys)
      } else {
        this.emit('keyup', Input.keys)
      }
    }
  }
}
