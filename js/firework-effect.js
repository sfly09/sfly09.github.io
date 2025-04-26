// 烟花点击效果
document.addEventListener('DOMContentLoaded', function() {
    // 创建烟花容器
    const fireworkContainer = document.createElement('div');
    fireworkContainer.className = 'firework-container';
    document.body.appendChild(fireworkContainer);
    
    // 鼠标点击时的烟花效果
    document.addEventListener('click', function(e) {
        createFirework(e.clientX, e.clientY);
    });
    
    // 创建烟花效果
    function createFirework(x, y) {
        // 创建烟花中心点
        const fireworkCenter = document.createElement('div');
        fireworkCenter.className = 'firework-center';
        fireworkCenter.style.left = x + 'px';
        fireworkCenter.style.top = y + 'px';
        fireworkContainer.appendChild(fireworkCenter);
        
        // 创建烟花粒子
        const particleCount = 30; // 粒子数量
        const colors = ['#ffadbb', '#ffc0cb', '#ffdbe1', '#ff009d', '#ff4dbb', '#d000ff', '#ffafff', '#fffaff'];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'firework-particle';
            
            // 随机颜色
            const color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.backgroundColor = color;
            
            // 随机角度和距离
            const angle = Math.random() * Math.PI * 2;
            const distance = 30 + Math.random() * 70;
            
            // 设置动画
            particle.style.setProperty('--angle', angle + 'rad');
            particle.style.setProperty('--distance', distance + 'px');
            particle.style.setProperty('--delay', Math.random() * 0.2 + 's');
            
            fireworkCenter.appendChild(particle);
        }
        
        // 动画结束后移除元素
        setTimeout(() => {
            fireworkCenter.remove();
        }, 1500);
    }
    
    // 自定义鼠标指针
    document.body.style.cursor = 'none';
    
    // 创建自定义鼠标指针
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    // 更新鼠标指针位置
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});