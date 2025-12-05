import ffmpeg from 'ffmpeg-static';
import fluent from 'fluent-ffmpeg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const musicDir = path.join(__dirname, 'public', 'music');

fluent.setFfmpegPath(ffmpeg);

async function compressAudio() {
    if (!fs.existsSync(musicDir)) {
        console.error("Music directory not found:", musicDir);
        return;
    }

    const files = fs.readdirSync(musicDir).filter(file => file.endsWith('.mp3'));

    console.log(`Found ${files.length} audio files to process.`);

    for (const file of files) {
        const inputPath = path.join(musicDir, file);
        const tempPath = path.join(musicDir, `temp_${file}`);

        console.log(`Compressing ${file}...`);

        await new Promise((resolve, reject) => {
            fluent(inputPath)
                .audioBitrate('128k')
                .save(tempPath)
                .on('end', () => {
                    console.log(`Finished ${file}`);
                    fs.unlinkSync(inputPath);
                    fs.renameSync(tempPath, inputPath);
                    resolve();
                })
                .on('error', (err) => {
                    console.error(`Error processing ${file}:`, err);
                    reject(err);
                });
        });
    }
    console.log("All audio files compressed.");
}

compressAudio();
