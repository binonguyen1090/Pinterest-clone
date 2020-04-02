# MusicBucket

[`Live site here `](https://binonguyen1090.github.io/MusicBucket/)
### Background
##### Music bucket is a 16 step sequencer with an 8 track,tone selection grid and a 3 track sound machine with which users can create and manipulate original and groovy loops.


![web-view](musicbucket.png)

### Technologies 
##### The app created using JavaScript, jQuery, HTML/CSS, and Tone.js.
##### Music bucket was constructed utilizing a combination of JavaScript, Tone.js, HTML and CSS. JavaScript was used for the main logic along with Tone.js to generate the various sound samples. HTML was used to structure the application and CSS was used for styling.

### Implementation
##### Music bucket uses JavaScript and jQuery to create a soundboard that loops through playing different beats.

```function repeat() {
    let step = index % 16;
    for (let i = 0; i < rows.length; i++) {
        let synth = synths[i],
            note = notes[i],
            row = rows[i],
        input = row.querySelector(`label:nth-child(${step + 1})`);
        span = input.querySelector(`span`);
        checkbox = input.querySelector('input');
        if (checkbox.checked) {
            if (i <= 7) {
                synth.triggerAttackRelease(note, '8n');  
            } else if (i === 10) {
                synth.triggerAttackRelease(plucknote, '8n');  

            }else {
                synth.triggerAttackRelease('8n');
            }
           
        }
        span.classList.toggle('highlight')

    }
    index++;
} 
```

##### The slider sets the tempo with setTimeout based on the selected tempo.
```
Tone.Transport.bpm.value = 200;
tempo.addEventListener("change", e => {
    Tone.Transport.bpm.rampTo(e.target.value, 0.1);

});

```


### Feature

##### Each cell has the ability to toggle play on or off. When toggled on, the beat will play at tempo as the slider loops through the board. User can increase and decrease tempo, pause, clear and reset the board.
