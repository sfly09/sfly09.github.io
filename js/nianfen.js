// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 设置当前年份
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // 计算网站运行时间
    function calculateRuntime() {
        const startTime = new Date('2022-09-14T00:00:00'); // 设置开始时间
        const currentTime = new Date(); // 获取当前时间
        const timeDiff = currentTime - startTime; // 计算时间差（毫秒）
        
        // 计算天数、小时、分钟和秒数
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        // 格式化显示文本
        const runtimeText = `${days}天${hours}小时${minutes}分${seconds}秒`;
        
        // 更新显示
        document.getElementById('runtime').textContent = runtimeText;
    }
    
    // 首次执行
    calculateRuntime();
    
    // 每秒更新一次
    setInterval(calculateRuntime, 1000);
});