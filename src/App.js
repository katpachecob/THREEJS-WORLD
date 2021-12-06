import './App.css';
import * as THREE from "three"
import image from "./mpo.jpeg"


let camera, scena, renderer, sphera

const Sphera = () =>{

  // creamos la escena

  scena = new THREE.Scene()
  scena.background = new THREE.Color(0x1000000)

  // creamos la camara

  camera= new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight,0.1,1000)

  //creamos el render
  renderer =  new THREE.WebGLRenderer()

  renderer.setSize(window.innerWidth,window.innerHeight)
  
  document.body.appendChild(renderer.domElement)

  var geometry =  new THREE.SphereGeometry()
  var material = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(image)})
  sphera = new THREE.Mesh(geometry,material)

  scena.add(sphera)

  camera.position.z=4

  animate()
}

function animate(){
  requestAnimationFrame(animate)
  sphera.rotation.y += 0.002;
  renderer.render(scena, camera);
}


function App() {


  return (
    <div className="App">
     {Sphera()}
    </div>
  );
}

export default App;
