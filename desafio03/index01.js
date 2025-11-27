class Photo {
  take(photoName) {}
}

class Video {
  record(videoName) {}
}

class Audio {
  capture(audioName) {}
}


// === IMPLEMENTAÇÕES BÁSICAS ===
class BasicPhoto extends Photo {
  take(photoName) {
    console.log("📸 Capturando foto:", photoName);
  }
}

class BasicVideo extends Video {
  record(videoName) {
    console.log("🎥 Gravando vídeo:", videoName);
  }
}

class BasicAudio extends Audio {
  capture(audioName) {
    console.log("🎙 Gravando áudio:", audioName);
  }
}

class MultiMediaStation {
  constructor(photoService, videoService, audioService) {
    this.photo = photoService;
    this.video = videoService;
    this.audio = audioService;
  }

  take(photoName) {
    this.photo.take(photoName);
  }

  record(videoName) {
    this.video.record(videoName);
  }

  capture(audioName) {
    this.audio.capture(audioName);
  }
}


const photo = new BasicPhoto();
const video = new BasicVideo();
const audio = new BasicAudio();

const station = new MultiMediaStation(photo, video, audio);

station.take("evento-aniversario.jpg");
station.record("entrevista-oficial.mp4");
station.capture("podcast-episodio1.wav");
