import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PLYLoader } from 'three/addons/loaders/PLYLoader.js';

const container = document.getElementById('container1');
container.style.position = 'relative';
let renderer, stats, gui;
let scene, camera, controls, pointCloud, dirlight, ambientLight;
let isinitialized = false;

// Container 2
const container2 = document.getElementById('container2');
container2.style.position = 'relative';
let renderer2, stats2, gui2;
let scene2, camera2, controls2, pointCloud2, dirlight2, ambientLight2;
let isinitialized2 = false;

// Container 3
const container3 = document.getElementById('container3');
container3.style.position = 'relative';
let renderer3, stats3, gui3;
let scene3, camera3, controls3, pointCloud3, dirlight3, ambientLight3;
let isinitialized3 = false;

function initScene() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.5), 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight * 0.5);
    container.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.addEventListener('change', function () { renderer.render(scene, camera); });

    dirlight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirlight.position.set(0, 0, 1);
    scene.add(dirlight);

    ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);


	const loader = new PLYLoader();
    loader.load(
        '../assets/point_cloud_laptop_final.ply',
        function (geometry) {
            // Create a material for the points
            let  material = new THREE.PointsMaterial({ size: 0.05, vertexColors: true });

            let points = new THREE.Points(geometry, material);
            points.position.set(0, 0, 0);
            points.name = "pointCloud"; // Define objectName or set a static name
            scene.add(points);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.error('Failed to load PLY file:', error);
        }
    );
    

    camera.position.z = 5;
}

function initScene2() {
    scene2 = new THREE.Scene();
    scene2.background = new THREE.Color(0xffffff);
    camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.5), 0.1, 1000);

    renderer2 = new THREE.WebGLRenderer();
    renderer2.setSize(window.innerWidth, window.innerHeight * 0.5);
    container2.appendChild(renderer2.domElement);

    controls2 = new OrbitControls(camera2, renderer2.domElement);
    controls2.minDistance = 2;
    controls2.maxDistance = 10;
    controls2.addEventListener('change', function () { renderer2.render(scene2, camera2); });

    dirlight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    dirlight2.position.set(0, 0, 1);
    scene2.add(dirlight2);

    ambientLight2 = new THREE.AmbientLight(0x404040, 2);
    scene2.add(ambientLight2);

    let loader2 = new PLYLoader();
    loader2.load(
        '../assets/sparse_pc.ply',
        function (geometry) {
            // Create a material for the points
            let material2 = new THREE.PointsMaterial({ size: 0.05, vertexColors: true });

            let points2 = new THREE.Points(geometry, material2);
            points2.position.set(0, 0, 0);
            points2.name = "pointCloud"; // Define objectName or set a static name
            scene2.add(points2);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.error('Failed to load PLY file:', error);
        }
    );

    camera2.position.z = 5;
}


function initScene3() {
    scene3 = new THREE.Scene();
    scene3.background = new THREE.Color(0xffffff);
    camera3 = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.5), 0.1, 1000);

    renderer3 = new THREE.WebGLRenderer();
    renderer3.setSize(window.innerWidth, window.innerHeight * 0.5);
    container3.appendChild(renderer3.domElement);

    controls3 = new OrbitControls(camera3, renderer3.domElement);
    controls3.minDistance = 2;
    controls3.maxDistance = 10;
    controls3.addEventListener('change', function () { renderer3.render(scene3, camera3); });

    dirlight3 = new THREE.DirectionalLight(0xffffff, 0.5);
    dirlight3.position.set(0, 0, 1);
    scene3.add(dirlight3);

    ambientLight3 = new THREE.AmbientLight(0x404040, 2);
    scene3.add(ambientLight3);

    let loader3 = new PLYLoader();
    loader3.load(
        '../assets/splat.ply',
        function (geometry) {
            // Create a material for the points
            let  material3 = new THREE.PointsMaterial({ size: 0.05, vertexColors: true });

            let points3 = new THREE.Points(geometry, material3);
            points3.position.set(0, 0, 0);
            points3.name = "pointCloud"; // Define objectName or set a static name
            scene3.add(points3);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.error('Failed to load PLY file:', error);
        }
    );

    camera3.position.z = 5;
}

function initSTATS() {
    stats = new Stats();
    stats.showPanel(0);
    stats.dom.style.position = 'absolute';
    stats.dom.style.top = 0;
    stats.dom.style.left = 0;
    container.appendChild(stats.dom);
}

function initGUI() {
    if (!isinitialized) {
        gui = new GUI();
        pointCloud = scene.getObjectByName("pointCloud");
        // Adjust GUI according to your requirements
        isinitialized = true;
    }
}

function initSTATS2() {
    stats2 = new Stats();
    stats2.showPanel(0);
    stats2.dom.style.position = 'absolute';
    stats2.dom.style.top = 0;
    stats2.dom.style.left = 0;
    container2.appendChild(stats2.dom);
}

function initGUI2() {
    if (!isinitialized2) {
        gui2 = new GUI();
        pointCloud2 = scene2.getObjectByName("pointCloud2");
        // Adjust GUI according to your requirements
        isinitialized2 = true;
    }
}

function initSTATS3() {
    stats3 = new Stats();
    stats3.showPanel(0);
    stats3.dom.style.position = 'absolute';
    stats3.dom.style.top = 0;
    stats3.dom.style.left = 0;
    container3.appendChild(stats3.dom);
}

function initGUI3() {
    if (!isinitialized3) {
        gui3 = new GUI();
        pointCloud3 = scene3.getObjectByName("pointCloud3");
        // Adjust GUI according to your requirements
        isinitialized3 = true;
    }
}

function animate() {
    requestAnimationFrame(animate);

    pointCloud = scene.getObjectByName("pointCloud");
    if (pointCloud) {
        // Perform any necessary animations or updates
        initGUI(); // initialize the GUI after the object is loaded
    }

    renderer.render(scene, camera);
    stats.update();
}

function animate2() {
    requestAnimationFrame(animate2);

    pointCloud2 = scene2.getObjectByName("pointCloud2");
    if (pointCloud2) {
        // Perform any necessary animations or updates
        initGUI2(); // initialize the GUI after the object is loaded
    }

    renderer2.render(scene2, camera2);
    stats2.update();
}

function animate3() {
    requestAnimationFrame(animate3);

    pointCloud3 = scene3.getObjectByName("pointCloud3");
    if (pointCloud3) {
        // Perform any necessary animations or updates
        initGUI3(); // initialize the GUI after the object is loaded
    }

    renderer3.render(scene3, camera3);
    stats3.update();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / (window.innerHeight * 0.5);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight * 0.5);

    camera2.aspect = window.innerWidth / (window.innerHeight * 0.5);
    camera2.updateProjectionMatrix();
    renderer2.setSize(window.innerWidth, window.innerHeight * 0.5);

    camera3.aspect = window.innerWidth / (window.innerHeight * 0.5);
    camera3.updateProjectionMatrix();
    renderer3.setSize(window.innerWidth, window.innerHeight * 0.5);
};

window.addEventListener('resize', onWindowResize, false);

initScene();
initScene2();
initScene3();
initSTATS();
initSTATS2();
initSTATS3();
animate();
animate2();
animate3();