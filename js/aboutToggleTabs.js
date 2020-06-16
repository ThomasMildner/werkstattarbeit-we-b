let glActiveImg = true;
let glActiveTxt = false;

document.getElementById('gl-img-button').addEventListener('click', function() {
   glActiveImg = true;
   glActiveTxt = false;
    toggleGLTab();
});

document.getElementById('gl-text-button').addEventListener('click', function() {
    glActiveImg = false;
    glActiveTxt = true;
    toggleGLTab();
});


function toggleGLTab() {
    if (glActiveImg && !glActiveTxt) {
        document.getElementById('tab-gl-1').style.display = 'block';
        document.getElementById('tab-gl-2').style.display = 'none';


    } else if(glActiveTxt && !glActiveImg){
        document.getElementById('tab-gl-1').style.display = 'none';
        document.getElementById('tab-gl-2').style.display = 'block';
    }
}




let tActiveImg = true;
let tActiveTxt =false;

document.getElementById('t-img-button').addEventListener('click', function() {
    tActiveImg = true;
    tActiveTxt = false;
    toggleTTab();
});

document.getElementById('t-text-button').addEventListener('click', function() {
    tActiveImg = false;
    tActiveTxt = true;
    toggleTTab();
});

function toggleTTab() {
    if (tActiveImg && !tActiveTxt) {
        document.getElementById('tab-t-1').style.display = 'block';
        document.getElementById('tab-t-2').style.display = 'none';
    } else if(tActiveTxt && !tActiveImg){
        document.getElementById('tab-t-1').style.display = 'none';
        document.getElementById('tab-t-2').style.display = 'block';
    }
}
