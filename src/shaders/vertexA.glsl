uniform float uTime;
varying vec2 vUv;

void main()
{
    vec3 pos = position;

    
    pos.x += tan(pos.x * 0.2 + uTime) * 0.000002;
    pos.z += sin(pos.y * 1.5 * uTime) * 1.1;

   
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vUv = uv; 
}