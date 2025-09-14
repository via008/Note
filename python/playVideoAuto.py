from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
import time
import os
from selenium.webdriver.chrome.service import Service

service = Service('/Users/qinzhang/Downloads/chromedriver-mac-arm64/chromedriver')

# 配置 Chrome 选项
chrome_options = webdriver.ChromeOptions()

# 添加允许媒体自动播放的参数
chrome_options.add_argument("--autoplay-policy=no-user-gesture-required")

# 添加禁用页面可见性API的参数
chrome_options.add_argument("--disable-features=PageVisibility")

# 添加保持活动状态的参数
chrome_options.add_argument("--disable-background-timer-throttling")
chrome_options.add_argument("--disable-backgrounding-occluded-windows")
chrome_options.add_argument("--disable-renderer-backgrounding")

# 配置 WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)

# 登录凭据（建议使用环境变量或配置文件存储）
username = os.environ.get('SMARTEDU_USERNAME', '17320484636')  # 替换为你的用户名
password = os.environ.get('SMARTEDU_PASSWORD', '@17320484636z')  # 替换为你的密码

# 打开目标网页
driver.get('https://basic.smartedu.cn/teacherTraining/courseDetail?courseId=cb134d8b-ebe5-4953-8c2c-10d27b45b8dc&tag=2025%E5%B9%B4%E2%80%9C%E6%9A%91%E6%9C%9F%E6%95%99%E5%B8%88%E7%A0%94%E4%BF%AE%E2%80%9D%E4%B8%93%E9%A2%98&channelId=&libraryId=bb042e69-9a11-49a1-af22-0c3fab2e92b9&breadcrumb=2025%E5%B9%B4%E2%80%9C%E6%9A%91%E6%9C%9F%E6%95%99%E5%B8%88%E7%A0%94%E4%BF%AE%E2%80%9D%E4%B8%93%E9%A2%98&resourceId=276febb4-e595-4561-9f81-8f4a7cccc238')

# 等待页面加载完成
WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//div[text()='登录']")))

# 点击登录按钮
login_button = driver.find_element(By.XPATH, "//div[text()='登录']")
login_button.click()

# 等待登录表单加载
WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, 'input[id="username"]')))

# 输入用户名和密码
username_input = driver.find_element(By.CSS_SELECTOR, 'input[id="username"]')
username_input.send_keys(username)

password_input = driver.find_element(By.CSS_SELECTOR, 'input[id="tmpPassword"]')
password_input.send_keys(password)

# 点击 同意协议
agreementCheckbox = driver.find_element(By.CSS_SELECTOR, 'input[id="agreementCheckbox"]')
agreementCheckbox.click()

time.sleep(3)  # 等待3秒，确保协议框被选中

# 点击登录提交按钮
submit_button = driver.find_element(By.CSS_SELECTOR, 'button[id="loginBtn"]')
submit_button.click()


# 等待登录成功并加载页面
print("等待登录成功...")
time.sleep(15)  # 给登录过程一些时间

# 等待视频元素出现，表示登录成功并且页面已加载
print("等待视频元素加载...")
WebDriverWait(driver, 15).until(EC.presence_of_element_located((By.TAG_NAME, 'video')))
print("登录成功，视频元素已加载")

# 找到视频元素
video = driver.find_element(By.TAG_NAME, 'video')
print("视频元素已加载")

# 添加JavaScript代码防止视频在切换桌面时暂停
driver.execute_script("""
// 设置视频属性，防止自动暂停
var video = document.querySelector('video');
if (video) {
    // 设置视频为静音，这样在后台也能继续播放
    video.muted = true;
    
    // 添加事件监听器，在视频暂停时自动恢复播放
    video.addEventListener('pause', function() {
        // 检查是否因为用户切换桌面而暂停
        if (!document.hidden) {
            video.play();
        }
    });
    
    // 添加可见性变化监听器，在页面重新可见时恢复播放
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden && video.paused) {
            video.play();
        }
    });
    
    // 设置视频循环播放
    video.loop = true;
    
    // 设置视频自动播放
    video.autoplay = true;
    
    // 禁用页面可见性API对视频的控制
    video.setAttribute('disablePictureInPicture', '');
    video.setAttribute('disableRemotePlayback', '');
    
    console.log('已设置视频防暂停属性');
}
""")

