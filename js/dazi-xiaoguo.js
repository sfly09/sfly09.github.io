document.addEventListener('DOMContentLoaded', function() {
    // 获取需要添加打字效果的元素
    const riyeWenben = document.querySelector('.riye');
    const mengxiangWenben = document.querySelector('.mengxiang');
    
    // 存储原始文本
    const riyeYuanwen = riyeWenben.textContent;
    const mengxiangYuanwen = mengxiangWenben.textContent;
    
    // 清空文本内容
    riyeWenben.textContent = '';
    mengxiangWenben.textContent = '';
    
    // 打字机效果函数
    function daziJi(yuansu, wenben, sudu = 200) {
        return new Promise(resolve => {
            let dangqianZifu = 0;
            const jiange = setInterval(() => {
                yuansu.textContent = wenben.slice(0, ++dangqianZifu);
                
                if (dangqianZifu === wenben.length) {
                    clearInterval(jiange);
                    resolve();
                }
            }, sudu);
        });
    }
    
    // 依次执行打字效果
    async function kaishiDazi() {
        await daziJi(riyeWenben, riyeYuanwen, 110);
        // 第一句话打完后等待一小段时间
        await new Promise(resolve => setTimeout(resolve, 350));
        await daziJi(mengxiangWenben, mengxiangYuanwen, 110);
    }
    
    // 开始执行打字效果
    kaishiDazi();
});