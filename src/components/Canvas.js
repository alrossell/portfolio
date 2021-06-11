
import React, { useRef, useEffect } from 'react'

const Canvas = (props) => {


 let canvas

 function changeDimensions () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
  
    const canvasRef = useRef(null)
    const stars = props.stars
    const starColor = props.starColor

    const clear = (context, canvas) => {
        context.clearRect(0, 0, canvas.width, canvas.height)
    };

    const putPixel = (context, x, y, brightness, color, size) => {
      const intensity = brightness * 255;
      const rgb = "rgb(" + intensity/color[0] + "," + intensity/color[1] + "," + intensity/color[2] + ")";

      context.beginPath();
      context.arc(x, y, size, 0, 2 * Math.PI, false);
      context.fillStyle = rgb;
      context.fill();
    };

    const moveStars = (context, distance) => {
      const count = stars.length;
      for (var i = 0; i < count; i++) {
        const s = stars[i].cord;
        s.z -= distance;
        while (s.z <= 1) {
          s.z += 1000;
          stars[i].color = [Math.random() * 5 + 1, Math.random() * 5 + 1, Math.random() * 5 + 1]
          stars[i].color =  starColor
        }
      }
    };


    const draw = (context, canvas, frameCount) => {
        
        moveStars(context, 1.5);

        clear(context, canvas);

        const portrait = document.getElementById("portrait");

        const cx = portrait.getBoundingClientRect().right - (portrait.getBoundingClientRect().width/2);
        const cy = portrait.getBoundingClientRect().bottom - (portrait.getBoundingClientRect().height/2);

        const count = stars.length;
        for (var i = 0; i < count; i++) {
            const star = stars[i].cord;

            const x = cx + star.x / (star.z * 0.001);
            const y = cy + star.y / (star.z * 0.001);

            if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) {
              continue;
            }

            const d = star.z / 1000.0;
            const b = 1 - d * d;
            putPixel(context, x, y, b, stars[i].color, stars[i].size);
        }
    }




  window.onresize = () => {
      changeDimensions()
  }
  
  useEffect(() => {
    
    canvas = canvasRef.current
    const context = canvas.getContext('2d')

    changeDimensions()

    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, canvas, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas