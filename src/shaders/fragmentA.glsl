varying vec2 vUv;
precision mediump float;

void main() {
    vec3 color1 = vec3(0.29, 0.34, 0.91);  
    vec3 color2 = vec3(0.39, 0.56, 0.92); 

    float blendC = (sin( vUv.x * 3.0));

    vec3 mixColor = mix(color1, color2, blendC);

    gl_FragColor = vec4(mixColor, 1.0);
}