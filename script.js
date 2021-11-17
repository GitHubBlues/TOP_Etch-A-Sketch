        const container = document.querySelectorAll('.container');
        
        function paint(e){
            e.target.style.background='black';            
        }

        function erase(e){
            e.target.style.background='white';            
        }
        
        function rdRgb() {
            let c = Math.floor(Math.random()*255);
            return c;
        }

        function random(e){
            e.target.style.background= `rgb(${rdRgb()}, ${rdRgb()}, ${rdRgb()})`;            
        }

        function shadow(e){
            let opacity = e.target.getAttribute("data-opacity");
            e.target.style.background= `rgba(111, 40, 155, ${opacity})`;            
            if (opacity<=0.9)  e.target.setAttribute("data-opacity", Number(opacity)+0.1);
            console.log(opacity);
        }

        function black(e){
            e.target.style.background='black';            
        }

        function eraseCanvas(){
            const allDivs = document.querySelectorAll(".xs-divs");
            const allDivsArr = Array.prototype.slice.call(allDivs);            
            
            for(i=0; i<allDivsArr.length; i++){
                allDivsArr[i].removeEventListener("mouseover", paint);
                allDivsArr[i].removeEventListener("mouseover", black);
                allDivsArr[i].removeEventListener("mouseover", random);
                allDivsArr[i].removeEventListener("mouseover", shadow);
                allDivsArr[i].addEventListener("mouseover", erase);
            }            
        }

        function paintBlack(){
            const allDivs = document.querySelectorAll(".xs-divs");
            const allDivsArr = Array.prototype.slice.call(allDivs);            
            for(i=0; i<allDivsArr.length; i++){
                allDivsArr[i].removeEventListener("mouseover", paint);
                allDivsArr[i].removeEventListener("mouseover", erase);
                allDivsArr[i].removeEventListener("mouseover", random);
                allDivsArr[i].removeEventListener("mouseover", shadow);
                allDivsArr[i].addEventListener("mouseover", black);
            }            
        }        
        
        function randomPaint(){
            const allDivs = document.querySelectorAll(".xs-divs");
            const allDivsArr = Array.prototype.slice.call(allDivs);            
            for(i=0; i<allDivsArr.length; i++){
                allDivsArr[i].removeEventListener("mouseover", paint);
                allDivsArr[i].removeEventListener("mouseover", erase);
                allDivsArr[i].removeEventListener("mouseover", random);
                allDivsArr[i].removeEventListener("mouseover", shadow);
                allDivsArr[i].addEventListener("mouseover", random);
            }            
        }   

        function shadowPaint(){
            const allDivs = document.querySelectorAll(".xs-divs");
            const allDivsArr = Array.prototype.slice.call(allDivs);            
            for(i=0; i<allDivsArr.length; i++){
                allDivsArr[i].removeEventListener("mouseover", paint);
                allDivsArr[i].removeEventListener("mouseover", erase);
                allDivsArr[i].removeEventListener("mouseover", random);
                allDivsArr[i].removeEventListener("mouseover", black);
                allDivsArr[i].addEventListener("mouseover", shadow);
                allDivsArr[i].setAttribute("data-opacity", 0.1);
            }            
        }   

        function removeAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
        
         
        function getGridSize(){
            gridSize = prompt("Input the number of squares per side (1-64): ");    
            if (gridSize>64) {
                alert("ERROR: Number too large; 64 will be used");
                gridSize = 64; 
            }
            return gridSize; 
        }

        function newGrid() {
            removeAllChildNodes(container[0])
            let numberOfSquares = getGridSize();  
            
            for (i=0; i<numberOfSquares*numberOfSquares; i++) {
                const smallDiv = document.createElement('div');
                smallDiv.classList.add('xs-divs');    
                container[0].appendChild(smallDiv);
            }      
            container[0].style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; 
            container[0].style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
         }

        function firstGrid() {
            for (i=0; i<256; i++) {
                const smallDiv = document.createElement('div');
                smallDiv.classList.add('xs-divs');    
                container[0].appendChild(smallDiv);
            }      
            container[0].style.gridTemplateColumns = "repeat(16, 1fr)"; 
            container[0].style.gridTemplateRows = "repeat(16, 1fr)";

            const allDivs = document.querySelectorAll(".xs-divs");
            const allDivsArr = Array.prototype.slice.call(allDivs);
            for(i=0; i<allDivsArr.length; i++){
                allDivsArr[i].addEventListener("mouseover", paint);
            }
        } 

        function clearCanvas(){
            const allDivs = document.querySelectorAll(".xs-divs");
            const allDivsArr = Array.prototype.slice.call(allDivs);
            for(i=0; i<allDivsArr.length; i++){
                allDivsArr[i].style.background = "white";
            }    
        }

        firstGrid(); 
