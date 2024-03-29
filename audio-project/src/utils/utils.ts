export class Analyser {
    constructor() {
        this.init();
    }
    public audioContext: any;
    public analyser: any;
    public audioInput: any;
    public audio: any;

    init() {
        this.audioContext = new window.AudioContext();
        this.analyser = this.audioContext.createAnalyser();  // 录音分析节点
        this.analyser.fftSize = 2048;                   // 表示存储频域的大小
    }

    /**
     * 
     * @param url string 音频的地址
     */
    loadMusic(element: HTMLElement) {
        this.audio = element;

    }

}