var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags);
var interval;
for(var i=0; i<navMenuAnchorTags.length; i++)
{
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var tragetSectionId = this.textContent.trim().toLowerCase();
        var tragetSection = document.getElementById(tragetSectionId)
        // interval = setInterval(scrollVertically,20,tragetSection);
        interval = setInterval(function(){
            scrollVertically(tragetSection);
        },20);
    });
}

function scrollVertically(tragetSection)
{
    var tragetSectionCoordinates = tragetSection.getBoundingClientRect();
    if(tragetSectionCoordinates.top <= 0)
    {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
}

var progressBars = document.querySelectorAll('.skill-progress > div');;
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBars)
    {
        bar.style.width = 0 + '%';
    }
}

initialiseBars();
function fillBars()
{
    for(let bar of progressBars)
    {
        let tragerWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth>tragerWidth)
            {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        },10);
    }
}

function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight)
    {
        animationDone=true;
        console.log('Skill Section Visible');
        fillBars();
    }
    else if(coordinates.top > window.innerHeight)
    {
        animationDone = false;
        initialiseBars();
    }

}