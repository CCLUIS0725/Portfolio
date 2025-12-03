class SoundEngine {
    constructor() {
        this.ctx = null;
        this.masterGain = null;
        this.isMuted = false;
        this.currentMusicUrl = null;
        this.musicNodes = null;
        this.isMusicPaused = false;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.value = 0.6; // Master volume
            this.masterGain.connect(this.ctx.destination);
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playTone(freq, type, duration, volume = 1) {
        if (!this.ctx || this.isMuted) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gain.gain.setValueAtTime(volume, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }

    playHover() {
        // High pitch "blip"
        this.playTone(800, 'sine', 0.1, 0.5);
    }

    playClick() {
        // Lower pitch "confirm"
        this.playTone(400, 'square', 0.15, 0.6);
        setTimeout(() => this.playTone(600, 'square', 0.1, 0.4), 50);
    }

    playTransition() {
        // Whoosh effect
        if (!this.ctx || this.isMuted) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.frequency.setValueAtTime(200, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.3);

        gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.3);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.3);
    }

    playMusic(url) {
        if (!this.ctx) this.init();
        if (this.isMuted) return;

        // If same song is playing, do nothing
        if (this.currentMusicUrl === url && !this.isMusicPaused) return;

        console.log("Attempting to play music:", url);

        // Stop current music
        this.stopMusic();

        this.currentMusicUrl = url;

        // If music is paused, we don't start it yet, but we stored the URL so we can resume it
        if (this.isMusicPaused) return;

        const audio = new Audio(url);
        audio.loop = true;
        audio.volume = 1.0; // Set element volume to max, control via gain

        // Create nodes
        const source = this.ctx.createMediaElementSource(audio);
        const gainNode = this.ctx.createGain();

        source.connect(gainNode);
        gainNode.connect(this.masterGain);

        // Simple fade in
        gainNode.gain.setValueAtTime(0, this.ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.8, this.ctx.currentTime + 2);

        audio.play()
            .then(() => console.log("Music playing successfully"))
            .catch(e => console.error("Audio play failed (Autoplay blocked?):", e));

        this.musicNodes = { audio, source, gainNode };
    }

    setMusicVolume(volume, duration = 1) {
        if (this.musicNodes && this.ctx) {
            const { gainNode } = this.musicNodes;
            try {
                gainNode.gain.cancelScheduledValues(this.ctx.currentTime);
                gainNode.gain.setValueAtTime(gainNode.gain.value, this.ctx.currentTime);
                gainNode.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + duration);
            } catch (e) {
                console.warn("Could not set volume", e);
            }
        }
    }

    stopMusic() {
        if (this.musicNodes) {
            const { audio, gainNode } = this.musicNodes;

            // Fade out
            try {
                gainNode.gain.setValueAtTime(gainNode.gain.value, this.ctx.currentTime);
                gainNode.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.5);

                setTimeout(() => {
                    audio.pause();
                    audio.src = "";
                }, 500);
            } catch (e) {
                audio.pause();
            }

            this.musicNodes = null;
            // Don't clear currentMusicUrl if we are just pausing/stopping temporarily
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.stopMusic();
        } else {
            if (this.currentMusicUrl && !this.isMusicPaused) {
                const url = this.currentMusicUrl;
                this.currentMusicUrl = null; // Reset so it plays again
                this.playMusic(url);
            }
        }
        return this.isMuted;
    }

    toggleMusicPause() {
        this.isMusicPaused = !this.isMusicPaused;
        if (this.isMusicPaused) {
            this.stopMusic();
        } else {
            if (this.currentMusicUrl && !this.isMuted) {
                const url = this.currentMusicUrl;
                this.currentMusicUrl = null; // Reset so it plays again
                this.playMusic(url);
            }
        }
        return this.isMusicPaused;
    }
}

export const soundEngine = new SoundEngine();