def find_and_click_video_elements(driver, current_video_index=0):
    """查找并点击视频相关元素
    
    Args:
        driver: WebDriver实例
        current_video_index: 当前要播放的视频索引，默认为0（第一个视频）
        
    Returns:
        int: 下一个要播放的视频索引
    """
    # 找到 class 为 fish-collapse 元素下所有 title="进行中" 或者 title="未开始" 的 i 元素
    fish_collapse = driver.find_element(By.CSS_SELECTOR, '.fish-collapse')
    print("找到 fish-collapse 元素")
    
    # 查找所有符合条件的视频元素
    title_elements = fish_collapse.find_elements(By.XPATH, './/i[@title="进行中" or @title="未开始"]')
    print(f"找到 {len(title_elements)} 个可播放的视频元素")
    
    if not title_elements:
        print("没有找到可播放的视频元素")
        return -1
    
    # 确保索引在有效范围内
    if current_video_index >= len(title_elements):
        print("所有视频已播放完毕，重新从第一个开始")
        current_video_index = 0
    
    # 获取当前索引对应的元素
    title_element = title_elements[current_video_index]
    print(f"选择第 {current_video_index + 1} 个视频元素（共 {len(title_elements)} 个）")
    
    # 找到 title_element 的父级的父级的父级的父级
    parent_element = title_element.find_element(By.XPATH, './../../../..')
    print("找到视频元素的父级")
    
    # 使用JavaScript执行点击，避免元素被拦截
    driver.execute_script("arguments[0].click();", parent_element)
    print("父级元素点击完成")

    # 首先等待页面加载完成，确保所有元素都已渲染
    time.sleep(3)
    
    # 直接使用JavaScript查找并点击播放按钮，绕过WebDriver的元素交互限制
    driver.execute_script("""
    // 尝试多种选择器找到播放按钮
    var playButton = document.querySelector('.vjs-big-play-button') || 
                     document.querySelector('[title="Play Video"]') || 
                     document.querySelector('.vjs-play-control');
    
    if (playButton) {
        // 确保元素可见
        playButton.style.display = 'block';
        playButton.style.visibility = 'visible';
        playButton.style.opacity = '1';
        
        // 滚动到元素位置
        playButton.scrollIntoView({block: 'center', behavior: 'smooth'});
        
        // 模拟点击事件
        var clickEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        playButton.dispatchEvent(clickEvent);
        console.log('通过JavaScript点击播放按钮');
    } else {
        // 如果找不到播放按钮，直接尝试播放视频
        var video = document.querySelector('video');
        if (video) {
            video.play();
            console.log('直接通过JavaScript播放视频');
        } else {
            console.log('无法找到视频元素或播放按钮');
        }
    }
    """)    
    print("尝试通过JavaScript点击播放按钮或直接播放视频")
    
    # 等待一段时间，确保JavaScript执行完成
    time.sleep(5)  # 增加等待时间，确保视频开始加载

    print("播放按钮点击完成")
    
    # 等待视频元素出现并开始播放
    try:
        # 等待视频元素出现
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, "video"))
        )
        print("视频元素已加载")
    except Exception as e:
        print(f"等待视频元素出现超时: {e}")
    
    # 确保视频开始播放并设置为静音（在后台播放时需要）
    driver.execute_script("""
    var video = document.querySelector('video');
    if (video) {
        // 确保视频播放
        video.play();
        
        // 设置为静音，这样在后台也能继续播放
        // video.muted = true;
        
        // 设置视频播放速度（可选，1.0是正常速度）
        video.playbackRate = 2.0;
        
        console.log('视频已开始播放，并设置为静音');
    }
    """)
    
    # 返回当前视频索引
    return current_video_index

