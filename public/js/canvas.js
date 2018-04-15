var canvas = document.querySelector('canvas');
var scene = new THREE.Scene();
var aspect = canvas.clientWidth / canvas.clientHeight;
var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true});
renderer.setSize(canvas.clientWidth, canvas.clientHeight);

scene.fog = new THREE.Fog( 0xffffff, 1, 10000 );
var geometry = new THREE.BoxGeometry(20, 20, 20);
var material = new THREE.MeshNormalMaterial();
group = new THREE.Group();

for ( var i = 0; i < 1000; i ++ ) {
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = Math.random() * 2000 - 1000;
  mesh.position.y = Math.random() * 2000 - 1000;
  mesh.position.z = Math.random() * 2000 - 1000;
  mesh.rotation.x = Math.random() * 2 * Math.PI;
  mesh.rotation.y = Math.random() * 2 * Math.PI;
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();
  group.add( mesh );
}

scene.add(group);
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
	camera.aspect = canvas.clientWidth / canvas.clientHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(canvas.clientWidth, canvas.clientHeight);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  var time = Date.now() * 0.001;
  var rx = Math.sin(time * 0.7) * 0.1,
  ry = Math.sin(time * 0.3) * 0.1,
  rz = Math.sin(time * 0.2) * 0.1;
  camera.lookAt(scene.position);
  group.rotation.x = rx;
  group.rotation.y = ry;
  group.rotation.z = rz;
  renderer.render(scene, camera);
}

animate();
