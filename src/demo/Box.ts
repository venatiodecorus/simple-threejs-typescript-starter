import * as THREE from 'three'
import vertexShader from './shader.vert'
import fragmentShader from './shader.frag'
import { Input } from '../engine/Input'

export class Box extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
    })

    super(geometry, material)
  }

  update() {
    if (Input.keys['w']) {
      this.position.y += 0.1
    }
  }
}