# 调用函数查找并点击第一个视频元素
current_video_index = find_and_click_video_elements(driver, 0)

# 播放视频并等待
wait = WebDriverWait(driver, 180)  # 设置3分钟的超时时间
try:
    # 添加一个JavaScript函数来监控视频播放状态
    driver.execute_script("""
    window.videoCompleted = false;
    var video = document.querySelector('video');
    if (video) {
        video.addEventListener('ended', function() {
            window.videoCompleted = true;
            console.log('视频播放完成');
        });
    }
    """)
    
    # 等待视频结束事件
    wait.until(lambda d: d.execute_script("return window.videoCompleted === true"))
    print("视频播放完毕")
except Exception as e:
    print(f"等待视频播放完成超时: {e}")
    
# 添加一个定时检查，确保视频在后台也能继续播放
driver.execute_script("""
// 定期检查视频是否在播放
setInterval(function() {
    var video = document.querySelector('video');
    if (video && video.paused && !video.ended) {
        console.log('检测到视频暂停，尝试恢复播放');
        video.play();
    }
}, 5000); // 每5秒检查一次
""")

print("视频播放完毕")

# 视频播放完毕
current_video_index = 0
# 记录已播放的视频索引，避免重复播放
played_videos = set()

while True:
    try:
        # 检查是否所有视频都已播放
        if len(played_videos) > 0 and current_video_index in played_videos:
            print(f"视频索引 {current_video_index} 已经播放过，尝试下一个")
            current_video_index += 1
            
            # 获取视频总数，检查是否所有视频都已播放完毕
            try:
                video_count = driver.execute_script("""
                var elements = document.querySelectorAll('.fish-collapse i[title="进行中"], .fish-collapse i[title="未开始"]');
                return elements.length;
                """)
                
                if len(played_videos) >= video_count or current_video_index >= video_count:
                    print(f"所有视频已播放完毕（共{video_count}个视频）")
                    break
            except Exception as e:
                print(f"获取视频总数失败: {e}")
                
            continue
            
        # 播放下一个视频
        next_video_index = find_and_click_video_elements(driver, current_video_index)
        
        if next_video_index == -1:
            print("没有找到可播放的视频，退出循环")
            break
            
        # 记录已播放的视频
        played_videos.add(current_video_index)
            
        # 更新当前视频索引为下一个
        current_video_index = next_video_index + 1
        print(f"下一个将播放视频索引: {current_video_index}")
        
        # 等待页面加载完成
        time.sleep(3)
        
        # 等待视频播放完成
        try:
            # 重置视频完成状态
            driver.execute_script("window.videoCompleted = false;")
            
            # 添加视频结束事件监听，先移除旧的监听器再添加新的
            driver.execute_script("""
            var video = document.querySelector('video');
            if (video) {
                // 创建一个命名的事件处理函数，以便后续可以移除
                if (!window.videoEndedHandler) {
                    window.videoEndedHandler = function() {
                        window.videoCompleted = true;
                        console.log('视频播放完成');
                    };
                } else {
                    // 移除旧的事件监听器
                    video.removeEventListener('ended', window.videoEndedHandler);
                }
                
                // 添加新的事件监听器
                video.addEventListener('ended', window.videoEndedHandler);
                console.log('已添加视频结束事件监听器');
            }
            """)
            
            # 等待视频结束事件，设置超时时间
            wait = WebDriverWait(driver, 180)  # 3分钟超时
            wait.until(lambda d: d.execute_script("return window.videoCompleted === true"))
            print("当前视频播放完毕，准备播放下一个视频")
        except Exception as e:
            print(f"等待视频播放完成超时: {e}")
            # 如果超时，继续下一个视频
    except Exception as e:
        print(f"===错误: {e}")
        break

# 关闭浏览器
driver.quit()
