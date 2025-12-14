// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 生日快乐网页加载成功！');
    
    // 可以在这里添加更多交互功能
    // 例如：点击照片播放音乐、添加更多动画效果等
    
    // 添加点击照片的特效
    const photoFrame = document.querySelector('.photo-frame');
    photoFrame.addEventListener('click', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    });
    
    // 添加鼠标移动的彩色粒子效果（可选）
    document.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.9) {
            createSparkle(e.clientX, e.clientY);
        }
    });
});

// 创建闪烁粒子
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '5px';
    sparkle.style.height = '5px';
    sparkle.style.borderRadius = '50%';
    sparkle.style.backgroundColor = getRandomColor();
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    sparkle.style.zIndex = '9999';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// 获取随机颜色
function getRandomColor() {
    const colors = ['#ff6b9d', '#4facfe', '#feca57', '#a8e6cf', '#ff9ff3', '#00f2fe'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 添加闪烁动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
        100% {
            opacity: 0;
            transform: scale(0) translateY(-50px);
        }
    }
`;
document.head.appendChild(style);