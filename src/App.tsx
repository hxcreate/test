import { useState } from 'react'
import './App.css'

interface UserInfo {
  name: string;
  age: string;
  birthDate: string;
}

const fortunes = {
  high: [
    '上上签：前程似锦，万事如意。近期将有贵人相助，事业蒸蒸日上。',
    '上上签：福星高照，家庭和睦。财运亨通，桃花运旺。',
    '上上签：吉星高照，学业有成。考试必过，前途光明。'
  ],
  middle: [
    '中签：平稳运势，循序渐进。付出必有回报，耐心等待时机。',
    '中签：事事中平，不必太忧。保持平常心，终有好结果。',
    '中签：平安顺遂，无灾无祸。守住本心，静待佳音。'
  ],
  low: [
    '下签：诸事不顺，需要谨慎。暂时避开风头，静待转机。',
    '下签：小有阻碍，不必惊慌。调整心态，化解困境。',
    '下签：运势欠佳，谨防小人。凡事三思，以和为贵。'
  ]
}

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    age: '',
    birthDate: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [countdown, setCountdown] = useState(3)
  const [fortune, setFortune] = useState('')
  const [showError, setShowError] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }))
    setShowError(false)
  }

  const getFortune = () => {
    // 验证所有字段是否填写
    if (!userInfo.name || !userInfo.age || !userInfo.birthDate) {
      setShowError(true)
      return
    }

    setIsLoading(true)
    let timer = 3
    setCountdown(timer)

    const countdownInterval = setInterval(() => {
      timer -= 1
      setCountdown(timer)
      if (timer === 0) {
        clearInterval(countdownInterval)
        // 随机选择运势类型和具体文案
        const types = ['high', 'middle', 'low'] as const
        const randomType = types[Math.floor(Math.random() * types.length)]
        const randomIndex = Math.floor(Math.random() * 3)
        setFortune(fortunes[randomType][randomIndex])
        setIsLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="fortune-app">
      <h1>五行算命</h1>
      
      {!isLoading && !fortune && (
        <div className="input-section">
          <div className="input-group">
            <label>姓名：</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              placeholder="请输入姓名"
            />
          </div>
          
          <div className="input-group">
            <label>年龄：</label>
            <input
              type="number"
              name="age"
              value={userInfo.age}
              onChange={handleInputChange}
              placeholder="请输入年龄"
            />
          </div>
          
          <div className="input-group">
            <label>出生日期：</label>
            <input
              type="date"
              name="birthDate"
              value={userInfo.birthDate}
              onChange={handleInputChange}
            />
          </div>

          {showError && (
            <div className="error-message">
              请填写完整的个人信息
            </div>
          )}

          <button onClick={getFortune} className="fortune-button">
            开始算命
          </button>
        </div>
      )}

      {isLoading && (
        <div className="loading-section">
          <div className="loading-spinner"></div>
          <div className="countdown">{countdown}</div>
          <div className="loading-text">正在推算命运...</div>
        </div>
      )}

      {fortune && !isLoading && (
        <div className="fortune-result">
          <h2>您的运势</h2>
          <div className="fortune-text">{fortune}</div>
          <button 
            onClick={() => {
              setFortune('')
              setUserInfo({ name: '', age: '', birthDate: '' })
            }}
            className="reset-button"
          >
            重新算命
          </button>
        </div>
      )}
    </div>
  )
}

export default App
