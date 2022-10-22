export const app = new Vue({
    el: '#app',
    data: {
        seconds: '',
        interval: null,
    },
    methods: {
        startTimer() {
            this.interval = setInterval(this.decrementSeconds, 1000);
            if (this.interval == 0) {
                console.log('done')
            }
        },
        stopTimer() {
            clearInterval(this.interval);
            console.log('done')
        },
        decrementSeconds() {
            this.seconds--;
            if (this.seconds == 0) {
                clearInterval(this.interval);
                let sound = new Howl({
                    src: ['audio/Wooden_Bat.mp3']
                });
                sound.play();
            }
        },
        endAlarm() { }
    }
});

