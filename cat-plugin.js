        (function() {
    // --- 配置区：请替换为你自己的素材链接 ---
    const CONFIG = {
        imgSrc: 'https://voidjam1.github.io/bio/image/oiiai.gif', // 
        audioSrc: 'https://voidjam1.github.io/bio/audio/oiiai.mp3', // 
        catSize: '120px'
    };

    // 1. 创建容器和基础样式
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        text-align: center;
        user-select: none;
        cursor: pointer;
        transition: transform 0.1s ease;
    `;

    // 2. 创建猫咪图片
    const catImg = document.createElement('img');
    catImg.src = CONFIG.imgSrc;
    catImg.style.width = CONFIG.catSize;
    catImg.style.display = 'block';
    
    // 3. 创建计数器
    const counter = document.createElement('div');
    counter.innerText = '0';
    counter.style.cssText = `
        background: rgba(0,0,0,0.6);
        color: white;
        border-radius: 10px;
        padding: 2px 8px;
        font-family: Arial, sans-serif;
        font-weight: bold;
        margin-top: 5px;
    `;

    // 4. 创建音频对象
    const audio = new Audio(CONFIG.audioSrc);

    // 5. 交互逻辑
    let count = 0;
    container.addEventListener('pointerdown', () => {
        count++;
        counter.innerText = count;

        // 音频重置并播放
        audio.currentTime = 0;
        audio.play();

        // 视觉反馈：Oiia 旋转 + 缩放
        container.style.transform = `scale(1.2) rotate(${count * 15}deg)`;
        
        // 抖动特效
        setTimeout(() => {
            container.style.transform = `scale(1) rotate(${count * 15}deg)`;
        }, 100);
    });

    // 组装并添加到页面
    container.appendChild(catImg);
    container.appendChild(counter);
    document.body.appendChild(container);

    console.log("Oiiaioiiiai Cat Plugin Loaded! 🐱✨");
})();
